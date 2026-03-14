(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-simple-project-analyzer"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/simple-project-analyzer/userstyle.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/simple-project-analyzer/userstyle.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* 分析按钮样式 */\n.sa-analyze-button {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: bold;\n  background-color: var(--ui-white);\n  border-width: 1px;\n  border-style: solid;\n  color: var(--text-primary);\n  border-color: var(--ui-black-transparent);\n  padding: 0.2rem 0.5rem;\n  margin: 0;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: border-color 0.2s ease;\n  white-space: nowrap;\n  width: auto;\n  height: 1.5rem;\n  margin-left: 10px;\n}\n\n.sa-analyze-button:hover {\n  border-color: var(--motion-primary);\n}\n\n/* VSCode 布局下的分析按钮样式 */\n[class*=\"tabs\"][class*=\"vscodeList\"] .sa-analyze-button {\n  width: 40px;\n  height: 30px;\n  font-size: 0;\n  background-color: #00000000;\n  border: 0;\n  border-radius: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin-bottom: 10px !important;\n\n}\n\n[class*=\"tabs\"][class*=\"vscodeList\"] .sa-analyze-button img {\n  width: 2rem;\n  height: 2rem;\n}\n\n/* 模态框样式 */\n.sa-analyze-modal-popup {\n  max-width: 90%;\n  max-height: 90vh;\n  width: 900px;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.sa-analyze-modal-popup [class*=\"modal_header\"] {\n  padding: 16px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.sa-analyze-modal-popup [class*=\"modal_header-item-title\"] {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.sa-analyze-modal-content {\n  padding: 0;\n  overflow: hidden;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.sa-analyze-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  height: 100%;\n}\n\n.sa-analyze-spinner {\n  width: 50px;\n  height: 50px;\n  border: 4px solid rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  border-top-color: var(--ui-primary);\n  animation: sa-analyze-spin 1s ease-in-out infinite;\n  margin-bottom: 20px;\n}\n\n@keyframes sa-analyze-spin {\n  to { transform: rotate(360deg); }\n}\n\n.sa-analyze-results {\n  height: 100%;\n  overflow-y: auto;\n  padding: 20px;\n}\n\n/* 模态框主体样式 */\n.sa-analyze-modal-body {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n/* 节样式 */\n.sa-analyze-section {\n  background: var(--ui-secondary);\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.sa-analyze-section-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 16px 0;\n  padding-bottom: 8px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n/* 统计网格样式 */\n.sa-analyze-stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 16px;\n}\n\n.sa-analyze-stat {\n  background: var(--ui-white);\n  border-radius: 8px;\n  padding: 16px;\n  text-align: center;\n  transition: transform 0.2s, box-shadow 0.2s;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n\n.sa-analyze-stat:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.sa-analyze-stat-value {\n  font-size: 24px;\n  font-weight: bold;\n  color: var(--motion-primary);\n  margin-bottom: 8px;\n}\n\n.sa-analyze-stat-label {\n  font-size: 14px;\n  color: var(--text-primary);\n  opacity: 0.8;\n}\n\n/* 行和列样式 */\n.sa-analyze-row {\n  display: flex;\n  gap: 20px;\n}\n\n.sa-analyze-col-6 {\n  flex: 1;\n}\n\n/* 图表容器样式 */\n.sa-analyze-chart-container {\n  background: var(--ui-white);\n  border-radius: 8px;\n  padding: 16px;\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n\n/* 评分详情样式 */\n.sa-analyze-score-details {\n  background: var(--ui-white);\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n\n.sa-analyze-score-summary {\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.sa-analyze-score-summary h4 {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n\n.sa-analyze-score-level {\n  font-size: 14px;\n  color: var(--text-primary);\n  opacity: 0.8;\n}\n\n.sa-analyze-score-item {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n  gap: 12px;\n}\n\n.sa-analyze-score-label {\n  flex: 1;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n\n.sa-analyze-score-bar {\n  flex: 2;\n  height: 8px;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.sa-analyze-score-fill {\n  height: 100%;\n  background: var(--motion-primary);\n  transition: width 0.3s ease;\n}\n\n.sa-analyze-score-value {\n  width: 40px;\n  text-align: right;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n\n/* 扩展列表样式 */\n.sa-analyze-extensions-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.sa-analyze-extension-item {\n  background: var(--ui-white);\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.sa-analyze-extension-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.sa-analyze-extension-color {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.sa-analyze-extension-name {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n\n.sa-analyze-extension-count {\n  font-size: 12px;\n  color: var(--text-primary);\n  opacity: 0.7;\n}\n\n/* 滚动条样式 */\n.sa-analyze-results::-webkit-scrollbar {\n  width: 8px;\n}\n\n.sa-analyze-results::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n}\n\n.sa-analyze-results::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n\n.sa-analyze-results::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n/* 响应式设计 */\n@media (max-width: 768px) {\n  .sa-analyze-modal-popup {\n    max-width: 95%;\n    max-height: 95vh;\n    width: auto;\n    height: auto;\n  }\n  \n  .sa-analyze-stats-grid {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    gap: 12px;\n  }\n  \n  .sa-analyze-stat {\n    padding: 12px;\n  }\n  \n  .sa-analyze-stat-value {\n    font-size: 20px;\n  }\n  \n  .sa-analyze-row {\n    flex-direction: column;\n    gap: 16px;\n  }\n  \n  .sa-analyze-chart-container {\n    height: 250px;\n  }\n  \n  .sa-analyze-extensions-grid {\n    grid-template-columns: 1fr;\n  }\n  \n  .sa-analyze-button {\n    font-size: 12px;\n    padding: 0 8px;\n  }\n}\n\n@media (max-width: 480px) {\n  .sa-analyze-section {\n    padding: 16px;\n  }\n  \n  .sa-analyze-results {\n    padding: 16px;\n  }\n  \n  .sa-analyze-stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/simple-project-analyzer/_runtime_entry.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/simple-project-analyzer/_runtime_entry.js ***!
  \*********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/simple-project-analyzer/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/simple-project-analyzer/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/simple-project-analyzer/userscript.js":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/simple-project-analyzer/userscript.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tw_recolor_build_SPA_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/tw-recolor/build!./SPA.svg */ "./src/lib/tw-recolor/build.js!./src/addons/addons/simple-project-analyzer/SPA.svg");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// 加载Chart.js库
async function loadChartJS() {
  return new Promise((resolve, reject) => {
    if (window.Chart) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/chart.js@4.4.0/dist/chart.umd.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg,
    safeMsg,
    console
  } = _ref;
  // 加载Chart.js库
  await loadChartJS();

  // 项目分析器类
  class SimpleProjectAnalyzer {
    constructor() {
      this.analyzeButton = null;
      this.analyzeModal = null;
      this.removeModal = null;
      this.chartInstance = null;
      this.mathLogicChartInstance = null;
      this.drScratchChartInstance = null;
    }

    // 创建分析按钮
    async createAnalyzeButton() {
      const VSCodeLayout = JSON.parse(localStorage.getItem('AESettings')).EnableVSCodeLayout;

      // 检测是否在 VSCodeLayout 下
      const tabBar = await addon.tab.waitForElement('[class*="react-tabs_react-tabs__tab-list"]', {
        markAsSeen: true
      });

      // 尝试查找 find-bar 插件的位置
      const findBar = document.querySelector('.react-tabs');
      let targetElement;
      if (findBar) {
        // 如果 find-bar 存在，在其右边添加按钮
        targetElement = findBar.parentElement;
      } else {
        // 否则，使用标签栏
        targetElement = tabBar;
      }
      if (!targetElement) return;
      this.analyzeButton = document.createElement('button');
      this.analyzeButton.className = addon.tab.scratchClass('menu-bar_menu-bar-button', {
        others: 'sa-analyze-button'
      });
      if (VSCodeLayout) {
        // VSCodeLayout 下使用 SVG 图标
        const img = document.createElement('img');
        img.src = Object(_lib_tw_recolor_build_SPA_svg__WEBPACK_IMPORTED_MODULE_0__["default"])();
        img.style.filter = "grayscale(100%)";
        img.marginTop = '5px';
        img.width = '20px';
        img.height = '20px';
        img.alt = '分析';
        this.analyzeButton.appendChild(img);
      } else {
        // 普通布局下使用文字
        this.analyzeButton.textContent = msg('analyze-button');
      }
      this.analyzeButton.title = msg('analyze-tooltip');

      // 禁用时隐藏按钮
      addon.tab.displayNoneWhileDisabled(this.analyzeButton);
      this.analyzeButton.addEventListener('click', () => this.showAnalysisModal());

      // 将按钮添加到目标位置
      if (VSCodeLayout) {
        // VSCodeLayout 下，按钮应该插入到标签栏（TabList）中
        tabBar.appendChild(this.analyzeButton);
      } else if (findBar) {
        // 在 find-bar 右边添加
        targetElement.insertBefore(this.analyzeButton, findBar.nextSibling);
      } else {
        // 在标签栏最右方添加
        targetElement.appendChild(this.analyzeButton);
      }
    }

    // 显示分析结果模态框
    showAnalysisModal() {
      // 如果模态框已存在，先移除
      if (this.analyzeModal) {
        this.analyzeModal.remove();
      }

      // 使用 addon.tab.createModal 创建模态框
      const {
        backdrop,
        container,
        content,
        closeButton,
        remove
      } = addon.tab.createModal(msg('modal-title'), {
        isOpen: true
      });
      this.analyzeModal = backdrop;
      this.removeModal = remove;

      // 添加自定义 CSS 类
      container.classList.add('sa-analyze-modal-popup');
      content.classList.add('sa-analyze-modal-content');

      // 生成分析结果HTML（类似子目录中的界面）
      const analysisHTML = this.generateAnalysisHTML();

      // 设置模态框内容
      content.innerHTML = "\n        <div class=\"sa-analyze-loading\" id=\"saAnalyzeLoading\">\n          <div class=\"sa-analyze-spinner\"></div>\n          <p>".concat(msg('analyzing'), "</p>\n        </div>\n        <div class=\"sa-analyze-results\" id=\"saAnalyzeResults\" style=\"display: none;\">\n          ").concat(analysisHTML, "\n        </div>\n      ");

      // 添加关闭事件监听器
      backdrop.addEventListener('click', () => this.closeModal());
      closeButton.addEventListener('click', () => this.closeModal());

      // 异步分析项目
      this.analyzeProject();
    }
    closeModal() {
      if (this.removeModal) {
        this.removeModal();
        this.analyzeModal = null;
        this.removeModal = null;

        // 销毁图表实例
        if (this.chartInstance) {
          this.chartInstance.destroy();
          this.chartInstance = null;
        }
        if (this.mathLogicChartInstance) {
          this.mathLogicChartInstance.destroy();
          this.mathLogicChartInstance = null;
        }
        if (this.drScratchChartInstance) {
          this.drScratchChartInstance.destroy();
          this.drScratchChartInstance = null;
        }
      }
    }

    // 分析项目
    async analyzeProject() {
      try {
        // 使用 vm.toJSON 获取项目数据
        const vm = addon.tab.traps.vm;
        const projectJSON = JSON.parse(vm.toJSON());

        // 执行分析
        const analysis = this.performAnalysis(projectJSON);

        // 更新UI
        this.updateAnalysisResults(analysis);
      } catch (error) {
        console.error(msg('analysis-error', '分析项目时出错:'), error);
        document.getElementById('saAnalyzeLoading').innerHTML = "\n          <p style=\"color: #d32f2f;\">".concat(msg('analysis-error'), "</p>\n        ");
      }
    }

    // 执行分析
    performAnalysis(projectData) {
      const analysis = {
        totalBlocks: 0,
        codeTypes: {},
        extensions: [],
        sprites: 0,
        stageInfo: {},
        editorPlatform: 'Scratch',
        effectiveBlocks: 0,
        functionDefinitions: 0,
        projectSize: 0,
        costumesSize: 0,
        soundsSize: 0,
        costumeCount: 0,
        soundCount: 0,
        variableCount: 0,
        listCount: 0
      };

      // 分析扩展
      this.analyzeExtensions(analysis, projectData);

      // 创建扩展名称映射
      const extensionNameMap = {};
      analysis.extensions.forEach(ext => {
        extensionNameMap[ext.id] = ext.name;
      });

      // 分析代码块
      this.analyzeBlocks(analysis, projectData, extensionNameMap);

      // 分析精灵和舞台
      this.analyzeSprites(analysis, projectData);

      // 分析有效积木和函数定义
      this.analyzeEffectiveBlocks(analysis, projectData);
      return analysis;
    }

    // 分析代码块
    analyzeBlocks(analysis, projectData) {
      let extensionNameMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const targets = projectData.targets || [];
      targets.forEach(target => {
        const blocks = target.blocks || {};
        Object.values(blocks).forEach(block => {
          if (block.opcode) {
            analysis.totalBlocks++;
            const category = this.getBlockCategory(block.opcode, extensionNameMap);
            analysis.codeTypes[category] = (analysis.codeTypes[category] || 0) + 1;
          }
        });
      });
    }

    // 获取积木类型
    getBlockCategory(opcode) {
      let extensionNameMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (opcode.startsWith('motion_')) return msg('motion', '运动');
      if (opcode.startsWith('looks_')) return msg('looks', '外观');
      if (opcode.startsWith('sound_')) return msg('sound', '声音');
      if (opcode.startsWith('event_')) return msg('events', '事件');
      if (opcode.startsWith('control_')) return msg('control', '控制');
      if (opcode.startsWith('sensing_')) return msg('sensing', '侦测');
      if (opcode.startsWith('operator_')) return msg('operators', '运算');
      if (opcode.startsWith('data_')) return msg('data', '数据');
      if (opcode.startsWith('video_')) return msg('video', '视频');

      // 自定义函数和参数
      if (opcode.startsWith('procedures_')) return msg('custom-functions', '自定义函数');
      if (opcode.startsWith('argument_')) return msg('custom-functions', '自定义函数');

      // 扩展积木处理
      if (!this.isStandardBlock(opcode)) {
        const extensionId = this.getExtensionIdFromOpcode(opcode);
        // 优先使用解析的中文名称
        if (extensionNameMap[extensionId]) {
          return extensionNameMap[extensionId];
        }
        // 回退到默认名称
        return this.getExtensionNameFromId(extensionId);
      }
      return msg('other', '其他');
    }

    // 检查是否为标准积木
    isStandardBlock(opcode) {
      const standardCategories = ['motion_', 'looks_', 'sound_', 'event_', 'control_', 'sensing_', 'operator_', 'data_', 'video_', 'procedures_', 'argument_'];
      return standardCategories.some(category => opcode.startsWith(category));
    }

    // 从积木操作码提取扩展ID
    getExtensionIdFromOpcode(opcode) {
      const underscoreIndex = opcode.indexOf('_');
      if (underscoreIndex > 0) {
        return opcode.substring(0, underscoreIndex);
      }
      return opcode;
    }

    // 从扩展ID获取扩展名称
    getExtensionNameFromId(extensionId) {
      const defaultExtensionNames = {
        'music': 'Music',
        'pen': 'Pen',
        'videoSensing': 'Video Sensing',
        'text2speech': 'Text to Speech',
        'translate': 'Translate',
        'makeymakey': 'Makey Makey',
        'microbit': 'micro:bit',
        'ev3': 'LEGO EV3',
        'wedo2': 'LEGO WeDo 2.0',
        'boost': 'LEGO BOOST'
      };
      return defaultExtensionNames[extensionId] || extensionId;
    }

    // 分析扩展
    analyzeExtensions(analysis, projectData) {
      const extensions = projectData.extensions || [];
      const extensionURLs = projectData.extensionURLs || {};

      // 获取所有扩展积木操作码
      const extensionBlocks = this.getExtensionBlocks(projectData);

      // 分析扩展信息
      extensions.forEach(ext => {
        let extensionName = this.getExtensionNameFromId(ext);
        let extensionColor = null;
        const extensionInfo = {
          id: ext,
          name: extensionName,
          color: extensionColor,
          url: extensionURLs[ext] || null,
          blocks: extensionBlocks.filter(block => block.extensionId === ext)
        };
        analysis.extensions.push(extensionInfo);
      });

      // 检查画笔扩展使用情况
      const penBlocks = extensionBlocks.filter(block => block.extensionId === 'pen');
      if (penBlocks.length > 0 && !extensions.includes('pen')) {
        const penExtensionInfo = {
          id: 'pen',
          name: msg('extension-pen', '画笔'),
          color: null,
          url: null,
          blocks: penBlocks
        };
        analysis.extensions.push(penExtensionInfo);
      }
    }

    // 获取扩展积木
    getExtensionBlocks(projectData) {
      const extensionBlocks = [];
      const targets = projectData.targets || [];
      targets.forEach(target => {
        const blocks = target.blocks || {};
        Object.values(blocks).forEach(block => {
          if (block.opcode && !this.isStandardBlock(block.opcode)) {
            const extensionId = this.getExtensionIdFromOpcode(block.opcode);
            extensionBlocks.push({
              opcode: block.opcode,
              extensionId: extensionId
            });
          }
        });
      });
      return extensionBlocks;
    }

    // 分析精灵和舞台
    analyzeSprites(analysis, projectData) {
      const targets = projectData.targets || [];
      const sprites = targets.filter(t => !t.isStage);
      const stage = targets.find(t => t.isStage);
      analysis.sprites = sprites.length;

      // 统计造型和声音
      targets.forEach(target => {
        if (target.costumes) {
          analysis.costumeCount += target.costumes.length;
        }
        if (target.sounds) {
          analysis.soundCount += target.sounds.length;
        }
        if (target.variables) {
          analysis.variableCount += Object.keys(target.variables).length;
        }
        if (target.lists) {
          analysis.listCount += Object.keys(target.lists).length;
        }
      });
    }

    // 分析有效积木和函数定义
    analyzeEffectiveBlocks(analysis, projectData) {
      const targets = projectData.targets || [];
      targets.forEach(target => {
        const blocks = target.blocks || {};
        Object.values(blocks).forEach(block => {
          if (block.opcode) {
            // 统计有效积木（非 shadow）
            if (!block.shadow) {
              analysis.effectiveBlocks++;
            }

            // 统计函数定义
            if (block.opcode === 'procedures_definition') {
              analysis.functionDefinitions++;
            }
          }
        });
      });
    }

    // 计算Dr.Scratch评分
    calculateDrScratchScores(projectData) {
      const scores = {
        [msg('abstraction', '抽象和问题分解')]: 0,
        [msg('parallelism', '并行性')]: 0,
        [msg('logic', '逻辑思维')]: 0,
        [msg('synchronization', '同步')]: 0,
        [msg('flow-control', '流程控制')]: 0,
        [msg('user-interactivity', '用户交互')]: 0,
        [msg('data-representation', '数据表示')]: 0
      };
      const targets = projectData.targets || [];
      const blockTypes = new Set(); // 存储所有使用的积木块种类
      const eventBlockTypes = new Set(); // 存储事件积木块种类
      const controlBlockTypes = new Set(); // 存储控制积木块种类
      const operatorBlockTypes = new Set(); // 存储运算积木块种类
      const dataBlockTypes = new Set(); // 存储数据积木块种类
      const sensingBlockTypes = new Set(); // 存储侦测积木块种类
      const motionBlockTypes = new Set(); // 存储运动积木块种类
      const looksBlockTypes = new Set(); // 存储外观积木块种类
      const soundBlockTypes = new Set(); // 存储声音积木块种类
      const procedureBlockTypes = new Set(); // 存储自定义积木块种类
      const variableNames = new Set();
      const listNames = new Set();

      // 收集所有积木块种类
      targets.forEach(target => {
        const blocks = target.blocks || {};
        Object.values(blocks).forEach(block => {
          if (block.opcode) {
            blockTypes.add(block.opcode);

            // 分类收集积木块种类
            if (block.opcode.startsWith('event_')) {
              eventBlockTypes.add(block.opcode);
            }
            if (block.opcode.startsWith('control_')) {
              controlBlockTypes.add(block.opcode);
            }
            if (block.opcode.startsWith('operator_')) {
              operatorBlockTypes.add(block.opcode);
            }
            if (block.opcode.startsWith('data_')) {
              dataBlockTypes.add(block.opcode);
            }
            if (block.opcode.startsWith('sensing_')) {
              sensingBlockTypes.add(block.opcode);
            }
            if (block.opcode.startsWith('motion_')) {
              motionBlockTypes.add(block.opcode);
            }
            if (block.opcode.startsWith('looks_')) {
              looksBlockTypes.add(block.opcode);
            }
            if (block.opcode.startsWith('sound_')) {
              soundBlockTypes.add(block.opcode);
            }
            if (block.opcode.startsWith('procedures_')) {
              procedureBlockTypes.add(block.opcode);
            }
          }
        });

        // 收集变量和列表名称
        if (target.variables) {
          Object.values(target.variables).forEach(variable => {
            if (Array.isArray(variable) && variable.length > 0) {
              variableNames.add(variable[0]);
            }
          });
        }
        if (target.lists) {
          Object.values(target.lists).forEach(list => {
            if (Array.isArray(list) && list.length > 0) {
              listNames.add(list[0]);
            }
          });
        }
      });

      // 1. 抽象和问题分解 (Abstraction and problem decomposition)
      // 完全基于积木块种类评分
      const spriteCount = targets.filter(t => !t.isStage).length;
      const hasMultipleSprites = spriteCount > 1;
      const hasMultipleScripts = eventBlockTypes.size > 1; // 多种事件积木表示多个脚本
      const hasCustomBlocks = procedureBlockTypes.has('procedures_definition');
      const hasClones = controlBlockTypes.has('control_create_clone_of') || controlBlockTypes.has('control_start_as_clone');
      if (hasMultipleSprites && hasMultipleScripts) {
        scores[msg('abstraction', '抽象和问题分解')] = 1; // Basic
      }
      if (hasCustomBlocks) {
        scores[msg('abstraction', '抽象和问题分解')] = 2; // Developing
      }
      if (hasClones) {
        scores[msg('abstraction', '抽象和问题分解')] = 3; // Proficiency
      }

      // 2. 并行性 (Parallelism)
      // 基于不同的事件积木块种类
      const hasGreenFlag = eventBlockTypes.has('event_whenflagclicked');
      const hasKeyEvents = eventBlockTypes.has('event_whenkeypressed');
      const hasClickEvents = eventBlockTypes.has('event_whenthisspriteclicked');
      const hasMessageEvents = eventBlockTypes.has('event_whenbroadcastreceived');
      const hasCloneEvents = controlBlockTypes.has('control_create_clone_of');
      const hasSensorEvents = eventBlockTypes.has('event_whengreaterthan');
      const hasBackdropEvents = eventBlockTypes.has('event_whenbackdropswitchesto');
      if (hasGreenFlag && eventBlockTypes.size > 1) {
        scores[msg('parallelism', '并行性')] = 1; // Basic - 多个绿旗脚本
      }
      if ((hasKeyEvents || hasClickEvents) && eventBlockTypes.size > 2) {
        scores[msg('parallelism', '并行性')] = 2; // Developing - 按键或点击事件
      }
      if (hasMessageEvents || hasCloneEvents || hasSensorEvents || hasBackdropEvents) {
        scores[msg('parallelism', '并行性')] = 3; // Proficiency - 消息、克隆或传感器事件
      }

      // 3. 逻辑思维 (Logical thinking)
      // 基于不同的逻辑积木块种类
      const hasIf = controlBlockTypes.has('control_if');
      const hasIfElse = controlBlockTypes.has('control_if_else');
      const hasLogicOps = operatorBlockTypes.has('operator_and') || operatorBlockTypes.has('operator_or') || operatorBlockTypes.has('operator_not');
      if (hasIf) {
        scores[msg('logic', '逻辑思维')] = 1; // Basic
      }
      if (hasIfElse) {
        scores[msg('logic', '逻辑思维')] = 2; // Developing
      }
      if (hasLogicOps) {
        scores[msg('logic', '逻辑思维')] = 3; // Proficiency
      }

      // 4. 同步 (Synchronization)
      // 基于不同的同步积木块种类
      const hasWait = controlBlockTypes.has('control_wait');
      const hasBroadcast = eventBlockTypes.has('event_broadcast');
      const hasReceiveMessage = eventBlockTypes.has('event_whenbroadcastreceived');
      const hasStopAll = controlBlockTypes.has('control_stop_all');
      const hasStopThis = controlBlockTypes.has('control_stop_this_script');
      const hasStopOther = controlBlockTypes.has('control_stop_other_scripts_in_sprite');
      const hasWaitUntil = controlBlockTypes.has('control_wait_until');
      const hasBackdropChange = looksBlockTypes.has('looks_nextbackdrop') || looksBlockTypes.has('looks_switchbackdropto');
      const hasBroadcastAndWait = eventBlockTypes.has('event_broadcastandwait');
      if (hasWait) {
        scores[msg('synchronization', '同步')] = 1; // Basic
      }
      if (hasBroadcast || hasReceiveMessage || hasStopAll || hasStopThis || hasStopOther) {
        scores[msg('synchronization', '同步')] = 2; // Developing
      }
      if (hasWaitUntil || hasBackdropChange || hasBroadcastAndWait) {
        scores[msg('synchronization', '同步')] = 3; // Proficiency
      }

      // 5. 流程控制 (Flow control)
      // 基于不同的流程控制积木块种类
      const hasSequence = blockTypes.size > 0; // 任何积木块都表示有序列
      const hasRepeat = controlBlockTypes.has('control_repeat') || controlBlockTypes.has('control_forever');
      const hasRepeatUntil = controlBlockTypes.has('control_repeat_until');
      if (hasSequence) {
        scores[msg('flow-control', '流程控制')] = 1; // Basic
      }
      if (hasRepeat) {
        scores[msg('flow-control', '流程控制')] = 2; // Developing
      }
      if (hasRepeatUntil) {
        scores[msg('flow-control', '流程控制')] = 3; // Proficiency
      }

      // 6. 用户交互 (User Interactivity)
      // 基于不同的交互积木块种类
      const hasGreenFlagEvent = eventBlockTypes.has('event_whenflagclicked');
      const hasKeyPressedEvent = eventBlockTypes.has('event_whenkeypressed');
      const hasSpriteClickedEvent = eventBlockTypes.has('event_whenthisspriteclicked');
      const hasAskWait = sensingBlockTypes.has('sensing_askandwait');
      const hasMouseBlocks = sensingBlockTypes.has('sensing_mousedown') || sensingBlockTypes.has('sensing_mousex') || sensingBlockTypes.has('sensing_mousey');
      const hasSensorGreater = eventBlockTypes.has('event_whengreaterthan');
      const hasVideo = Array.from(blockTypes).some(type => type.startsWith('video_'));
      const hasAudioInteraction = soundBlockTypes.has('sound_playuntildone') || soundBlockTypes.has('sound_setvolumeto') || soundBlockTypes.has('sound_changevolumeby');
      if (hasGreenFlagEvent) {
        scores[msg('user-interactivity', '用户交互')] = 1; // Basic
      }
      if (hasKeyPressedEvent || hasSpriteClickedEvent || hasAskWait || hasMouseBlocks) {
        scores[msg('user-interactivity', '用户交互')] = 2; // Developing
      }
      if (hasSensorGreater || hasVideo || hasAudioInteraction) {
        scores[msg('user-interactivity', '用户交互')] = 3; // Proficiency
      }

      // 7. 数据表示 (Data representation)
      // 基于不同的数据积木块种类
      const hasSpriteModifiers = motionBlockTypes.size > 0 || looksBlockTypes.size > 0 || soundBlockTypes.size > 0;
      const hasVariableOperations = variableNames.size > 0 && dataBlockTypes.size > 0;
      const hasListOperations = listNames.size > 0 && Array.from(dataBlockTypes).some(type => type.includes('list'));
      if (hasSpriteModifiers) {
        scores[msg('data-representation', '数据表示')] = 1; // Basic
      }
      if (hasVariableOperations) {
        scores[msg('data-representation', '数据表示')] = 2; // Developing
      }
      if (hasListOperations) {
        scores[msg('data-representation', '数据表示')] = 3; // Proficiency
      }
      return scores;
    }

    // 计算数学逻辑评分
    calculateMathLogicScores(projectData) {
      const targets = projectData.targets || [];

      // 统计各类积木块数量
      let operatorCount = 0;
      let controlCount = 0;
      let dataCount = 0;
      targets.forEach(target => {
        const blocks = target.blocks || {};
        Object.values(blocks).forEach(block => {
          if (!block.opcode) return;
          if (block.opcode.startsWith('operator_')) {
            operatorCount++;
          }
          if (block.opcode.startsWith('control_')) {
            controlCount++;
          }
          if (block.opcode.startsWith('data_')) {
            dataCount++;
          }
        });
      });
      const scores = {
        [msg('operation-complexity', 'Operation Complexity')]: operatorCount,
        [msg('logic-depth', 'Logic Depth')]: controlCount,
        [msg('data-magnitude', 'Data Magnitude')]: dataCount
      };
      return scores;
    }

    // 格式化文件大小
    formatFileSize(bytes) {
      if (bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // 生成分析结果HTML
    generateAnalysisHTML() {
      return "\n        <div class=\"sa-analyze-modal-body\">\n          <!-- \u9879\u76EE\u7EDF\u8BA1\u90E8\u5206 -->\n          <div class=\"sa-analyze-section\">\n            <h3 class=\"sa-analyze-section-title\">".concat(msg('project-stats', '项目统计'), "</h3>\n            <div class=\"sa-analyze-stats-grid\" id=\"saStatsGrid\">\n              <div class=\"sa-analyze-stat\">\n                <div class=\"sa-analyze-stat-value\">-</div>\n                <div class=\"sa-analyze-stat-label\">").concat(msg('total-blocks', '总代码块数'), "</div>\n              </div>\n              <div class=\"sa-analyze-stat\">\n                <div class=\"sa-analyze-stat-value\">-</div>\n                <div class=\"sa-analyze-stat-label\">").concat(msg('effective-blocks', '有效积木'), "</div>\n              </div>\n              <div class=\"sa-analyze-stat\">\n                <div class=\"sa-analyze-stat-value\">-</div>\n                <div class=\"sa-analyze-stat-label\">").concat(msg('function-definitions', '函数定义'), "</div>\n              </div>\n              <div class=\"sa-analyze-stat\">\n                <div class=\"sa-analyze-stat-value\">-</div>\n                <div class=\"sa-analyze-stat-label\">").concat(msg('stat-sprites', '精灵数量'), "</div>\n              </div>\n              <div class=\"sa-analyze-stat\">\n                <div class=\"sa-analyze-stat-value\">-</div>\n                <div class=\"sa-analyze-stat-label\">").concat(msg('stat-costumes', '造型数量'), "</div>\n              </div>\n              <div class=\"sa-analyze-stat\">\n                <div class=\"sa-analyze-stat-value\">-</div>\n                <div class=\"sa-analyze-stat-label\">").concat(msg('stat-sounds', '声音数量'), "</div>\n              </div>\n              <div class=\"sa-analyze-stat\">\n                <div class=\"sa-analyze-stat-value\">-</div>\n                <div class=\"sa-analyze-stat-label\">").concat(msg('stat-variables', '变量数量'), "</div>\n              </div>\n              <div class=\"sa-analyze-stat\">\n                <div class=\"sa-analyze-stat-value\">-</div>\n                <div class=\"sa-analyze-stat-label\">").concat(msg('stat-lists', '列表数量'), "</div>\n              </div>\n              <div class=\"sa-analyze-stat\">\n                <div class=\"sa-analyze-stat-value\">-</div>\n                <div class=\"sa-analyze-stat-label\">").concat(msg('extensions', '扩展数量'), "</div>\n              </div>\n            </div>\n          </div>\n\n          <!-- \u4EE3\u7801\u7C7B\u578B\u5206\u5E03 -->\n          <div class=\"sa-analyze-section\">\n            <h3 class=\"sa-analyze-section-title\">").concat(msg('block-distribution', '代码类型分布'), "</h3>\n            <div class=\"sa-analyze-chart-container\">\n              <canvas id=\"saCodeTypeChart\" width=\"400\" height=\"200\"></canvas>\n            </div>\n          </div>\n\n          <!-- Dr.Scratch\u8BC4\u5206\u7CFB\u7EDF -->\n          <div class=\"sa-analyze-section\">\n            <h3 class=\"sa-analyze-section-title\">").concat(msg('dr-scratch-score', 'Dr.Scratch评分系统'), "</h3>\n            <div class=\"sa-analyze-row\">\n              <div class=\"sa-analyze-col-6\">\n                <div class=\"sa-analyze-chart-container\">\n                  <canvas id=\"saDrScratchChart\" width=\"400\" height=\"300\"></canvas>\n                </div>\n              </div>\n              <div class=\"sa-analyze-col-6\">\n                <div class=\"sa-analyze-score-details\" id=\"saDrScratchDetails\">\n                  <div class=\"sa-analyze-score-summary\">\n                    <h4>").concat(msg('total-score', '总分'), "\uFF1A<span id=\"saDrScratchTotalScore\">0</span> / 21</h4>\n                    <div class=\"sa-analyze-score-level\" id=\"saDrScratchScoreLevel\">").concat(msg('evaluation-level', '评估等级'), "\uFF1A").concat(msg('calculating', '计算中...'), "</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- \u6838\u5FC3\u6570\u5B66\u80FD\u529B\u8BC4\u4F30 -->\n          <div class=\"sa-analyze-section\">\n            <h3 class=\"sa-analyze-section-title\">").concat(msg('math-logic-assessment', '核心数学能力评估'), "</h3>\n            <div class=\"sa-analyze-row\">\n              <div class=\"sa-analyze-col-6\">\n                <div class=\"sa-analyze-chart-container\">\n                  <canvas id=\"saMathLogicChart\" width=\"400\" height=\"300\"></canvas>\n                </div>\n              </div>\n              <div class=\"sa-analyze-col-6\">\n                <div class=\"sa-analyze-score-details\" id=\"saMathLogicDetails\">\n                  <div class=\"sa-analyze-score-summary\">\n                    <h4>").concat(msg('math-total-score', '数学总分'), "\uFF1A<span id=\"saMathTotalScore\">0</span> ").concat(msg('blocks-count', ''), "</h4>\n                    <div class=\"sa-analyze-score-level\" id=\"saMathScoreLevel\">").concat(msg('evaluation-level', '评估等级'), "\uFF1A").concat(msg('calculating', '计算中...'), "</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- \u4F7F\u7528\u7684\u6269\u5C55 -->\n          <div class=\"sa-analyze-section\">\n            <h3 class=\"sa-analyze-section-title\">").concat(msg('extensions-used', '使用的扩展'), "</h3>\n            <div class=\"sa-analyze-extension-list\" id=\"saExtensionList\">\n              <p>").concat(msg('loading', '加载中...'), "</p>\n            </div>\n          </div>\n        </div>\n      ");
    }

    // 更新分析结果
    updateAnalysisResults(analysis) {
      // 更新统计数据
      this.updateStats(analysis);

      // 更新代码类型分布图
      this.displayCodeTypeChart(analysis);

      // 计算并更新Dr.Scratch评分
      const vm = addon.tab.traps.vm;
      const projectJSON = JSON.parse(vm.toJSON());
      const drScratchScores = this.calculateDrScratchScores(projectJSON);
      this.displayDrScratchScores(drScratchScores);

      // 计算并更新数学逻辑评分
      const mathLogicScores = this.calculateMathLogicScores(projectJSON);
      this.displayMathLogicScores(mathLogicScores);

      // 更新扩展列表
      this.displayExtensions(analysis.extensions);

      // 显示结果，隐藏加载
      document.getElementById('saAnalyzeLoading').style.display = 'none';
      document.getElementById('saAnalyzeResults').style.display = 'block';
    }

    // 更新统计数据
    updateStats(analysis) {
      const statsGrid = document.getElementById('saStatsGrid');
      const totalExtensionBlocks = analysis.extensions.reduce((sum, ext) => sum + ext.blocks.length, 0);
      statsGrid.innerHTML = "\n        <div class=\"sa-analyze-stat\">\n          <div class=\"sa-analyze-stat-value\">".concat(analysis.totalBlocks, "</div>\n          <div class=\"sa-analyze-stat-label\">").concat(msg('total-blocks', '总代码块数'), "</div>\n        </div>\n        <div class=\"sa-analyze-stat\">\n          <div class=\"sa-analyze-stat-value\">").concat(analysis.effectiveBlocks, "</div>\n          <div class=\"sa-analyze-stat-label\">").concat(msg('effective-blocks', '有效积木'), "</div>\n        </div>\n        <div class=\"sa-analyze-stat\">\n          <div class=\"sa-analyze-stat-value\">").concat(analysis.functionDefinitions, "</div>\n          <div class=\"sa-analyze-stat-label\">").concat(msg('function-definitions', '函数定义'), "</div>\n        </div>\n        <div class=\"sa-analyze-stat\">\n          <div class=\"sa-analyze-stat-value\">").concat(analysis.sprites, "</div>\n          <div class=\"sa-analyze-stat-label\">").concat(msg('stat-sprites', '精灵数量'), "</div>\n        </div>\n        <div class=\"sa-analyze-stat\">\n          <div class=\"sa-analyze-stat-value\">").concat(analysis.costumeCount, "</div>\n          <div class=\"sa-analyze-stat-label\">").concat(msg('stat-costumes', '造型数量'), "</div>\n        </div>\n        <div class=\"sa-analyze-stat\">\n          <div class=\"sa-analyze-stat-value\">").concat(analysis.soundCount, "</div>\n          <div class=\"sa-analyze-stat-label\">").concat(msg('stat-sounds', '声音数量'), "</div>\n        </div>\n        <div class=\"sa-analyze-stat\">\n          <div class=\"sa-analyze-stat-value\">").concat(analysis.variableCount, "</div>\n          <div class=\"sa-analyze-stat-label\">").concat(msg('stat-variables', '变量数量'), "</div>\n        </div>\n        <div class=\"sa-analyze-stat\">\n          <div class=\"sa-analyze-stat-value\">").concat(analysis.listCount, "</div>\n          <div class=\"sa-analyze-stat-label\">").concat(msg('stat-lists', '列表数量'), "</div>\n        </div>\n        <div class=\"sa-analyze-stat\">\n          <div class=\"sa-analyze-stat-value\">").concat(analysis.extensions.length, "</div>\n          <div class=\"sa-analyze-stat-label\">").concat(msg('extensions', '扩展数量'), "</div>\n        </div>\n      ");
    }

    // 显示代码类型分布图
    displayCodeTypeChart(analysis) {
      const canvas = document.getElementById('saCodeTypeChart');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      // 定义标准类别的固定顺序
      const standardOrder = [msg('motion', '运动'), msg('looks', '外观'), msg('sound', '声音'), msg('events', '事件'), msg('control', '控制'), msg('sensing', '侦测'), msg('operators', '运算'), msg('data', '数据'), msg('custom-functions', '自定义函数')];

      // 分离标准和扩展类别
      const standardCategories = {};
      const extensionCategories = {};
      Object.keys(analysis.codeTypes).forEach(category => {
        if (standardOrder.includes(category)) {
          standardCategories[category] = analysis.codeTypes[category];
        } else {
          extensionCategories[category] = analysis.codeTypes[category];
        }
      });

      // 按固定顺序排列标准类别
      const orderedStandard = {};
      standardOrder.forEach(category => {
        if (standardCategories[category]) {
          orderedStandard[category] = standardCategories[category];
        }
      });

      // 按字母顺序排序扩展类别
      const sortedExtensions = {};
      Object.keys(extensionCategories).sort().forEach(category => {
        sortedExtensions[category] = extensionCategories[category];
      });

      // 合并排序后的数据
      const sortedCodeTypes = _objectSpread(_objectSpread({}, orderedStandard), sortedExtensions);
      const sortedLabels = Object.keys(sortedCodeTypes);
      const sortedData = Object.values(sortedCodeTypes);

      // 定义每个类别的颜色
      const categoryColors = {
        [msg('motion', '运动')]: '#4C97FF',
        [msg('looks', '外观')]: '#9966FF',
        [msg('sound', '声音')]: '#CF63CF',
        [msg('events', '事件')]: '#FFBF00',
        [msg('control', '控制')]: '#FFAB19',
        [msg('sensing', '侦测')]: '#5CB1D6',
        [msg('operators', '运算')]: '#59C059',
        [msg('data', '数据')]: '#FF8C1A',
        [msg('custom-functions', '自定义函数')]: '#FF6680'
      };

      // 为扩展生成默认颜色
      const extensionColors = ['#3498DB', '#E74C3C', '#F39C12', '#27AE60', '#16A085', '#2ECC71', '#E67E22', '#95A5A6', '#34495E', '#7F8C8D', '#9B59B6', '#1ABC9C', '#2C3E50', '#F1C40F', '#D35400', '#C0392B', '#BDC3C7', '#7F8C8D', '#95A5A6'];

      // 为每个标签分配对应颜色
      const assignedColors = sortedLabels.map((label, index) => {
        if (categoryColors[label]) {
          return categoryColors[label];
        } else {
          // 检查是否是具有自定义颜色的扩展
          const extension = analysis.extensions.find(ext => ext.name === label);
          if (extension && extension.color) {
            return extension.color;
          }
          // 使用预定义的扩展颜色
          return extensionColors[index % extensionColors.length];
        }
      });

      // 销毁现有图表
      if (this.chartInstance) {
        this.chartInstance.destroy();
        this.chartInstance = null;
      }

      // 创建新图表
      this.chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: sortedLabels,
          datasets: [{
            data: sortedData,
            backgroundColor: assignedColors
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                boxWidth: 12,
                padding: 10,
                font: {
                  size: 11
                }
              }
            },
            tooltip: {
              callbacks: {
                label: function label(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = (value / total * 100).toFixed(1);
                  return "".concat(label, ": ").concat(value, " (").concat(percentage, "%)");
                }
              }
            }
          }
        }
      });
    }

    // 显示Dr.Scratch评分
    displayDrScratchScores(scores) {
      const canvas = document.getElementById('saDrScratchChart');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const labels = Object.keys(scores);
      const data = Object.values(scores);
      const totalScore = data.reduce((sum, val) => sum + val, 0);

      // 更新总分
      document.getElementById('saDrScratchTotalScore').textContent = totalScore;

      // 计算等级
      let level = msg('beginner', '初学者');
      if (totalScore >= 18) {
        level = msg('expert', '专家级');
      } else if (totalScore >= 14) {
        level = msg('advanced', '高级');
      } else if (totalScore >= 10) {
        level = msg('intermediate', '中级');
      } else if (totalScore >= 6) {
        level = msg('developing', '发展中');
      }
      document.getElementById('saDrScratchScoreLevel').textContent = "".concat(msg('evaluation-level', '评估等级'), "\uFF1A").concat(level);

      // 更新评分详情
      const detailsHTML = labels.map(label => "\n        <div class=\"sa-analyze-score-item\">\n          <div class=\"sa-analyze-score-label\">".concat(label, "</div>\n          <div class=\"sa-analyze-score-bar\">\n            <div class=\"sa-analyze-score-fill\" style=\"width: ").concat(scores[label] / 3 * 100, "%\"></div>\n          </div>\n          <div class=\"sa-analyze-score-value\">").concat(scores[label], "/3</div>\n        </div>\n      ")).join('');
      const detailsContainer = document.getElementById('saDrScratchDetails');
      const summaryHTML = detailsContainer.querySelector('.sa-analyze-score-summary').outerHTML;
      detailsContainer.innerHTML = summaryHTML + detailsHTML;

      // 销毁现有图表
      if (this.drScratchChartInstance) {
        this.drScratchChartInstance.destroy();
        this.drScratchChartInstance = null;
      }

      // 创建雷达图
      this.drScratchChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [{
            label: msg('computational-thinking-score', '计算思维评分'),
            data: data,
            backgroundColor: 'rgba(77, 151, 255, 0.2)',
            borderColor: '#4d97ff',
            borderWidth: 2,
            pointBackgroundColor: '#4d97ff',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#4d97ff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              beginAtZero: true,
              max: 3,
              ticks: {
                stepSize: 1
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    // 显示数学逻辑评分
    displayMathLogicScores(scores) {
      const canvas = document.getElementById('saMathLogicChart');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const labels = Object.keys(scores);
      const data = Object.values(scores);
      const totalScore = data.reduce((sum, val) => sum + val, 0);

      // 更新总分
      document.getElementById('saMathTotalScore').textContent = totalScore;

      // 计算等级
      let level = msg('beginner', '初级');
      if (totalScore >= 20) {
        level = msg('advanced', '高级');
      } else if (totalScore >= 10) {
        level = msg('intermediate', '中级');
      } else if (totalScore >= 5) {
        level = msg('developing', '发展中');
      }
      document.getElementById('saMathScoreLevel').textContent = "".concat(msg('evaluation-level', '评估等级'), "\uFF1A").concat(level);

      // 更新评分详情
      const detailsHTML = labels.map(label => "\n        <div class=\"sa-analyze-score-item\">\n          <div class=\"sa-analyze-score-label\">".concat(label, "</div>\n          <div class=\"sa-analyze-score-value\">").concat(scores[label], " </div>\n        </div>\n      ")).join('');
      const detailsContainer = document.getElementById('saMathLogicDetails');
      const summaryHTML = detailsContainer.querySelector('.sa-analyze-score-summary').outerHTML;
      detailsContainer.innerHTML = summaryHTML + detailsHTML;

      // 销毁现有图表
      if (this.mathLogicChartInstance) {
        this.mathLogicChartInstance.destroy();
        this.mathLogicChartInstance = null;
      }

      // 数据标准化
      const maxValue = Math.max(...data, 1);
      const normalizedData = data.map(value => value / maxValue);

      // 创建雷达图
      this.mathLogicChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [{
            label: msg('relative-intensity', '相对强度'),
            data: normalizedData,
            backgroundColor: 'rgba(230, 81, 0, 0.2)',
            borderColor: '#E65100',
            borderWidth: 2,
            pointBackgroundColor: '#E65100',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#E65100'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              beginAtZero: true,
              max: 1,
              ticks: {
                stepSize: 0.2
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function label(context) {
                  const label = context.label || '';
                  const rawValue = data[context.dataIndex];
                  return "".concat(label, ": ").concat(rawValue, " ");
                }
              }
            }
          }
        }
      });
    }

    // 显示扩展列表
    displayExtensions(extensions) {
      const extensionList = document.getElementById('saExtensionList');
      if (extensions.length === 0) {
        extensionList.innerHTML = "<p>".concat(msg('no-extensions', '未使用扩展'), "</p>");
        return;
      }
      let html = '<div class="sa-analyze-extensions-grid">';
      extensions.forEach(extension => {
        const color = extension.color || '#888888';
        html += "\n          <div class=\"sa-analyze-extension-item\">\n            <div class=\"sa-analyze-extension-color\" style=\"background-color: ".concat(color, "\"></div>\n            <div class=\"sa-analyze-extension-name\">").concat(extension.name, "</div>\n            <div class=\"sa-analyze-extension-count\">").concat(extension.blocks.length, " ").concat(msg('blocks-count', ''), "</div>\n          </div>\n        ");
      });
      html += '</div>';
      extensionList.innerHTML = html;
    }

    // 初始化插件
    async init() {
      await this.createAnalyzeButton();
    }
  }

  // 创建并初始化分析器
  const analyzer = new SimpleProjectAnalyzer();

  // 等待编辑器加载完成
  addon.tab.waitForElement('[class*="menu-bar_menu-bar"], [class*="react-tabs_react-tabs__tab-list"]', {
    markAsSeen: true
  }).then(() => {
    analyzer.init();
  });
});

/***/ }),

/***/ "./src/lib/tw-recolor/build.js!./src/addons/addons/simple-project-analyzer/SPA.svg":
/*!*****************************************************************************************!*\
  !*** ./src/lib/tw-recolor/build.js!./src/addons/addons/simple-project-analyzer/SPA.svg ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    const original = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"146.176\" height=\"146.176\" viewBox=\"0,0,146.176,146.176\"><g transform=\"translate(-166.912,-106.912)\"><g fill=\"#855cd6\" stroke=\"#855cd6\" stroke-width=\"0\" stroke-miterlimit=\"10\"><g><path d=\"M191.69035,155.17408l48.26208,-48.26208l23.48373,23.48373l-48.26208,48.26208z\"/><path d=\"M191.69035,155.17408l23.48373,-23.48373l73.04042,73.04042l-23.48373,23.48373z\"/><path d=\"M166.912,179.95243l23.48373,-23.48373l48.30965,48.30965l-23.48373,23.48373z\"/><path d=\"M241.29462,155.22166l23.48373,-23.48373l23.48373,23.48373l-23.48373,23.48373z\"/><path d=\"M266.12054,180.04758l23.48373,-23.48373l23.48373,23.48373l-23.48373,23.48373z\"/><path d=\"M216.56385,229.60427l48.26208,-48.26208l23.48373,23.48373l-48.26208,48.26208z\"/></g></g></g></svg><!--rotationCenter:73.0879994012752:73.08799940127517-->";

    const getSRC = () => {
        const recolored = typeof Recolor === 'object' ? (
            original.replace(/#855cd6/gi, Recolor.primary)
        ) : original;
        return 'data:image/svg+xml;,' + encodeURIComponent(recolored);
    };

    /* harmony default export */ __webpack_exports__["default"] = (getSRC);


/***/ })

}]);
//# sourceMappingURL=addon-entry-simple-project-analyzer.js.map