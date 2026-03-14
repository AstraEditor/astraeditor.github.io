(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-block-pins"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/bookmark/userstyle.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/bookmark/userstyle.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-bookmark-button {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem 0.5rem;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: bold;\n  background-color: var(--ui-white);\n  border-width: 1px;\n  border-style: solid;\n  color: var(--text-primary);\n  border-color: var(--ui-black-transparent);\n  border-radius: 4px;\n  transition: border-color 0.2s ease;\n  white-space: nowrap;\n  gap: 0.5rem;\n  height: 1.5rem;\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n  margin-left: 10px;\n}\n\n.sa-bookmark-button:hover {\n  border-color: var(--motion-primary);\n}\n\n.sa-bookmark-button img {\n  display: inline-block;\n  width: 2rem !important;\n  height: 2rem !important;\n}\n\n.sa-bookmark-button svg {\n  width: 20px;\n  height: 20px;\n  color: currentColor;\n}\n\n/* VSCode 布局下的书签按钮样式 */\n[class*=\"tabs\"][class*=\"vscodeList\"] .sa-bookmark-button {\n  width: 40px;\n  height: 30px;\n  font-size: 0;\n  background-color: #00000000;\n  border: 0;\n  border-radius: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin-bottom: 10px !important;\n}\n\n[class*=\"tabs\"][class*=\"vscodeList\"] .sa-bookmark-button img {\n  width: 2rem;\n  height: 2rem;\n}\n\n/* Modal styles */\n.sa-bookmark-modal {\n  box-sizing: border-box;\n  width: 700px;\n  max-height: min(800px, 80vh);\n  max-width: 85%;\n  margin-top: 12vh;\n  overflow-y: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.sa-bookmark-modal-content {\n  padding: 1.5rem 2.25rem;\n}\n\n.sa-bookmark-list {\n  max-height: 400px;\n  overflow-y: auto;\n  margin-bottom: 1.5rem;\n  border: 1px solid var(--ui-black-transparent);\n  border-radius: 4px;\n  padding: 0.5rem;\n}\n\n.sa-bookmark-empty {\n  text-align: center;\n  padding: 2rem;\n  color: var(--text-primary);\n}\n\n.sa-bookmark-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  margin-bottom: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n}\n\n.sa-bookmark-item:last-child {\n  margin-bottom: 0;\n}\n\n.sa-bookmark-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n.sa-bookmark-name {\n  font-weight: bold;\n  font-size: 1rem;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n}\n\n.sa-bookmark-name:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.sa-bookmark-name-input {\n  width: 100%;\n  font-weight: bold;\n  font-size: 1rem;\n  padding: 2px 6px;\n  border-radius: 0.25rem;\n}\n\n.sa-bookmark-time {\n  font-size: 0.875rem;\n  color: var(--text-primary);\n}\n\n.sa-bookmark-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.sa-bookmark-action-button {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: background-color 0.2s;\n}\n\n.sa-bookmark-action-button:hover {\n  opacity: 0.8;\n}\n\n.sa-bookmark-delete {\n  background-color: #ff4d4d;\n  color: white;\n}\n\n.sa-bookmark-delete:hover {\n  background-color: #ff3333;\n}\n\n.sa-bookmark-add-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--ui-black-transparent);\n}\n\n.sa-bookmark-add-form label {\n  font-weight: bold;\n  font-size: 0.875rem;\n}\n\n.sa-bookmark-add-form input {\n  padding: 0.5rem;\n  border: 1px solid var(--ui-black-transparent);\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n\n.sa-bookmark-add-form button {\n  padding: 0.75rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 0.875rem;\n  transition: background-color 0.2s;\n}\n\n\n@media (prefers-color-scheme: dark) {\n  .sa-bookmark-button:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n\n  .sa-bookmark-item {\n    background-color: rgba(255, 255, 255, 0.05);\n  }\n\n  .sa-bookmark-empty {\n    color: rgba(255, 255, 255, 0.5);\n  }\n\n  .sa-bookmark-time {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n  .sa-bookmark-add-form input {\n    border-color: rgba(255, 255, 255, 0.2);\n    background-color: rgba(255, 255, 255, 0.05);\n    color: white;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/block-pins/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/block-pins/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-pins/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-pins/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/block-pins/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Block Pinning
// By: SharkPool

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  const categoryIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MC42OTIiIGhlaWdodD0iNzAuNjkyIiB2aWV3Qm94PSIwIDAgNzAuNjkyIDcwLjY5MiI+PHBhdGggZD0iTTAgMzUuMzQ2QzAgMTUuODI1IDE1LjgyNSAwIDM1LjM0NiAwczM1LjM0NiAxNS44MjUgMzUuMzQ2IDM1LjM0Ni0xNS44MjUgMzUuMzQ2LTM1LjM0NiAzNS4zNDZTMCA1NC44NjcgMCAzNS4zNDYiIGZpbGw9IiNjNWJmOTYiLz48cGF0aCBkPSJNNC42NTYgMzUuMzQ2YzAtMTYuOTUgMTMuNzQtMzAuNjkgMzAuNjktMzAuNjlzMzAuNjkgMTMuNzQgMzAuNjkgMzAuNjktMTMuNzQgMzAuNjktMzAuNjkgMzAuNjktMzAuNjktMTMuNzQtMzAuNjktMzAuNjkiIGZpbGw9IiNmZmY3YzIiLz48cGF0aCBkPSJNNDguOTU2IDQ0LjAwMyA1MSA1MC4wMmwtNi4wMTctMi4wNDVMMzQuMTY4IDM3LjE2Yy0xLjg3MyAxLjY1NS02LjAwNyA1LjE1MS03LjMwMyA1LjAxOS0yLjM4Ny0uMjQ0LTEuODg5LTIuOTQ3LTIuMDQ4LTUuMzc2LS4xNTgtMi40MyAxLjQ3MS0zLjQ0IDEuNDcxLTMuNDRsLTUuODc5LTUuODhhMi40NSAyLjQ1IDAgMCAxIDAtMy40NjFsNC42MzMtNC42MzNhMi40NSAyLjQ1IDAgMCAxIDMuNDYxIDBsNi4wNyA2LjA3czIuMTQ5LTIuMDAzIDMuOTAyLTJjMS43NTMuMDAyIDUuNjY0LjA3NSA1LjMyMyAyLjAxMy0uMjM1IDEuMzMyLTQuMTExIDUuOTYtNS42MzkgNy43MzV6IiBmaWxsPSIjNDQ1MjczIi8+PC9zdmc+";
  const category = document.createElementNS("http://www.w3.org/1999/xml", "category");
  category.setAttribute("name", msg("pinned"));
  category.setAttribute("id", "pinned");
  category.setAttribute("colour", "#ffffff");
  category.setAttribute("secondaryColour", "#ffffff");
  category.setAttribute("iconURI", categoryIcon);
  const gap = document.createElementNS("http://www.w3.org/1999/xml", "sep");
  gap.setAttribute("gap", "36");
  let populateInit = 0; // counts up to 3, any 'populate' call while this is less than 3 will update the toolbox
  let pins = loadPins();
  const autoLoadExtPins = addon.settings.get("autoLoadExts");
  function findExtensionPins() {
    const extUrls = [];
    const manager = vm.extensionManager;
    const loadedExts = manager._loadedExtensions;
    loadedExts.keys().forEach(id => {
      if (pins.some(b => b.startsWith(id))) {
        const meta = loadedExts.get(id);
        if (meta.startsWith("extension_")) {
          // built-in extension
          extUrls.push(id);
        } else {
          // external extension
          const index = parseInt(meta.split(".")[1]);
          extUrls.push(manager.workerURLs[index]);
        }
      }
    });
    return extUrls;
  }
  function loadPins() {
    try {
      const item = localStorage.getItem("ADDONS_BLOCK-PINS");
      if (!item) return [];
      const testPins = JSON.parse(item);
      if (Array.isArray(testPins.blocks) && Array.isArray(testPins.exts)) {
        // load required extensions
        const manager = vm.extensionManager;
        for (const ext of testPins.exts) {
          try {
            const isURL = new URL(ext);
            manager.securityManager.canLoadExtensionFromProject(ext).then(isUnsandbox => {
              manager.loadExtensionURL(ext);
            });
          } catch (_unused) {
            // not a URL, must be a built-in
            manager.loadExtensionIdSync(ext);
          }
        }
        return testPins.blocks;
      } else {
        return [];
      }
    } catch (_unused2) {
      console.warn("Malformed Block Pins!");
      localStorage.removeItem("ADDONS_BLOCK-PINS");
      return [];
    }
  }
  function storePins() {
    const requiredExtensions = autoLoadExtPins ? findExtensionPins() : [];
    localStorage.setItem("ADDONS_BLOCK-PINS", JSON.stringify({
      blocks: pins,
      exts: requiredExtensions
    }));
  }
  const createMenuItem = (text, enabled, callback) => {
    // so amazing, saves like, 20 lines
    return {
      text,
      enabled,
      callback
    };
  };
  const createLabel = text => {
    const label = document.createElementNS("http://www.w3.org/1999/xml", "label");
    label.setAttribute("text", text);
    return label;
  };
  const specifyType = block => {
    let type = block.type;
    if (type === "data_variable" || type === "data_listcontents") {
      type += "||v||" + block.getVars()[0];
    } else if (type === "procedures_call") {
      type += "||p||" + block.getProcCode();
    }
    return type;
  };
  const getBlockByType = (type, ws) => {
    const typeMeta = type.split("||");
    const blocks = Object.values(ws.blockDB_);
    if (typeMeta.length === 1) return blocks.find(b => b.type === type);else {
      const candidates = blocks.filter(b => b.type === typeMeta[0]);
      for (const test of candidates) {
        if (typeMeta[1] === "p") {
          if (test.getProcCode() === typeMeta[2]) return test;
        }
        if (typeMeta[1] === "v") {
          if (test.getVars()[0] === typeMeta[2]) return test;
        }
      }
      return null;
    }
  };
  const populateCategory = () => {
    category.innerHTML = ""; // flush out blocks

    if (pins.length) {
      const flyoutWS = Blockly.mainWorkspace.getFlyout().workspace_;
      const blocksXML = [];
      let successes = 0;
      for (const type of pins) {
        const block = getBlockByType(type, flyoutWS);
        if (block) {
          successes++;
          blocksXML.push(Blockly.Xml.blockToDom(block));
        } else {
          console.warn("Pins Addon -- Could not find block with type: " + type);
        }
      }
      if (blocksXML.length === 0) blocksXML.push(createLabel(msg("no_pinned_blocks")));else if (successes !== pins.length) blocksXML.push(createLabel(msg("some_pins_could_not_load")));
      category.append(...blocksXML, gap);
    } else {
      category.append(createLabel(msg("no_pinned_blocks")), gap);
    }
  };
  const updatePinCategory = () => {
    populateCategory();
    const toolbox = Blockly.mainWorkspace.getToolbox();
    toolbox.populate_(toolbox.workspace_.options.languageTree);
    storePins();
  };
  const toggleBlockPin = (block, isPinning, forceOrder) => {
    const oldLength = pins.length;
    const type = specifyType(block);
    const index = pins.indexOf(type);
    if (isPinning) {
      switch (forceOrder) {
        case "top":
          pins.splice(index, 1);
          pins = [type, ...pins];
          break;
        case "bottom":
          pins.splice(index, 1);
          pins.push(type);
          break;
        case "category":
          {
            const toolbox = Blockly.mainWorkspace.getToolbox();
            const flyoutWS = Blockly.mainWorkspace.getFlyout().workspace_;
            const categories = toolbox.categoryMenu_.categories_.map(c => c.id_);
            const getCategoryInd = id => {
              const block = getBlockByType(id, flyoutWS);
              let cateID = block.category_;
              if (cateID === "data") cateID = "variables";else if (cateID === "data-lists") cateID = "lists";else if (cateID === null) cateID = "myBlocks";
              return categories.indexOf(cateID);
            };
            pins = pins.sort((a, b) => getCategoryInd(a) - getCategoryInd(b));
            break;
          }
        default:
          if (index === -1) pins.push(type);
      }
    } else if (index > -1) {
      pins.splice(index, 1);
    }
    if (oldLength !== pins.length || forceOrder) updatePinCategory();
  };
  const ogShowCtxMenu = Blockly.BlockSvg.prototype.showContextMenu_;
  Blockly.BlockSvg.prototype.showContextMenu_ = function (e) {
    if (this.workspace.options.readOnly || !this.contextMenu) return;
    let shouldPatchClasses = false;

    // Save the current block in a variable for use in closures.
    var block = this;
    var menuOptions = [];
    if (this.isDeletable() && this.isMovable() && block.isInFlyout) {
      if (pins.includes(specifyType(block))) {
        shouldPatchClasses = true;
        menuOptions.push(createMenuItem(msg("move_to_top"), true, () => toggleBlockPin(block, true, "top")), createMenuItem(msg("move_to_bottom"), true, () => toggleBlockPin(block, true, "bottom")), createMenuItem(msg("organize_by_category"), true, () => toggleBlockPin("", true, "category")), createMenuItem(msg("pin"), false, () => {}), createMenuItem(msg("unpin"), true, () => toggleBlockPin(block, false)));
      } else {
        menuOptions.push(createMenuItem(msg("pin"), true, () => toggleBlockPin(block, true)), createMenuItem(msg("unpin"), false, () => {}));
      }
      menuOptions.push(createMenuItem(msg("unpin_all"), pins.length, () => {
        pins = [];
        updatePinCategory();
      }));
    } else {
      ogShowCtxMenu.call(this, e);
      return;
    }
    if (this.customContextMenu) this.customContextMenu(menuOptions);
    Blockly.ContextMenu.show(e, menuOptions, this.RTL);
    Blockly.ContextMenu.currentBlock = this;
    if (shouldPatchClasses) {
      // since we have to patch the context meny generator, we cant use
      // addon apis to fancify the menu. So, recreate it here:
      const menuItems = Blockly.WidgetDiv.DIV.querySelectorAll("div[class^=\"goog-menuitem-content\"]");
      /* Unpin item */
      menuItems[3].parentNode.style.borderTop = "1px solid rgba(0, 0, 0, 0.15)";
    }
    ;
  };
  const ogPopulate = Blockly.Toolbox.CategoryMenu.prototype.populate;
  Blockly.Toolbox.CategoryMenu.prototype.populate = function (newTree) {
    if (populateInit < 3) {
      populateInit++;
      setTimeout(() => {
        // 1 second is a good buffer
        populateCategory();
        const toolbox = Blockly.mainWorkspace.getToolbox();
        if (!toolbox) return;
        toolbox.populate_(toolbox.workspace_.options.languageTree);
      }, 1000);
    }
    newTree.insertBefore(category, newTree.firstElementChild);
    ogPopulate.call(this, newTree);
  };
  vm.runtime.on("PROJECT_LOADED", () => {
    populateInit = 0;
  });
  if (!autoLoadExtPins) vm.runtime.on("EXTENSION_ADDED", () => {
    populateInit = 2;
  });
  vm.runtime.on("EXTENSION_REMOVED", (extId, detail) => {
    const removedId = typeof extId === "string" ? extId : detail && detail.id || "";
    if (!removedId) return;

    // remove blocks in the removed extension from pins
    pins = pins.filter(t => !t.startsWith(removedId));
    populateInit = 2;
  });
  addon.self.addEventListener("disabled", () => {
    localStorage.removeItem("ADDONS_BLOCK-PINS");
  });
});

/***/ }),

/***/ "./src/addons/addons/bookmark/_runtime_entry.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/bookmark/_runtime_entry.js ***!
  \******************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/bookmark/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/bookmark/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/bookmark/userscript.js":
/*!**************************************************!*\
  !*** ./src/addons/addons/bookmark/userscript.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tw_recolor_build_bookmark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/tw-recolor/build!./bookmark.svg */ "./src/lib/tw-recolor/build.js!./src/addons/addons/bookmark/bookmark.svg");

/* harmony default export */ __webpack_exports__["default"] = (async _ref => {
  let {
    addon,
    msg,
    console
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  const BOOKMARK_MAGIC = " // _bookmark_";
  const BOOKMARK_COMMENT_HEADER = msg("comment-header");

  // Get current editing target
  const getEditingTarget = () => {
    return vm.runtime.getEditingTarget();
  };

  // Find the bookmark comment in the current target
  const findBookmarkComment = () => {
    const target = getEditingTarget();
    if (!target || !target.comments) return null;
    const comments = Object.values(target.comments);
    for (const comment of comments) {
      if (comment.text.includes(BOOKMARK_MAGIC)) {
        return comment;
      }
    }
    return null;
  };

  // Parse bookmark data from comment
  const parseBookmarkComment = () => {
    const comment = findBookmarkComment();
    if (!comment) return [];
    const lineWithMagic = comment.text.split("\n").find(i => i.endsWith(BOOKMARK_MAGIC));
    if (!lineWithMagic) {
      console.warn("Bookmark comment does not contain valid line");
      return [];
    }
    const jsonText = lineWithMagic.substr(0, lineWithMagic.length - BOOKMARK_MAGIC.length);
    try {
      return JSON.parse(jsonText);
    } catch (e) {
      console.warn("Bookmark comment has invalid JSON", e);
      return [];
    }
  };

  // Save bookmark data to comment
  const saveBookmarkComment = bookmarks => {
    const text = "".concat(BOOKMARK_COMMENT_HEADER, "\n").concat(JSON.stringify(bookmarks)).concat(BOOKMARK_MAGIC);
    const existingComment = findBookmarkComment();
    if (existingComment) {
      existingComment.text = text;
    } else {
      const target = getEditingTarget();
      if (!target) return;
      target.createComment(Math.random() + "", null, text, 50, 50, 350, 150, false);
    }

    // Notify project changed
    vm.runtime.emitProjectChanged();
    if (vm.editingTarget === vm.runtime.getTargetForStage()) {
      vm.emitWorkspaceUpdate();
    }
  };

  // Get the main workspace (similar to Utils.getWorkspace)
  const getWorkspace = () => {
    const currentWorkspace = Blockly.getMainWorkspace();
    if (currentWorkspace.getToolbox()) {
      return currentWorkspace;
    }
    return Blockly.getMainWorkspace();
  };

  // Get current workspace state
  const getWorkspaceState = () => {
    const workspace = getWorkspace();
    const s = workspace.getMetrics();
    return {
      viewLeft: s.viewLeft,
      viewTop: s.viewTop,
      scale: workspace.scale,
      timestamp: Date.now()
    };
  };

  // Restore workspace state (similar to NavigationHistory.goBack)
  const restoreWorkspaceState = state => {
    const workspace = getWorkspace();

    // First set the scale
    workspace.setScale(state.scale);

    // Use requestAnimationFrame to ensure the workspace is updated after scale change
    requestAnimationFrame(() => {
      const s = workspace.getMetrics();

      // Then restore the scroll position
      // Calculate scroll position based on current contentLeft/contentTop
      const sx = state.viewLeft - s.contentLeft;
      const sy = state.viewTop - s.contentTop;
      workspace.scrollbar.set(sx, sy);

      // Hide Blockly floating elements
      Blockly.hideChaff();
    });
  };
  let bookmarkButton = null;

  // Check if VSCodeLayout is enabled
  const isVSCodeLayout = () => {
    try {
      const settings = JSON.parse(localStorage.getItem('AESettings'));
      return settings && settings.EnableVSCodeLayout;
    } catch (e) {
      return false;
    }
  };

  // Create bookmark modal
  const createBookmarkModal = () => {
    const {
      backdrop,
      container,
      content,
      closeButton,
      remove
    } = addon.tab.createModal(msg("bookmark-title"), {
      isOpen: true,
      useEditorClasses: true
    });
    container.classList.add("sa-bookmark-modal");
    content.classList.add("sa-bookmark-modal-content");

    // Check theme after a small delay to ensure DOM is ready
    setTimeout(() => {
      // The theme is handled by CSS variables, no need for JavaScript detection
      console.log('Bookmark plugin - Modal opened');
    }, 10);

    // Create bookmark list
    const bookmarkList = document.createElement("div");
    bookmarkList.className = "sa-bookmark-list";
    let bookmarks = parseBookmarkComment();
    const renderBookmarks = () => {
      bookmarkList.innerHTML = "";
      bookmarks = parseBookmarkComment();
      if (bookmarks.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.className = "sa-bookmark-empty";
        emptyMessage.textContent = msg("no-bookmarks");
        bookmarkList.appendChild(emptyMessage);
        return;
      }
      bookmarks.forEach((bookmark, index) => {
        const bookmarkItem = document.createElement("div");
        bookmarkItem.className = "sa-bookmark-item";
        const bookmarkInfo = document.createElement("div");
        bookmarkInfo.className = "sa-bookmark-info";
        const bookmarkName = document.createElement("span");
        bookmarkName.className = "sa-bookmark-name";
        bookmarkName.textContent = bookmark.name || msg("bookmark-default-name", {
          index: index + 1
        });
        bookmarkName.title = msg("edit-bookmark-hint");

        // Make bookmark name editable
        bookmarkName.addEventListener("click", () => {
          const input = document.createElement("input");
          input.type = "text";
          input.value = bookmark.name || msg("bookmark-default-name", {
            index: index + 1
          });
          input.className = "sa-bookmark-name-input";
          input.classList.add(addon.tab.scratchClass("input_input-form"));
          const saveEdit = () => {
            const newName = input.value.trim();
            bookmark.name = newName || null;
            saveBookmarkComment(bookmarks);
            bookmarkName.textContent = newName || msg("bookmark-default-name", {
              index: index + 1
            });
          };
          input.addEventListener("blur", saveEdit);
          input.addEventListener("keydown", e => {
            if (e.key === "Enter") {
              saveEdit();
            } else if (e.key === "Escape") {
              bookmarkName.textContent = bookmark.name || msg("bookmark-default-name", {
                index: index + 1
              });
            }
          });
          bookmarkName.innerHTML = "";
          bookmarkName.appendChild(input);
          input.focus();
          input.select();
        });
        const bookmarkTime = document.createElement("span");
        bookmarkTime.className = "sa-bookmark-time";
        bookmarkTime.textContent = new Date(bookmark.timestamp).toLocaleString();
        bookmarkInfo.appendChild(bookmarkName);
        bookmarkInfo.appendChild(bookmarkTime);
        const bookmarkActions = document.createElement("div");
        bookmarkActions.className = "sa-bookmark-actions";
        const jumpButton = document.createElement("button");
        jumpButton.className = "sa-bookmark-action-button";
        jumpButton.textContent = msg("jump");
        jumpButton.addEventListener("click", () => {
          restoreWorkspaceState(bookmark.state);
          remove();
        });
        const deleteButton = document.createElement("button");
        deleteButton.className = "sa-bookmark-action-button sa-bookmark-delete";
        deleteButton.textContent = msg("delete");
        deleteButton.addEventListener("click", () => {
          bookmarks.splice(index, 1);
          saveBookmarkComment(bookmarks);
          renderBookmarks();
        });
        bookmarkActions.appendChild(jumpButton);
        bookmarkActions.appendChild(deleteButton);
        bookmarkItem.appendChild(bookmarkInfo);
        bookmarkItem.appendChild(bookmarkActions);
        bookmarkList.appendChild(bookmarkItem);
      });
    };
    renderBookmarks();

    // Add bookmark form
    const addBookmarkForm = document.createElement("div");
    addBookmarkForm.className = "sa-bookmark-add-form";
    const nameLabel = document.createElement("label");
    nameLabel.textContent = msg("bookmark-name");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = msg("bookmark-name-placeholder");
    nameInput.className = addon.tab.scratchClass("input_input-form");
    const addButton = document.createElement("button");
    addButton.textContent = msg("add-bookmark");
    addButton.className = addon.tab.scratchClass("prompt_ok-button");
    addButton.addEventListener("click", () => {
      const name = nameInput.value.trim();
      const newBookmark = {
        name: name || null,
        state: getWorkspaceState(),
        timestamp: Date.now()
      };
      bookmarks.push(newBookmark);
      saveBookmarkComment(bookmarks);
      nameInput.value = "";
      renderBookmarks();
    });
    addBookmarkForm.appendChild(nameLabel);
    addBookmarkForm.appendChild(nameInput);
    addBookmarkForm.appendChild(addButton);
    content.appendChild(bookmarkList);
    content.appendChild(addBookmarkForm);

    // Close handlers
    backdrop.addEventListener("click", () => remove());
    closeButton.addEventListener("click", () => remove());

    // Close on Escape
    const escapeHandler = e => {
      if (e.key === "Escape") {
        remove();
        document.removeEventListener("keydown", escapeHandler);
      }
    };
    document.addEventListener("keydown", escapeHandler);
  };

  // Create bookmark button
  const createBookmarkButton = async () => {
    const VSCodeLayout = JSON.parse(localStorage.getItem('AESettings')).EnableVSCodeLayout;

    // 检测是否在 VSCodeLayout 下
    const tabBar = await addon.tab.waitForElement('[class*="react-tabs_react-tabs__tab-list"]', {
      markAsSeen: true
    });

    // 尝试查找 SPA 插件的位置
    const spaButton = document.querySelector('.sa-analyze-button');
    let targetElement;
    if (spaButton) {
      // 如果 SPA 按钮存在，在其右边添加按钮
      targetElement = spaButton.parentElement;
    } else {
      // 否则，使用标签栏
      targetElement = tabBar;
    }
    if (!targetElement) return;
    bookmarkButton = document.createElement('button');
    bookmarkButton.className = addon.tab.scratchClass('menu-bar_menu-bar-button', {
      others: 'sa-bookmark-button'
    });
    if (VSCodeLayout) {
      // VSCodeLayout 下使用 SVG 图标
      const img = document.createElement('img');
      img.src = Object(_lib_tw_recolor_build_bookmark_svg__WEBPACK_IMPORTED_MODULE_0__["default"])();
      img.style.filter = "grayscale(100%)";
      img.style.width = '20px';
      img.style.height = '20px';
      img.style.marginTop = '5px';
      img.alt = msg("bookmark-button");
      bookmarkButton.appendChild(img);
    } else {
      // 普通布局下使用文字
      bookmarkButton.textContent = msg("bookmark-button");
    }
    bookmarkButton.title = msg("bookmark-button-tooltip");

    // 禁用时隐藏按钮
    addon.tab.displayNoneWhileDisabled(bookmarkButton);
    bookmarkButton.addEventListener("click", () => {
      createBookmarkModal();
    });

    // 将按钮添加到目标位置
    if (VSCodeLayout) {
      // VSCodeLayout 下，按钮应该插入到标签栏（TabList）中
      tabBar.appendChild(bookmarkButton);
    } else if (spaButton) {
      // 在 SPA 按钮右边添加
      if (spaButton.nextSibling) {
        targetElement.insertBefore(bookmarkButton, spaButton.nextSibling);
      } else {
        targetElement.appendChild(bookmarkButton);
      }
    } else {
      // 在标签栏最右方添加
      targetElement.appendChild(bookmarkButton);
    }
  };

  // Create the button
  await createBookmarkButton();
});

/***/ }),

/***/ "./src/lib/tw-recolor/build.js!./src/addons/addons/bookmark/bookmark.svg":
/*!*******************************************************************************!*\
  !*** ./src/lib/tw-recolor/build.js!./src/addons/addons/bookmark/bookmark.svg ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    const original = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#855cd6\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z\" stroke=\"#855cd6\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n";

    const getSRC = () => {
        const recolored = typeof Recolor === 'object' ? (
            original.replace(/#855cd6/gi, Recolor.primary)
        ) : original;
        return 'data:image/svg+xml;,' + encodeURIComponent(recolored);
    };

    /* harmony default export */ __webpack_exports__["default"] = (getSRC);


/***/ })

}]);
//# sourceMappingURL=addon-entry-block-pins.js.map