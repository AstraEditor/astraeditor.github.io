#!/bin/bash

CLOUDFLARE_API_TOKEN="${CF_API_TOKEN}"
ZONE_ID="${CF_ZONE_ID}"

if [ -z "${CLOUDFLARE_API_TOKEN}" ] || [ -z "${ZONE_ID}" ]; then
    echo "❌ 错误: 缺少必需的环境变量 CF_API_TOKEN 或 CF_ZONE_ID"
    exit 1
fi

API_URL="https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache"

echo "开始清除 Cloudflare 缓存..."

# 函数：发送清除请求
purge_prefix() {
    local PREFIX="$1"
    local DESCRIPTION="$2"
    
    echo "操作: ${DESCRIPTION}"
    echo "前缀: ${PREFIX}"
    
    RESPONSE=$(curl -s -X POST "${API_URL}" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "{\"prefixes\":[\"${PREFIX}\"]}")
    
    if echo "${RESPONSE}" | grep -q '"success":true'; then
        echo "状态: 成功"
        REQUEST_ID=$(echo "${RESPONSE}" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
        echo "请求ID: ${REQUEST_ID}"
    else
        echo "状态: 失败"
        echo "${RESPONSE}"
    fi
    echo "------------------------------------------"
}

purge_prefix "editors.astras.top/online" "清除 /online 目录缓存"
purge_prefix "editors.astras.top/snapshot" "清除 /snapshot 目录缓存"

echo "所有清除操作已完成"