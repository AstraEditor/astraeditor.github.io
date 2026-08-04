(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([["src_playground_render-interface_jsx"],{

/***/ "./src/addons/channels.js"
/*!********************************!*\
  !*** ./src/addons/channels.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let changeChannel;
let reloadChannel;
if (typeof BroadcastChannel !== 'undefined') {
  changeChannel = new BroadcastChannel('addons-change');
  reloadChannel = new BroadcastChannel('addons-reload');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  changeChannel,
  reloadChannel
});

/***/ },

/***/ "./src/components/tw-cloud-variable-badge/cloud-server-button.jsx"
/*!************************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/cloud-server-button.jsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloud-variable-badge.css */ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.css");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.bindall */ "../../node_modules/.pnpm/lodash.bindall@4.4.0/node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/.pnpm/classnames@2.2.6/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





class CloudServerButton extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default()(this, ['handleClick']);
  }
  handleClick() {
    this.props.onClick(this.props.cloudHost);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2__["default"].server, {
        [_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2__["default"].selected]: this.props.selected
      }),
      onClick: this.handleClick,
      title: this.props.cloudHost
    }, this.props.name);
  }
}
CloudServerButton.propTypes = {
  cloudHost: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudServerButton);

/***/ },

/***/ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.jsx"
/*!*************************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/cloud-variable-badge.jsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "../../node_modules/.pnpm/react-intl@2.9.0_prop-types@15.8.1_react@16.14.0/node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _clouddata_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clouddata.svg */ "./src/components/tw-cloud-variable-badge/clouddata.svg");
/* harmony import */ var _clouddata_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clouddata_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cloud_server_button_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cloud-server-button.jsx */ "./src/components/tw-cloud-variable-badge/cloud-server-button.jsx");
/* harmony import */ var _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloud-variable-badge.css */ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.css");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/brand */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_brand__WEBPACK_IMPORTED_MODULE_6__);







const hosts = [{
  name: 'US East',
  cloudHost: 'wss://clouddata.turbowarp.org'
}];
const CloudVariableBadge = props => {
  const selectedHost = hosts.find(i => i.cloudHost === props.cloudHost);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5__["default"].badge
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5__["default"].title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5__["default"].cloudIcon,
    src: (_clouddata_svg__WEBPACK_IMPORTED_MODULE_3___default()),
    alt: "",
    width: 32,
    height: 32,
    draggable: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage
  // eslint-disable-next-line max-len
  , {
    defaultMessage: "This project uses cloud variables.",
    id: "tw.usesCloudVariables"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage
  // eslint-disable-next-line max-len
  , {
    defaultMessage: "{APP_NAME}'s cloud variables are not connected to Scratch's. Anyone can {changeTheirUsername} to anything, so beware of impersonation."
    // eslint-disable-next-line max-len
    ,

    id: "tw.usesCloudVariables2",
    values: {
      APP_NAME: _lib_brand__WEBPACK_IMPORTED_MODULE_6__.APP_NAME,
      changeTheirUsername: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        onClick: props.onOpenChangeUsername
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        defaultMessage: "change their username"
        // eslint-disable-next-line max-len
        ,

        id: "tw.usesCloudVariables2.change"
      }))
    }
  }), selectedHost && hosts.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5__["default"].servers
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "Pick a server near you:",
    id: "tw.cloudServers"
  }), hosts.map(i => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cloud_server_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: i.ws,
    name: i.name,
    cloudHost: i.cloudHost,
    selected: props.cloudHost === i.cloudHost,
    onClick: props.onSetCloudHost
  }))) : selectedHost ? null :
  /*#__PURE__*/
  // No options, so don't render anything
  react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "Using a custom cloud variable server: {server}"
    // eslint-disable-next-line max-len
    ,

    id: "tw.customCloudServer",
    values: {
      server: props.cloudHost
    }
  }), selectedHost && selectedHost.provider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "Server provided by {name}.",
    id: "tw.cloudProvider",
    values: {
      name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: selectedHost.provider.href,
        target: "_blank",
        rel: "noreferrer"
      }, selectedHost.provider.name)
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://docs.turbowarp.org/cloud-variables"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "Learn more about cloud variables.",
    id: "tw.moreCloud"
  })));
};
CloudVariableBadge.propTypes = {
  cloudHost: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onSetCloudHost: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onOpenChangeUsername: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudVariableBadge);

/***/ },

/***/ "./src/components/tw-description/description.jsx"
/*!*******************************************************!*\
  !*** ./src/components/tw-description/description.jsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "../../node_modules/.pnpm/react-intl@2.9.0_prop-types@15.8.1_react@16.14.0/node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _description_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./description.css */ "./src/components/tw-description/description.css");
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-string-replace */ "../../node_modules/.pnpm/react-string-replace@0.4.4/node_modules/react-string-replace/index.js");
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_4__);





const decorate = text => {
  // https://github.com/LLK/scratch-www/blob/25232a06bcceeaddec8fcb24fb63a44d870cf1cf/src/lib/decorate-text.jsx

  // Make @mentions clickable
  text = react_string_replace__WEBPACK_IMPORTED_MODULE_4___default()(text, /@([\w-]+)/, (match, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://scratch.mit.edu/users/".concat(match, "/"),
    rel: "noreferrer",
    key: match + i
  }, "@".concat(match)));

  // Make links clickable
  const linkRegex = /(https?:\/\/[\w\d_\-.]{1,256}(?:\/(?:\S*[\w:/#[\]@$&'()*+=])?)?(?![^?!,:;\w\s]\S))/g;
  text = react_string_replace__WEBPACK_IMPORTED_MODULE_4___default()(text, linkRegex, (match, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: match,
    rel: "noreferrer",
    key: match + i
  }, match));

  // Make hashtags clickable
  text = react_string_replace__WEBPACK_IMPORTED_MODULE_4___default()(text, /#([\w-]+)/g, (match, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://scratch.mit.edu/search/projects?q=".concat(match),
    key: match + i
  }, "#".concat(match)));
  return text;
};
const Description = _ref => {
  let instructions = _ref.instructions,
    credits = _ref.credits,
    projectId = _ref.projectId;
  return instructions !== 'unshared' && credits !== 'unshared' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _description_css__WEBPACK_IMPORTED_MODULE_3__["default"].description
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _description_css__WEBPACK_IMPORTED_MODULE_3__["default"].projectLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://scratch.mit.edu/projects/".concat(projectId, "/"),
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "View project on Scratch",
    id: "tw.viewOnScratch"
  }))), instructions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: _description_css__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "Instructions",
    id: "tw.home.instructions"
  })), decorate(instructions)) : null, instructions && credits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _description_css__WEBPACK_IMPORTED_MODULE_3__["default"].divider
  }) : null, credits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: _description_css__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "Notes and Credits",
    id: "tw.home.credit"
  })), decorate(credits)));
};
Description.propTypes = {
  instructions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  credits: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  projectId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Description);

/***/ },

/***/ "./src/components/tw-featured-projects/featured-projects.jsx"
/*!*******************************************************************!*\
  !*** ./src/components/tw-featured-projects/featured-projects.jsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.bindall */ "../../node_modules/.pnpm/lodash.bindall@4.4.0/node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "../../node_modules/.pnpm/react-intl@2.9.0_prop-types@15.8.1_react@16.14.0/node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../node_modules/.pnpm/react-redux@5.0.7_react@16.14.0_redux@3.7.2/node_modules/react-redux/es/index.js");
/* harmony import */ var _tw_studioview_studioview_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tw-studioview/studioview.jsx */ "./src/components/tw-studioview/studioview.jsx");
/* harmony import */ var _featured_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./featured-projects.css */ "./src/components/tw-featured-projects/featured-projects.css");
/* harmony import */ var _lib_tw_navigation_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/tw-navigation-utils.js */ "./src/lib/tw-navigation-utils.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../../node_modules/.pnpm/classnames@2.2.6/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);









class FeaturedProjects extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default()(this, ['handleSelect', 'handleOpenProjects']);
    this.state = {
      opened: false,
      transition: true
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.projectId === '0' && prevProps.projectId === null) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        opened: true,
        transition: false
      });
    }
  }
  handleSelect(id) {
    this.props.setProjectId(id);
  }
  handleOpenProjects() {
    this.setState({
      opened: true
    });
  }
  render() {
    const opened = this.state.opened;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].container
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].projects, {
        [_featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].opened]: opened,
        [_featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].transition]: this.state.transition
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tw_studioview_studioview_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: this.props.studio,
      onSelect: this.handleSelect,
      placeholder: !opened
    }), opened ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].openerContainer,
      onClick: this.handleOpenProjects
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].openerContent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      defaultMessage: "Click to view featured projects.",
      id: "tw.viewFeaturedProjects"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].footer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://scratch.mit.edu/studios/".concat(this.props.studio, "/")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      defaultMessage: "View studio on Scratch.",
      id: "tw.featuredProjectsStudio"
    }))));
  }
}
FeaturedProjects.propTypes = {
  setProjectId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  projectId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  studio: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
const mapStateToProps = state => ({
  projectId: state.scratchGui.projectState.projectId
});
const mapDispatchToProps = dispatch => ({
  setProjectId: projectId => (0,_lib_tw_navigation_utils_js__WEBPACK_IMPORTED_MODULE_7__.setProjectId)(dispatch, projectId)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(FeaturedProjects));

/***/ },

/***/ "./src/components/tw-invalid-embed/invalid-embed.jsx"
/*!***********************************************************!*\
  !*** ./src/components/tw-invalid-embed/invalid-embed.jsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _invalid_embed_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalid-embed.css */ "./src/components/tw-invalid-embed/invalid-embed.css");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/brand */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_brand__WEBPACK_IMPORTED_MODULE_2__);




// Note that when this component is used, the rest of scratch-gui is not being run, so don't
// use redux, themes, translations, etc.

// We also can't be certain that the iframe sandbox will let us open up links, so make sure
// all the links can be manually visited if necessary.

const InvalidEmbed = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: _invalid_embed_css__WEBPACK_IMPORTED_MODULE_1__["default"].container
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  className: _invalid_embed_css__WEBPACK_IMPORTED_MODULE_1__["default"].unhappy
}, ":("), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Invalid ".concat(_lib_brand__WEBPACK_IMPORTED_MODULE_2__.APP_NAME, " Embed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, 'See ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://docs.turbowarp.org/embedding",
  target: "_blank",
  rel: "noreferrer"
}, 'docs.turbowarp.org/embedding'), ' for more information. You need to replace the iframe src with the embed page:'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: _invalid_embed_css__WEBPACK_IMPORTED_MODULE_1__["default"].code
}, 'https://turbowarp.org/<project ID>/embed'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Here's an example of a full iframe to embed a project:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: _invalid_embed_css__WEBPACK_IMPORTED_MODULE_1__["default"].code
}, "<iframe src=\"https://turbowarp.org/60917032/embed\" width=\"482\" height=\"412\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "If you are seeing this page even though you aren't embedding anything, let us know on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://scratch.mit.edu/users/GarboMuffin/#comments",
  target: "_blank",
  rel: "noreferrer"
}, 'scratch.mit.edu/users/GarboMuffin'), '.'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvalidEmbed);

/***/ },

/***/ "./src/components/tw-project-input/project-input.jsx"
/*!***********************************************************!*\
  !*** ./src/components/tw-project-input/project-input.jsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/.pnpm/react-redux@5.0.7_react@16.14.0_redux@3.7.2/node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.bindall */ "../../node_modules/.pnpm/lodash.bindall@4.4.0/node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "../../node_modules/.pnpm/react-tooltip@3.8.0_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/react-tooltip/dist/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "../../node_modules/.pnpm/react-intl@2.9.0_prop-types@15.8.1_react@16.14.0/node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/project-state */ "./src/reducers/project-state.js");
/* harmony import */ var _project_input_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-input.css */ "./src/components/tw-project-input/project-input.css");
/* harmony import */ var _lib_tw_navigation_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/tw-navigation-utils */ "./src/lib/tw-navigation-utils.js");









const PROJECT_BASE = 'https://scratch.mit.edu/projects/';
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  tooltip: {
    "id": "tw.input.tooltip",
    "defaultMessage": "Copy and paste a link here!"
  }
});
class ProjectInput extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default()(this, ['handleKeyDown', 'handleChange', 'handleBlur', 'handleFocus', 'inputRef', 'tooltipRef']);
    this.state = {
      projectId: this.props.projectId
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.projectId !== prevProps.projectId) {
      if (this.props.projectId === _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__.defaultProjectId) {
        this.input.focus();
        this.input.selectionStart = this.input.value.length;
      } else {
        this.input.blur();
      }
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        projectId: this.props.projectId
      });
    }
  }
  readProjectId(e) {
    const id = e.target.value;
    return id || _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__.defaultProjectId;
  }
  handleKeyDown(e) {
    if (e.key === 'Enter' && this.state.projectId) {
      this.input.blur();
    }
  }
  handleChange(e) {
    this.setState({
      projectId: this.readProjectId(e) || _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__.defaultProjectId
    });
  }
  handleBlur() {
    if (this.state.projectId && this.state.projectId !== this.props.projectId) {
      this.props.setProjectId(this.state.projectId);
    }
    react_tooltip__WEBPACK_IMPORTED_MODULE_4___default().hide(this.tooltip);
  }
  handleFocus(e) {
    e.target.select();
    react_tooltip__WEBPACK_IMPORTED_MODULE_4___default().show(this.tooltip);
  }
  inputRef(el) {
    this.input = el;
  }
  tooltipRef(el) {
    this.tooltip = el;
  }
  render() {
    const projectId = this.state.projectId === _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__.defaultProjectId ? '' : this.state.projectId || '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      ref: this.tooltipRef,
      "data-tip": this.props.intl.formatMessage(messages.tooltip)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: _project_input_css__WEBPACK_IMPORTED_MODULE_7__["default"].tooltip,
      effect: "solid"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      ref: this.inputRef,
      spellCheck: "false",
      type: "text",
      value: "".concat(projectId),
      className: _project_input_css__WEBPACK_IMPORTED_MODULE_7__["default"].input,
      onKeyDown: this.handleKeyDown,
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus
    }));
  }
}
ProjectInput.propTypes = {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_5__.intlShape,
  projectId: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  setProjectId: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)
};
const mapStateToProps = state => ({
  projectId: state.scratchGui.projectState.projectId
});
const mapDispatchToProps = dispatch => ({
  setProjectId: projectId => (0,_lib_tw_navigation_utils__WEBPACK_IMPORTED_MODULE_8__.setProjectId)(dispatch, projectId)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_5__.injectIntl)((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(ProjectInput)));

/***/ },

/***/ "./src/components/tw-studioview/studioview.js"
/*!****************************************************!*\
  !*** ./src/components/tw-studioview/studioview.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studioview_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studioview.css */ "./src/components/tw-studioview/studioview.css");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/.pnpm/classnames@2.2.6/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable */
// Imported from:
// https://github.com/forkphorus/forkphorus/tree/master/studioview
// With changes to make it work properly in the scratch-gui environment.
// todo: we have to see if we are leaking memory when this is mounted and unmounted, esp. because of event listeners
// todo: use react-intl for translations




/**
 * @class
 */
var StudioView = function StudioView(studioId) {
  this.studioId = studioId;
  this.offset = 0;
  this.ended = false;
  this.loadingPage = false;
  this.unusedPlaceholders = [];
  this.root = document.createElement('div');
  this.root.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewRoot;
  this.projectList = document.createElement('div');
  this.projectList.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewList;
  this.root.appendChild(this.projectList);
  if ('IntersectionObserver' in window) {
    this.intersectionObserver = new IntersectionObserver(this.handleIntersection.bind(this), {
      root: this.projectList
    });
    this.loadNextPageObserver = new IntersectionObserver(this.handleLoadNextPageIntersection.bind(this), {
      root: this.projectList
    });
  } else {
    this.intersectionObserver = null;
    this.loadNextPageObserver = null;
  }

  // will be filled in by studioview.jsx
  this.messages = {
    AUTHOR_ATTRIBUTION: '',
    PROJECT_HOVER_TEXT: '',
    LOAD_ERROR: ''
  };
};

/**
 * Add a project to the view.
 * An unused placeholder element may be used, or it may be created.
 */
StudioView.prototype.addProject = function (details) {
  var el;
  if (this.unusedPlaceholders.length) {
    el = this.unusedPlaceholders.shift();
  } else {
    el = this.createPlaceholder();
    this.projectList.appendChild(el);
  }
  this.placeholderToProject(el, details.id, details.title, details.author);
};

/**
 * Create an <img> element that will load only when it becomes visible.
 */
StudioView.prototype.createLazyImage = function (src) {
  var el = document.createElement('img');
  if (this.intersectionObserver) {
    this.intersectionObserver.observe(el);
    el.dataset.src = src;
  } else {
    // then we just won't lazy load it
    el.src = src;
  }
  return el;
};

/**
 * Create a placeholder or placeholder element.
 */
StudioView.prototype.createPlaceholder = function () {
  var el = document.createElement('a');
  el.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewProject, _studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewPlaceholder);
  var thumbnail = document.createElement('div');
  thumbnail.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewThumbnail;
  var title = document.createElement('div');
  title.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewTitle;
  var author = document.createElement('div');
  author.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewAuthor;
  el.thumbnailEl = thumbnail;
  el.titleEl = title;
  el.authorEl = author;
  el.appendChild(thumbnail);
  el.appendChild(title);
  el.appendChild(author);
  return el;
};

/**
 * Convert a placeholder element made by createPlaceholder to a project element.
 */
StudioView.prototype.placeholderToProject = function (el, id, title, author) {
  el.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewProject, _studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewLoaded);
  el.dataset.id = id;
  el.dataset.title = title;
  el.dataset.author = author;
  el.title = this.messages.PROJECT_HOVER_TEXT.replace('$author', author).replace('$title', title);
  el.href = StudioView.PROJECT_PAGE.replace('$id', id);
  var thumbnailSrc = StudioView.THUMBNAIL_SRC.replace('$id', id);
  var thumbnailImg = this.createLazyImage(thumbnailSrc);
  el.thumbnailEl.appendChild(thumbnailImg);
  el.titleEl.innerText = title;
  el.authorEl.innerText = this.messages.AUTHOR_ATTRIBUTION.replace('$author', author);
  el.addEventListener('click', this.handleClick.bind(this), true);
  el.addEventListener('keydown', this.handleKeyDown.bind(this), true);
  return el;
};

/**
 * Adds an error message to the list.
 */
StudioView.prototype.addErrorElement = function () {
  var el = document.createElement('div');
  el.innerText = this.messages.LOAD_ERROR;
  el.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewError;
  this.projectList.appendChild(el);
};
StudioView.prototype.handleLoadNextPageIntersection = function (e) {
  for (var i = 0; i < e.length; i++) {
    var intersection = e[i];
    if (intersection.isIntersecting && this.canLoadNext()) {
      this.loadNextPage();
    }
  }
};

// Click a project element or a child of a project element
StudioView.prototype.clickProject = function (el) {
  while (!el.classList.contains(_studioview_css__WEBPACK_IMPORTED_MODULE_0__["default"].studioviewProject)) {
    el = el.parentNode;
  }
  var id = el.dataset.id;
  this.onselect(id, el);
};

// Called when click is fired on a project element
StudioView.prototype.handleClick = function (e) {
  e.preventDefault();
  this.clickProject(e.target);
};

// Called when keydown is fired on a project element
StudioView.prototype.handleKeyDown = function (e) {
  if (e.keyCode === 13) {
    // treat enter (13) as click
    e.preventDefault();
    this.clickProject(e.target);
  }
};

// Called by the IntersectionObserver when it sees an intersection
StudioView.prototype.handleIntersection = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var target = entry.target;
      target.src = target.dataset.src;
      target.dataset.src = '';
      target.className = '';
      observer.unobserve(target);
    }
  });
};

/**
 * Determines whether it is safe to attempt to load the next page.
 */
StudioView.prototype.canLoadNext = function () {
  return !this.loadingPage && !this.ended;
};

/**
 * Remove all unused placeholder elements.
 */
StudioView.prototype.cleanupPlaceholders = function () {
  while (this.unusedPlaceholders.length) {
    var el = this.unusedPlaceholders.pop();
    this.projectList.removeChild(el);
  }
};

/**
 * Add placeholder placeholder elements.
 */
StudioView.prototype.addPlaceholders = function () {
  for (var i = 0; i < StudioView.PLACEHOLDER_COUNT; i++) {
    var el = this.createPlaceholder();
    this.unusedPlaceholders.push(el);
    this.projectList.appendChild(el);
  }
};

/**
 * Make changes to the order of projects.
 * Default shuffler does nothing.
 */
StudioView.prototype.shuffler = function (projects) {
  return projects;
};

/**
 * Begins loading the next page.
 */
StudioView.prototype.loadNextPage = function () {
  if (this.loadingPage) {
    throw new Error('Already loading the next page');
  }
  if (this.ended) {
    throw new Error('There are no more pages to load');
  }
  if (this.unusedPlaceholders.length === 0) {
    this.addPlaceholders();
  }
  if (this.loadNextPageObserver) {
    this.loadNextPageObserver.disconnect();
  }
  this.root.setAttribute('loading', '');
  this.loadingPage = true;
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onload = function () {
    var rawProjects = xhr.response;
    if (!Array.isArray(rawProjects)) {
      xhr.onerror();
      return;
    }
    var projects = [];
    for (var i = 0; i < rawProjects.length; i++) {
      var p = rawProjects[i];
      projects.push({
        id: p.id,
        title: p.title,
        author: p.username
      });
    }
    projects = this.shuffler(projects);
    for (var i = 0; i < projects.length; i++) {
      this.addProject(projects[i]);
    }
    this.cleanupPlaceholders();
    if (rawProjects.length === 40) {
      if (this.loadNextPageObserver) {
        this.loadNextPageObserver.observe(this.projectList.lastChild);
      }
    } else {
      this.ended = true;
      this.onend();
    }
    this.offset += projects.length;
    this.loadingPage = false;
    this.root.removeAttribute('loading');
    this.onpageload();
  }.bind(this);
  xhr.onerror = function () {
    this.root.setAttribute('error', '');
    this.cleanupPlaceholders();
    this.addErrorElement();
    this.ended = true;
  }.bind(this);
  var url = StudioView.STUDIO_API.replace('$id', this.studioId).replace('$offset', '' + this.offset);
  xhr.open('GET', url);
  xhr.send();
};
StudioView.prototype.getURL = function () {
  return StudioView.STUDIO_PAGE.replace('$id', this.studioId);
};
StudioView.prototype.onselect = function (id, el) {};
StudioView.prototype.onpageload = function () {};
StudioView.prototype.onend = function () {};
StudioView.STUDIO_API = 'https://trampoline.turbowarp.org/api/studios/$id/projects?offset=$offset';

// The URL to download thumbnails from.
// $id is replaced with the project's ID.
StudioView.THUMBNAIL_SRC = 'https://trampoline.turbowarp.org/thumbnails/$id?width=144&height=108';

// The URL for project pages.
// $id is replaced with the project ID.
StudioView.PROJECT_PAGE = 'https://turbowarp.org/$id';

// The URL for studio pages.
// $id is replaced with the studio ID.
StudioView.STUDIO_PAGE = 'https://scratch.mit.edu/studios/$id/';

// The amount of "placeholders" to insert before the next page loads.
StudioView.PLACEHOLDER_COUNT = 9;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudioView);

/***/ },

/***/ "./src/components/tw-studioview/studioview.jsx"
/*!*****************************************************!*\
  !*** ./src/components/tw-studioview/studioview.jsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.bindall */ "../../node_modules/.pnpm/lodash.bindall@4.4.0/node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../node_modules/.pnpm/classnames@2.2.6/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "../../node_modules/.pnpm/react-intl@2.9.0_prop-types@15.8.1_react@16.14.0/node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _studioview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./studioview */ "./src/components/tw-studioview/studioview.js");
/* harmony import */ var _studioview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./studioview.css */ "./src/components/tw-studioview/studioview.css");







const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  authorAttribution: {
    "id": "tw.studioview.authorAttribution",
    "defaultMessage": "by {author}"
  },
  hoverText: {
    "id": "tw.studioview.hoverText",
    "defaultMessage": "{title} by {author}"
  },
  error: {
    "id": "tw.studioview.error",
    "defaultMessage": "There was an error loading the next page of projects."
  }
});
class StudioViewComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_2___default()(this, ['handleSelect', 'ref']);
  }
  componentDidMount() {
    this.studioView = new _studioview__WEBPACK_IMPORTED_MODULE_5__["default"](this.props.id);
    this.studioView.messages.AUTHOR_ATTRIBUTION = this.props.intl.formatMessage(messages.authorAttribution, {
      // studioview uses $-based variables
      author: '$author'
    });
    this.studioView.messages.PROJECT_HOVER_TEXT = this.props.intl.formatMessage(messages.hoverText, {
      // studioview uses $-based variables
      author: '$author',
      title: '$title'
    });
    this.studioView.messages.LOAD_ERROR = this.props.intl.formatMessage(messages.error);
    if (this.props.placeholder) {
      this.studioView.addPlaceholders();
    } else {
      this.studioView.loadNextPage();
    }
    this.studioView.onselect = this.handleSelect;
    this.el.appendChild(this.studioView.root);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.placeholder && !this.props.placeholder) {
      this.studioView.loadNextPage();
    }
  }
  handleSelect(id) {
    this.props.onSelect(id);
  }
  ref(el) {
    this.el = el;
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_studioview_css__WEBPACK_IMPORTED_MODULE_6__["default"].wrapper),
      ref: this.ref
    });
  }
}
StudioViewComponent.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  intl: react_intl__WEBPACK_IMPORTED_MODULE_4__.intlShape.isRequired,
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)(StudioViewComponent));

/***/ },

/***/ "./src/containers/tw-cloud-variable-badge.jsx"
/*!****************************************************!*\
  !*** ./src/containers/tw-cloud-variable-badge.jsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/.pnpm/react-redux@5.0.7_react@16.14.0_redux@3.7.2/node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_tw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/tw */ "./src/reducers/tw.js");
/* harmony import */ var _components_tw_cloud_variable_badge_cloud_variable_badge_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tw-cloud-variable-badge/cloud-variable-badge.jsx */ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.jsx");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.bindall */ "../../node_modules/.pnpm/lodash.bindall@4.4.0/node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/modals */ "./src/reducers/modals.js");







class TWCloudVariableBadge extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_5___default()(this, ['handleChangeCloudHost']);
  }
  handleChangeCloudHost(cloudHost) {
    this.props.onSetCloudHost(cloudHost);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_tw_cloud_variable_badge_cloud_variable_badge_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      cloudHost: this.props.cloudHost,
      onSetCloudHost: this.handleChangeCloudHost,
      onOpenChangeUsername: this.props.onOpenChangeUsername
    });
  }
}
TWCloudVariableBadge.propTypes = {
  cloudHost: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  onSetCloudHost: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onOpenChangeUsername: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
const mapStateToProps = state => ({
  cloudHost: state.scratchGui.tw.cloudHost
});
const mapDispatchToProps = dispatch => ({
  onSetCloudHost: cloudHost => dispatch((0,_reducers_tw__WEBPACK_IMPORTED_MODULE_3__.setCloudHost)(cloudHost)),
  onOpenChangeUsername: () => dispatch((0,_reducers_modals__WEBPACK_IMPORTED_MODULE_6__.openUsernameModal)())
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(TWCloudVariableBadge));

/***/ },

/***/ "./src/lib/tw-fix-history-api.js"
/*!***************************************!*\
  !*** ./src/lib/tw-fix-history-api.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/lib/log.js");

const originalReplaceState = history.replaceState;
history.replaceState = function () {
  try {
    document.dispatchEvent(new CustomEvent('urlchange'));
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return originalReplaceState.call(this, ...args);
  } catch (e) {
    _log__WEBPACK_IMPORTED_MODULE_0__["default"].error(e);
  }
};
const originalPushState = history.pushState;
history.pushState = function () {
  try {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return originalPushState.call(this, ...args);
  } catch (e) {
    _log__WEBPACK_IMPORTED_MODULE_0__["default"].error(e);
  }
};

/***/ },

/***/ "./src/lib/tw-packager-integration-hoc.jsx"
/*!*************************************************!*\
  !*** ./src/lib/tw-packager-integration-hoc.jsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PackagerIntegrationHOC)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/.pnpm/react-redux@5.0.7_react@16.14.0_redux@3.7.2/node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./src/lib/log.js");
/* harmony import */ var _reducers_project_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/project-state */ "./src/reducers/project-state.js");
const _excluded = ["canOpenPackager"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }





const PACKAGER_URL = 'https://editors.astras.top/packager/';
const PACKAGER_ORIGIN = 'https://editors.astras.top';
const PackagerIntegrationHOC = function PackagerIntegrationHOC(WrappedComponent) {
  class PackagerIntegrationComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
      super(props);
      this.handleClickPackager = this.handleClickPackager.bind(this);
      this.handleMessage = this.handleMessage.bind(this);
    }
    componentDidMount() {
      window.addEventListener('message', this.handleMessage);
    }
    componentWillUnmount() {
      window.removeEventListener('message', this.handleMessage);
    }
    handleClickPackager() {
      if (this.props.canOpenPackager) {
        window.open("".concat(PACKAGER_URL, "/?import_from=").concat(location.origin));
      }
    }
    handleMessage(e) {
      if (e.origin !== PACKAGER_ORIGIN) {
        return;
      }
      if (!this.props.canOpenPackager) {
        return;
      }
      const packagerData = e.data.p4;
      if (packagerData.type !== 'ready-for-import') {
        return;
      }

      // The packager needs to know that we will be importing something so it can display a loading screen
      e.source.postMessage({
        p4: {
          type: 'start-import'
        }
      }, e.origin);
      this.props.vm.saveProjectSb3('arraybuffer').then(buffer => {
        const name = "".concat(this.props.reduxProjectTitle, ".sb3");
        e.source.postMessage({
          p4: {
            type: 'finish-import',
            data: buffer,
            name
          }
        }, e.origin, [buffer]);
      }).catch(err => {
        _log__WEBPACK_IMPORTED_MODULE_3__["default"].error(err);
        e.source.postMessage({
          p4: {
            type: 'cancel-import'
          }
        }, e.origin);
      });
    }
    render() {
      const _this$props = this.props,
        canOpenPackager = _this$props.canOpenPackager,
        props = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, _extends({
        onClickPackager: this.handleClickPackager
      }, props));
    }
  }
  PackagerIntegrationComponent.propTypes = {
    canOpenPackager: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    reduxProjectTitle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    vm: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
      saveProjectSb3: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
    })
  };
  const mapStateToProps = state => ({
    canOpenPackager: (0,_reducers_project_state__WEBPACK_IMPORTED_MODULE_4__.getIsShowingProject)(state.scratchGui.projectState.loadingState),
    reduxProjectTitle: state.scratchGui.projectTitle,
    vm: state.scratchGui.vm
  });
  const mapDispatchToProps = () => ({});
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(PackagerIntegrationComponent);
};


/***/ },

/***/ "./src/playground/load-service-worker.js"
/*!***********************************************!*\
  !*** ./src/playground/load-service-worker.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadServiceWorker: () => (/* binding */ loadServiceWorker)
/* harmony export */ });
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/log */ "./src/lib/log.js");
/* harmony import */ var _file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!file-loader?name=sw.js!./service-worker.js */ "../../node_modules/.pnpm/file-loader@6.2.0_webpack@5.106.2/node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js");


let loaded = false;
const actuallyLoadServiceWorker = () => {
  navigator.serviceWorker.register(_file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1__["default"]).catch(err => {
    _lib_log__WEBPACK_IMPORTED_MODULE_0__["default"].error('sw error', err);
  });
};
const loadServiceWorker = () => {
  if (false) // removed by dead control flow
{}
};


/***/ },

/***/ "./src/playground/render-interface.jsx"
/*!*********************************************!*\
  !*** ./src/playground/render-interface.jsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../node_modules/.pnpm/classnames@2.2.6/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../../node_modules/.pnpm/react-redux@5.0.7_react@16.14.0_redux@3.7.2/node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "../../node_modules/.pnpm/redux@3.7.2/node_modules/redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "../../node_modules/.pnpm/react-intl@2.9.0_prop-types@15.8.1_react@16.14.0/node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _reducers_project_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/project-state.js */ "./src/reducers/project-state.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _lib_error_boundary_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/error-boundary-hoc.jsx */ "./src/lib/error-boundary-hoc.jsx");
/* harmony import */ var _lib_tw_project_meta_fetcher_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/tw-project-meta-fetcher-hoc.jsx */ "./src/lib/tw-project-meta-fetcher-hoc.jsx");
/* harmony import */ var _lib_tw_state_manager_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/tw-state-manager-hoc.jsx */ "./src/lib/tw-state-manager-hoc.jsx");
/* harmony import */ var _lib_sb_file_uploader_hoc_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/sb-file-uploader-hoc.jsx */ "./src/lib/sb-file-uploader-hoc.jsx");
/* harmony import */ var _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/tw-packager-integration-hoc.jsx */ "./src/lib/tw-packager-integration-hoc.jsx");
/* harmony import */ var _addons_settings_store_singleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../addons/settings-store-singleton */ "./src/addons/settings-store-singleton.js");
/* harmony import */ var _lib_tw_fix_history_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/tw-fix-history-api */ "./src/lib/tw-fix-history-api.js");
/* harmony import */ var _render_gui_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx");
/* harmony import */ var _components_menu_bar_menu_bar_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/menu-bar/menu-bar.jsx */ "./src/components/menu-bar/menu-bar.jsx");
/* harmony import */ var _components_tw_project_input_project_input_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/tw-project-input/project-input.jsx */ "./src/components/tw-project-input/project-input.jsx");
/* harmony import */ var _components_tw_featured_projects_featured_projects_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/tw-featured-projects/featured-projects.jsx */ "./src/components/tw-featured-projects/featured-projects.jsx");
/* harmony import */ var _components_tw_description_description_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/tw-description/description.jsx */ "./src/components/tw-description/description.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _containers_tw_cloud_variable_badge_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../containers/tw-cloud-variable-badge.jsx */ "./src/containers/tw-cloud-variable-badge.jsx");
/* harmony import */ var _containers_tw_windchime_submitter_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../containers/tw-windchime-submitter.jsx */ "./src/containers/tw-windchime-submitter.jsx");
/* harmony import */ var _lib_tw_environment_support_prober__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../lib/tw-environment-support-prober */ "./src/lib/tw-environment-support-prober.js");
/* harmony import */ var _addons_channels__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../addons/channels */ "./src/addons/channels.js");
/* harmony import */ var _load_service_worker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./load-service-worker */ "./src/playground/load-service-worker.js");
/* harmony import */ var _addons_entry__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../addons/entry */ "./src/addons/entry.js");
/* harmony import */ var _components_tw_invalid_embed_invalid_embed_jsx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/tw-invalid-embed/invalid-embed.jsx */ "./src/components/tw-invalid-embed/invalid-embed.jsx");
/* harmony import */ var _lib_brand_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../lib/brand.js */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_lib_brand_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _interface_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./interface.css */ "./src/playground/interface.css");
const _excluded = ["intl", "hasCloudVariables", "description", "isFullScreen", "isLoading", "isPlayerOnly", "isRtl", "projectId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */































const isInvalidEmbed = window.parent !== window;
const handleClickAddonSettings = addonId => {
  // addonId might be a string of the addon to focus on, undefined, or an event (treat like undefined)
  const path =  false ? 0 : 'addons.html';
  const url = "".concat("").concat(path).concat(typeof addonId === 'string' ? "#".concat(addonId) : '');
  window.open(url);
};
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  defaultTitle: {
    "id": "tw.guiDefaultTitle",
    "defaultMessage": "Run Scratch projects faster"
  }
});
const WrappedMenuBar = (0,redux__WEBPACK_IMPORTED_MODULE_4__.compose)(_lib_sb_file_uploader_hoc_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_12__["default"])(_components_menu_bar_menu_bar_jsx__WEBPACK_IMPORTED_MODULE_16__["default"]);
if (_addons_channels__WEBPACK_IMPORTED_MODULE_24__["default"].reloadChannel) {
  _addons_channels__WEBPACK_IMPORTED_MODULE_24__["default"].reloadChannel.addEventListener('message', () => {
    location.reload();
  });
}
if (_addons_channels__WEBPACK_IMPORTED_MODULE_24__["default"].changeChannel) {
  _addons_channels__WEBPACK_IMPORTED_MODULE_24__["default"].changeChannel.addEventListener('message', e => {
    _addons_settings_store_singleton__WEBPACK_IMPORTED_MODULE_13__["default"].setStoreWithVersionCheck(e.data);
  });
}
(0,_addons_entry__WEBPACK_IMPORTED_MODULE_26__["default"])();
const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("footer", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].footer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].footerContent
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].footerText
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage
// eslint-disable-next-line max-len
, {
  defaultMessage: "{APP_NAME} is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.",
  id: "tw.footer.disclaimer",
  values: {
    APP_NAME: _lib_brand_js__WEBPACK_IMPORTED_MODULE_28__.APP_NAME
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].footerText
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage
// eslint-disable-next-line max-len
, {
  defaultMessage: "Scratch is a project of the Scratch Foundation. It is available for free at {scratchDotOrg}.",
  id: "tw.footer.scratchDisclaimer",
  values: {
    scratchDotOrg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
      href: "https://scratch.org/",
      target: "_blank",
      rel: "noreferrer"
    }, 'https://scratch.org/')
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].footerColumns
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].footerSection
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
  href: "credits.html"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
  defaultMessage: "Credits",
  id: "tw.footer.credits"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].footerSection
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
  href: "https://github.com/AstraEditor/Desktop/releases"
}, 'AstraEditor Desktop'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
  href: "https://packager.turbowarp.org/"
}, 'TurboWarp Packager'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
  href: "https://docs.turbowarp.org/embedding"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
  defaultMessage: "TurboWarp Embedding",
  id: "tw.footer.embed"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
  href: "https://docs.turbowarp.org/url-parameters"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
  defaultMessage: "URL Parameters",
  id: "tw.footer.parameters"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
  href: "https://docs.turbowarp.org/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
  defaultMessage: "TurboWarp Documentation",
  id: "tw.footer.documentation"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].footerSection
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
  href: "https://scratch.mit.edu/users/GarboMuffin/#comments"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
  defaultMessage: "Feedback & Bugs",
  id: "tw.feedback"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
  href: "https://github.com/AstraEditor/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
  defaultMessage: "Source Code",
  id: "tw.code"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
  href: "privacy.html"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
  defaultMessage: "Privacy Policy",
  id: "tw.privacy"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
  href: "why.html"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
  defaultMessage: "Relationship",
  id: "tw.relationship"
}))))));
class Interface extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.handleUpdateProjectTitle = this.handleUpdateProjectTitle.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isLoading && !this.props.isLoading) {
      (0,_load_service_worker__WEBPACK_IMPORTED_MODULE_25__.loadServiceWorker)();
    }
  }
  handleUpdateProjectTitle(title, isDefault) {
    if (isDefault || !title) {
      document.title = "".concat(_lib_brand_js__WEBPACK_IMPORTED_MODULE_28__.APP_NAME, " - ").concat(this.props.intl.formatMessage(messages.defaultTitle));
    } else {
      document.title = "".concat(title, " - ").concat(_lib_brand_js__WEBPACK_IMPORTED_MODULE_28__.APP_NAME);
    }
  }
  render() {
    if (isInvalidEmbed) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_tw_invalid_embed_invalid_embed_jsx__WEBPACK_IMPORTED_MODULE_27__["default"], null);
    }
    const _this$props = this.props,
      intl = _this$props.intl,
      hasCloudVariables = _this$props.hasCloudVariables,
      description = _this$props.description,
      isFullScreen = _this$props.isFullScreen,
      isLoading = _this$props.isLoading,
      isPlayerOnly = _this$props.isPlayerOnly,
      isRtl = _this$props.isRtl,
      projectId = _this$props.projectId,
      props = _objectWithoutProperties(_this$props, _excluded);
    const isHomepage = isPlayerOnly && !isFullScreen;
    const isEditor = !isPlayerOnly;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].container, {
        [_interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].playerOnly]: isHomepage,
        [_interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].editor]: isEditor
      }),
      dir: isRtl ? 'rtl' : 'ltr'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_containers_tw_windchime_submitter_jsx__WEBPACK_IMPORTED_MODULE_22__["default"], null), isHomepage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].menu
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(WrappedMenuBar, {
      canChangeLanguage: true,
      canManageFiles: true,
      canChangeTheme: true,
      enableSeeInside: true,
      onClickAddonSettings: handleClickAddonSettings
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].center,
      style: isPlayerOnly ? {
        // + 2 accounts for 1px border on each side of the stage
        width: "".concat(Math.max(480, props.customStageSize.width) + 2, "px")
      } : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_render_gui_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({
      onClickAddonSettings: handleClickAddonSettings,
      onUpdateProjectTitle: this.handleUpdateProjectTitle,
      backpackVisible: true,
      backpackHost: "_local_"
    }, props)), isHomepage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_lib_tw_environment_support_prober__WEBPACK_IMPORTED_MODULE_23__.isBrowserSupported)() ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_20__["default"], {
      isRtl: isRtl
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_tw_project_input_project_input_jsx__WEBPACK_IMPORTED_MODULE_17__["default"], null)),
    // eslint-disable-next-line max-len
    (description.instructions === 'unshared' || description.credits === 'unshared') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].infobox, _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].unsharedUpdate)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      defaultMessage: "Unshared projects are no longer visible.",
      id: "tw.unshared2.1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      defaultMessage: "For more information, visit: {link}",
      id: "tw.unshared.2",
      values: {
        link: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
          href: "https://docs.turbowarp.org/unshared-projects",
          target: "_blank",
          rel: "noopener noreferrer"
        }, 'https://docs.turbowarp.org/unshared-projects')
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage
    // eslint-disable-next-line max-len
    , {
      defaultMessage: "If the project was shared recently, this message may appear incorrectly for a few minutes.",
      id: "tw.unshared.cache"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage
    // eslint-disable-next-line max-len
    , {
      defaultMessage: "If this project is actually shared, please report a bug.",
      id: "tw.unshared.bug"
    }))), hasCloudVariables && projectId !== '0' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_containers_tw_cloud_variable_badge_jsx__WEBPACK_IMPORTED_MODULE_21__["default"], null)), description.instructions || description.credits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_tw_description_description_jsx__WEBPACK_IMPORTED_MODULE_19__["default"], {
      instructions: description.instructions,
      credits: description.credits,
      projectId: projectId
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_29__["default"].section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage
    // eslint-disable-next-line max-len
    , {
      defaultMessage: "{APP_NAME} is a TurboWarp mod used to add more practical features to make your writing lightning fast. Why not enter some dataURLs or download links about the work?",
      id: "tw.home.description",
      values: {
        APP_NAME: _lib_brand_js__WEBPACK_IMPORTED_MODULE_28__.APP_NAME
      }
    })))) : null), isHomepage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Footer, null));
  }
}
Interface.propTypes = {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_5__.intlShape,
  hasCloudVariables: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  customStageSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  }),
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    credits: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    instructions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  isFullScreen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isPlayerOnly: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isRtl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  projectId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
const mapStateToProps = state => ({
  hasCloudVariables: state.scratchGui.tw.hasCloudVariables,
  customStageSize: state.scratchGui.customStageSize,
  description: state.scratchGui.tw.description,
  isFullScreen: state.scratchGui.mode.isFullScreen,
  isLoading: (0,_reducers_project_state_js__WEBPACK_IMPORTED_MODULE_6__.getIsLoading)(state.scratchGui.projectState.loadingState),
  isPlayerOnly: state.scratchGui.mode.isPlayerOnly,
  isRtl: state.locales.isRtl,
  projectId: state.scratchGui.projectState.projectId
});
const mapDispatchToProps = () => ({});
const ConnectedInterface = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.injectIntl)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Interface));
const WrappedInterface = (0,redux__WEBPACK_IMPORTED_MODULE_4__.compose)(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_lib_error_boundary_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])('TW Interface'), _lib_tw_project_meta_fetcher_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _lib_tw_state_manager_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_12__["default"])(ConnectedInterface);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WrappedInterface);

/***/ },

/***/ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-cloud-variable-badge/cloud-variable-badge.css"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-cloud-variable-badge/cloud-variable-badge.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* overridden by src/lib/themes/guiHelpers.js */

.cloud-variable-badge_badge_ddMpe {
  padding: 0.5rem;
  margin: 5px 0 8px 0;
  border: 1px solid var(--badge-border);
  background-color: var(--badge-background);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.5rem;
}

.cloud-variable-badge_title_aiYWM {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
}

.cloud-variable-badge_cloud-icon_wYm0i {
  filter: var(--filter-icon-gray);
}

.cloud-variable-badge_servers___7n2 {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.cloud-variable-badge_server_RaPJG {
  border: 1px solid var(--ui-black-transparent);
  padding: 0.25rem 0.5rem;
  margin: 0;
  background: none;
  border-radius: 1rem;
}

.cloud-variable-badge_server_RaPJG.cloud-variable-badge_selected_ubk0_ {
  background-color: var(--looks-secondary);
  color: white;
}
`, "",{"version":3,"sources":["webpack://./src/components/tw-cloud-variable-badge/cloud-variable-badge.css"],"names":[],"mappings":"AAAA,+CAA+C;;AAE/C;EACE,eAAe;EACf,mBAAmB;EACnB,qCAAqC;EACrC,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,6CAA6C;EAC7C,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,wCAAwC;EACxC,YAAY;AACd","sourcesContent":["/* overridden by src/lib/themes/guiHelpers.js */\n\n.badge {\n  padding: 0.5rem;\n  margin: 5px 0 8px 0;\n  border: 1px solid var(--badge-border);\n  background-color: var(--badge-background);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: bold;\n}\n\n.cloud-icon {\n  filter: var(--filter-icon-gray);\n}\n\n.servers {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.server {\n  border: 1px solid var(--ui-black-transparent);\n  padding: 0.25rem 0.5rem;\n  margin: 0;\n  background: none;\n  border-radius: 1rem;\n}\n\n.server.selected {\n  background-color: var(--looks-secondary);\n  color: white;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"badge": `cloud-variable-badge_badge_ddMpe`,
	"title": `cloud-variable-badge_title_aiYWM`,
	"cloud-icon": `cloud-variable-badge_cloud-icon_wYm0i`,
	"cloudIcon": `cloud-variable-badge_cloud-icon_wYm0i`,
	"servers": `cloud-variable-badge_servers___7n2`,
	"server": `cloud-variable-badge_server_RaPJG`,
	"selected": `cloud-variable-badge_selected_ubk0_`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-description/description.css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-description/description.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* overridden by src/lib/themes/guiHelpers.js */

.description_description_ulcYA {
  max-height: 250px;
  overflow: auto;
  white-space: pre-line;
  overflow-wrap: break-word;
  line-height: 1.5em;
  padding: 0.5rem;
  margin: 5px 0 8px 0;
  border: 1px solid var(--badge-border);
  background-color: var(--badge-background);
  border-radius: 0.5rem;
}

.description_description_ulcYA a {
  font-weight: bold;
  text-decoration: none;
}

.description_header_GMj_E {
  font-weight: bold;
  font-size: 1em;
  margin: 0;
  padding: 0;
}

.description_divider_L2BGW {
  margin-top: 8px;
}

.description_project-link_J8jzs {
  margin-bottom: 2px;
}
`, "",{"version":3,"sources":["webpack://./src/components/tw-description/description.css"],"names":[],"mappings":"AAAA,+CAA+C;;AAE/C;EACE,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,qCAAqC;EACrC,yCAAyC;EACzC,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["/* overridden by src/lib/themes/guiHelpers.js */\n\n.description {\n  max-height: 250px;\n  overflow: auto;\n  white-space: pre-line;\n  overflow-wrap: break-word;\n  line-height: 1.5em;\n  padding: 0.5rem;\n  margin: 5px 0 8px 0;\n  border: 1px solid var(--badge-border);\n  background-color: var(--badge-background);\n  border-radius: 0.5rem;\n}\n\n.description a {\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.header {\n  font-weight: bold;\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n}\n\n.divider {\n  margin-top: 8px;\n}\n\n.project-link {\n  margin-bottom: 2px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"description": `description_description_ulcYA`,
	"header": `description_header_GMj_E`,
	"divider": `description_divider_L2BGW`,
	"project-link": `description_project-link_J8jzs`,
	"projectLink": `description_project-link_J8jzs`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-featured-projects/featured-projects.css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-featured-projects/featured-projects.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* overridden by src/lib/themes/guiHelpers.js */

.featured-projects_container_XT1_A {
  margin-bottom: 8px;
}

.featured-projects_opener-container_e_WDe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  opacity: 0.8;
}

.featured-projects_opener-container_e_WDe:hover {
  opacity: 1;
}

.featured-projects_opener-content_X9NR3 {
  background-color: var(--ui-modal-background);
  padding: 4px;
  border: 1px solid var(--ui-black-transparent);
  box-shadow: 0 0 8px 0 var(--shadow);
}

.featured-projects_projects_QVH4S {
  position: relative;
  height: 155px;
}

.featured-projects_projects_QVH4S.featured-projects_transition_kEliT {
  transition: 0.2s height;
}

.featured-projects_projects_QVH4S.featured-projects_opened_yT3Bh {
  height: 310px;
}

.featured-projects_footer_d62hE {
}
`, "",{"version":3,"sources":["webpack://./src/components/tw-featured-projects/featured-projects.css"],"names":[],"mappings":"AAAA,+CAA+C;;AAE/C;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,yBAAyB;KACtB,sBAAsB;MACrB,qBAAqB;UACjB,iBAAiB;EACzB,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,4CAA4C;EAC5C,YAAY;EACZ,6CAA6C;EAC7C,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;AACA","sourcesContent":["/* overridden by src/lib/themes/guiHelpers.js */\n\n.container {\n  margin-bottom: 8px;\n}\n\n.opener-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  opacity: 0.8;\n}\n\n.opener-container:hover {\n  opacity: 1;\n}\n\n.opener-content {\n  background-color: var(--ui-modal-background);\n  padding: 4px;\n  border: 1px solid var(--ui-black-transparent);\n  box-shadow: 0 0 8px 0 var(--shadow);\n}\n\n.projects {\n  position: relative;\n  height: 155px;\n}\n\n.projects.transition {\n  transition: 0.2s height;\n}\n\n.projects.opened {\n  height: 310px;\n}\n\n.footer {\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `featured-projects_container_XT1_A`,
	"opener-container": `featured-projects_opener-container_e_WDe`,
	"openerContainer": `featured-projects_opener-container_e_WDe`,
	"opener-content": `featured-projects_opener-content_X9NR3`,
	"openerContent": `featured-projects_opener-content_X9NR3`,
	"projects": `featured-projects_projects_QVH4S`,
	"transition": `featured-projects_transition_kEliT`,
	"opened": `featured-projects_opened_yT3Bh`,
	"footer": `featured-projects_footer_d62hE`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-invalid-embed/invalid-embed.css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-invalid-embed/invalid-embed.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* don't use colors.css and friends as the theme system is not set up when this is used */

.invalid-embed_container__D38u {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  /* this is an error, so we want it to stand out and always be readable regardless of what the site */
  /* embedding us looks like */
  background-color: #0099ff;
  color: white;

  box-sizing: border-box;
  padding: 8px;

  display: flex;
  flex-direction: column;
  gap: 12px;
}

.invalid-embed_unhappy_er4JA {
  font-size: 128px;
  font-weight: light;
  padding-bottom: 5px;
}

.invalid-embed_code_uWpWU {
  font-family: monospace;
}

.invalid-embed_emphasis_YbMO6 {
  text-decoration: underline;
  font-weight: bold;
}
`, "",{"version":3,"sources":["webpack://./src/components/tw-invalid-embed/invalid-embed.css"],"names":[],"mappings":"AAAA,yFAAyF;;AAEzF;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,cAAc;;EAEd,oGAAoG;EACpG,4BAA4B;EAC5B,yBAAyB;EACzB,YAAY;;EAEZ,sBAAsB;EACtB,YAAY;;EAEZ,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB","sourcesContent":["/* don't use colors.css and friends as the theme system is not set up when this is used */\n\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n\n  /* this is an error, so we want it to stand out and always be readable regardless of what the site */\n  /* embedding us looks like */\n  background-color: #0099ff;\n  color: white;\n\n  box-sizing: border-box;\n  padding: 8px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.unhappy {\n  font-size: 128px;\n  font-weight: light;\n  padding-bottom: 5px;\n}\n\n.code {\n  font-family: monospace;\n}\n\n.emphasis {\n  text-decoration: underline;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `invalid-embed_container__D38u`,
	"unhappy": `invalid-embed_unhappy_er4JA`,
	"code": `invalid-embed_code_uWpWU`,
	"emphasis": `invalid-embed_emphasis_YbMO6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-project-input/project-input.css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-project-input/project-input.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* overridden by src/lib/themes/guiHelpers.js */

/*
    Contains constants for the z-index values of elements that are part of the global stack context.
    In other words, z-index values that are "inside" a component are not added here.
    This prevents conflicts between identical z-index values in different components.
*/

/* Toolbox z-index: 40; set in scratch-blocks */

/* tooltips should go over add buttons if they overlap */

/* monitors go over add buttons */

/* "ask" block text input goes above monitors */

/* behind menu-bar */

/* Block drag z-index: 1000; default 50 is overriden in blocks.css */

/* so it is draggable into other panes */

/* behind modals */

/* behind modals */

/* in most interfaces, the context menu is always on top */

.project-input_input_rRm8p {
  border-width: 2px;
  border-style: solid;
  border-radius: 2px;
  width: 100%;
  font-size: 23px;
  line-height: 32px;
  opacity: 0.5;
  background-color: transparent;
  color: inherit;
}

.project-input_input_rRm8p:focus {
  opacity: 1;
}

.project-input_input_rRm8p:disabled {
  opacity: 0.8;
}

.project-input_tooltip_rvZQD {
  opacity: 1 !important;
  background-color: var(--extensions-primary) !important;
  border: 1px solid var(--ui-black-transparent) !important;
  box-shadow: 0 0 0.5rem var(--shadow) !important;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  z-index: 491 !important;
}

.project-input_tooltip_rvZQD:after {
  border-top-color: var(--extensions-primary) !important;
}
`, "",{"version":3,"sources":["webpack://./src/components/tw-project-input/project-input.css"],"names":[],"mappings":"AAAA,+CAA+C;;AAE/C;;;;CAIC;;AAED,+CAA+C;;AAE/C,wDAAwD;;AAExD,iCAAiC;;AAEjC,+CAA+C;;AAE/C,oBAAoB;;AAEpB,oEAAoE;;AAEpE,wCAAwC;;AAExC,kBAAkB;;AAElB,kBAAkB;;AAElB,0DAA0D;;AAE1D;EACE,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,sDAAsD;EACtD,wDAAwD;EACxD,+CAA+C;EAC/C,sEAAsE;EACtE,uBAAuB;AACzB;;AAEA;EACE,sDAAsD;AACxD","sourcesContent":["/* overridden by src/lib/themes/guiHelpers.js */\n\n/*\n    Contains constants for the z-index values of elements that are part of the global stack context.\n    In other words, z-index values that are \"inside\" a component are not added here.\n    This prevents conflicts between identical z-index values in different components.\n*/\n\n/* Toolbox z-index: 40; set in scratch-blocks */\n\n/* tooltips should go over add buttons if they overlap */\n\n/* monitors go over add buttons */\n\n/* \"ask\" block text input goes above monitors */\n\n/* behind menu-bar */\n\n/* Block drag z-index: 1000; default 50 is overriden in blocks.css */\n\n/* so it is draggable into other panes */\n\n/* behind modals */\n\n/* behind modals */\n\n/* in most interfaces, the context menu is always on top */\n\n.input {\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 23px;\n  line-height: 32px;\n  opacity: 0.5;\n  background-color: transparent;\n  color: inherit;\n}\n\n.input:focus {\n  opacity: 1;\n}\n\n.input:disabled {\n  opacity: 0.8;\n}\n\n.tooltip {\n  opacity: 1 !important;\n  background-color: var(--extensions-primary) !important;\n  border: 1px solid var(--ui-black-transparent) !important;\n  box-shadow: 0 0 0.5rem var(--shadow) !important;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;\n  z-index: 491 !important;\n}\n\n.tooltip:after {\n  border-top-color: var(--extensions-primary) !important;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"input": `project-input_input_rRm8p`,
	"tooltip": `project-input_tooltip_rvZQD`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-studioview/studioview.css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-studioview/studioview.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
Imported from:
https://github.com/forkphorus/forkphorus/tree/master/studioview
With changes to make it work properly in the scratch-gui environment.
*/

/* we wrap it in a <div> */

.studioview_wrapper_XE2Bf {
  height: 100%;
}

/* fix some styles that can be messed up by scratch-gui */

.studioview_studioview-root_u0yPZ * {
  box-sizing: content-box !important;
}

.studioview_studioview-root_u0yPZ {
  height: 100%;
}

.studioview_studioview-list_YEy0z {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-anchor: none;
}

.studioview_studioview-project_kTC07,
.studioview_studioview-placeholder_UxIpK {
  display: inline-block;
  width: 144px;
  padding: 3px;
  margin-bottom: 1px;
  margin-right: 1px;
}

.studioview_studioview-root_u0yPZ .studioview_studioview-project_kTC07 {
  color: inherit;
  position: relative;
  text-decoration: none;
}

.studioview_studioview-loaded_bOBAN:hover::before,
.studioview_studioview-loaded_bOBAN:active::before {
  content: '';
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  opacity: 0.1;
}

.studioview_studioview-root_u0yPZ .studioview_studioview-loaded_bOBAN:active::before {
  opacity: 0.2;
}

.studioview_studioview-root_u0yPZ .studioview_studioview-title_Oy5EY,
.studioview_studioview-root_u0yPZ .studioview_studioview-author_Ocyf8 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
}

.studioview_studioview-title_Oy5EY {
  font-size: 0.8em;
  font-weight: bold;
}

.studioview_studioview-author_Ocyf8 {
  font-size: 0.75em;
}

.studioview_studioview-error_vEGyW {
  width: 100%;
}

.studioview_studioview-thumbnail_NMwWq,
.studioview_studioview-placeholder-thumbnail_KqY1g {
  position: relative;
  width: 144px;
  height: 108px;
}

.studioview_studioview-thumbnail_NMwWq::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  opacity: 0.1;
}

.studioview_studioview-thumbnail_NMwWq img {
  width: 100%;
  height: 100%;
}

.studioview_studioview-placeholder_UxIpK .studioview_studioview-thumbnail_NMwWq,
.studioview_studioview-placeholder_UxIpK .studioview_studioview-title_Oy5EY,
.studioview_studioview-placeholder_UxIpK .studioview_studioview-author_Ocyf8 {
  background-color: currentColor;
  opacity: 0.1;
}

.studioview_studioview-title_Oy5EY {
  height: 20px;
  margin-top: 2px;
}

.studioview_studioview-author_Ocyf8 {
  height: 18px;
}

.studioview_studioview-placeholder_UxIpK .studioview_studioview-title_Oy5EY {
  border-radius: 2px 2px 2px 0;
  width: 100%;
}

.studioview_studioview-placeholder_UxIpK .studioview_studioview-author_Ocyf8 {
  border-radius: 0 0 2px 2px;
  width: 50%;
}
`, "",{"version":3,"sources":["webpack://./src/components/tw-studioview/studioview.css"],"names":[],"mappings":"AAAA;;;;CAIC;;AAED,0BAA0B;;AAE1B;EACE,YAAY;AACd;;AAEA,yDAAyD;;AAEzD;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;EAEE,qBAAqB;EACrB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;EAEE,WAAW;EACX,oBAAoB;EACpB,yBAAyB;KACtB,sBAAsB;MACrB,qBAAqB;UACjB,iBAAiB;EACzB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;;EAGE,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4BAA4B;EAC5B,WAAW;AACb;;AAEA;EACE,0BAA0B;EAC1B,UAAU;AACZ","sourcesContent":["/*\nImported from:\nhttps://github.com/forkphorus/forkphorus/tree/master/studioview\nWith changes to make it work properly in the scratch-gui environment.\n*/\n\n/* we wrap it in a <div> */\n\n.wrapper {\n  height: 100%;\n}\n\n/* fix some styles that can be messed up by scratch-gui */\n\n.studioview-root * {\n  box-sizing: content-box !important;\n}\n\n.studioview-root {\n  height: 100%;\n}\n\n.studioview-list {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-anchor: none;\n}\n\n.studioview-project,\n.studioview-placeholder {\n  display: inline-block;\n  width: 144px;\n  padding: 3px;\n  margin-bottom: 1px;\n  margin-right: 1px;\n}\n\n.studioview-root .studioview-project {\n  color: inherit;\n  position: relative;\n  text-decoration: none;\n}\n\n.studioview-loaded:hover::before,\n.studioview-loaded:active::before {\n  content: '';\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview-root .studioview-loaded:active::before {\n  opacity: 0.2;\n}\n\n.studioview-root .studioview-title,\n.studioview-root .studioview-author {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: inherit;\n  text-decoration: none;\n}\n\n.studioview-title {\n  font-size: 0.8em;\n  font-weight: bold;\n}\n\n.studioview-author {\n  font-size: 0.75em;\n}\n\n.studioview-error {\n  width: 100%;\n}\n\n.studioview-thumbnail,\n.studioview-placeholder-thumbnail {\n  position: relative;\n  width: 144px;\n  height: 108px;\n}\n\n.studioview-thumbnail::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview-thumbnail img {\n  width: 100%;\n  height: 100%;\n}\n\n.studioview-placeholder .studioview-thumbnail,\n.studioview-placeholder .studioview-title,\n.studioview-placeholder .studioview-author {\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview-title {\n  height: 20px;\n  margin-top: 2px;\n}\n\n.studioview-author {\n  height: 18px;\n}\n\n.studioview-placeholder .studioview-title {\n  border-radius: 2px 2px 2px 0;\n  width: 100%;\n}\n\n.studioview-placeholder .studioview-author {\n  border-radius: 0 0 2px 2px;\n  width: 50%;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": `studioview_wrapper_XE2Bf`,
	"studioview-root": `studioview_studioview-root_u0yPZ`,
	"studioviewRoot": `studioview_studioview-root_u0yPZ`,
	"studioview-list": `studioview_studioview-list_YEy0z`,
	"studioviewList": `studioview_studioview-list_YEy0z`,
	"studioview-project": `studioview_studioview-project_kTC07`,
	"studioviewProject": `studioview_studioview-project_kTC07`,
	"studioview-placeholder": `studioview_studioview-placeholder_UxIpK`,
	"studioviewPlaceholder": `studioview_studioview-placeholder_UxIpK`,
	"studioview-loaded": `studioview_studioview-loaded_bOBAN`,
	"studioviewLoaded": `studioview_studioview-loaded_bOBAN`,
	"studioview-title": `studioview_studioview-title_Oy5EY`,
	"studioviewTitle": `studioview_studioview-title_Oy5EY`,
	"studioview-author": `studioview_studioview-author_Ocyf8`,
	"studioviewAuthor": `studioview_studioview-author_Ocyf8`,
	"studioview-error": `studioview_studioview-error_vEGyW`,
	"studioviewError": `studioview_studioview-error_vEGyW`,
	"studioview-thumbnail": `studioview_studioview-thumbnail_NMwWq`,
	"studioviewThumbnail": `studioview_studioview-thumbnail_NMwWq`,
	"studioview-placeholder-thumbnail": `studioview_studioview-placeholder-thumbnail_KqY1g`,
	"studioviewPlaceholderThumbnail": `studioview_studioview-placeholder-thumbnail_KqY1g`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/playground/interface.css"
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/playground/interface.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* overridden by src/lib/themes/guiHelpers.js */

/* Base styles used by Scratch https://github.com/LLK/scratch-www/blob/develop/src/main.scss */

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
  border: 0;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: bold;
  line-height: 1.7em;
}

h1 {
  font-weight: 2.5rem;
}

h2 {
  font-weight: 2rem;
}

h3 {
  font-size: 1.4rem;
}

h4 {
  font-size: 1rem;
}

a {
  color: var(--link-color);
  cursor: pointer;
  text-decoration: underline;
}

.interface_container_uYA1D {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--page-background);
}

.interface_editor_lI2gX {
  height: 100%;
}

.interface_editor_lI2gX .interface_center_rSxMk {
  height: 100%;
}

.interface_player-only__MGmB .interface_center_rSxMk {
  margin: auto;
}

.interface_menu_lqZkn {
  margin-bottom: 8px;
}

.interface_section_sBMjS {
  margin: 8px 0 8px 0;
}

.interface_footer_dLhK2 {
  padding: 10px 0;
  margin-top: 10px;
  border-top: 2px solid var(--ui-black-transparent);
}

.interface_footer_dLhK2 a {
  font-weight: bold;
  text-decoration: none;
}

.interface_footer-content_KvTod {
  max-width: 600px;
  margin: auto;
}

.interface_footer-text_kFpVx {
  text-align: center;
  margin: 5px 0 10px 0;
}

.interface_footer-columns_tcZeb {
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-wrap: wrap;
}

.interface_footer-section_FdP5t {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-bottom: 10px;
}

.interface_footer-section_FdP5t > * {
  margin-bottom: 10px;
}

.interface_infobox_AbZXo {
  line-height: 1.5em;
  padding: 0.5rem;
  margin: 5px 0 8px 0;
  border-radius: 0.5rem;
  border: 1px solid #b9d6ff;
  background-color: #dbebff;
}

.interface_infobox_AbZXo p {
  margin: 4px 0;
}

.interface_infobox_AbZXo a {
  font-weight: bold;
  text-decoration: none;
}

.interface_unshared-update_wZeR8 {
  border-color: #ff52526e;
  background-color: #ff525240;
}
`, "",{"version":3,"sources":["webpack://./src/playground/interface.css"],"names":[],"mappings":"AAAA,+CAA+C;;AAE/C,8FAA8F;;AAE9F;;;;;;EAME,SAAS;EACT,UAAU;EACV,SAAS;AACX;;AAEA;;;;;EAKE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iDAAiD;AACnD;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;EACvB,2BAA2B;AAC7B","sourcesContent":["/* overridden by src/lib/themes/guiHelpers.js */\n\n/* Base styles used by Scratch https://github.com/LLK/scratch-www/blob/develop/src/main.scss */\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-weight: bold;\n  line-height: 1.7em;\n}\n\nh1 {\n  font-weight: 2.5rem;\n}\n\nh2 {\n  font-weight: 2rem;\n}\n\nh3 {\n  font-size: 1.4rem;\n}\n\nh4 {\n  font-size: 1rem;\n}\n\na {\n  color: var(--link-color);\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: var(--page-background);\n}\n\n.editor {\n  height: 100%;\n}\n\n.editor .center {\n  height: 100%;\n}\n\n.player-only .center {\n  margin: auto;\n}\n\n.menu {\n  margin-bottom: 8px;\n}\n\n.section {\n  margin: 8px 0 8px 0;\n}\n\n.footer {\n  padding: 10px 0;\n  margin-top: 10px;\n  border-top: 2px solid var(--ui-black-transparent);\n}\n\n.footer a {\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.footer-content {\n  max-width: 600px;\n  margin: auto;\n}\n\n.footer-text {\n  text-align: center;\n  margin: 5px 0 10px 0;\n}\n\n.footer-columns {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  flex-wrap: wrap;\n}\n\n.footer-section {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  margin-bottom: 10px;\n}\n\n.footer-section > * {\n  margin-bottom: 10px;\n}\n\n.infobox {\n  line-height: 1.5em;\n  padding: 0.5rem;\n  margin: 5px 0 8px 0;\n  border-radius: 0.5rem;\n  border: 1px solid #b9d6ff;\n  background-color: #dbebff;\n}\n\n.infobox p {\n  margin: 4px 0;\n}\n\n.infobox a {\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.unshared-update {\n  border-color: #ff52526e;\n  background-color: #ff525240;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `interface_container_uYA1D`,
	"editor": `interface_editor_lI2gX`,
	"center": `interface_center_rSxMk`,
	"player-only": `interface_player-only__MGmB`,
	"playerOnly": `interface_player-only__MGmB`,
	"menu": `interface_menu_lqZkn`,
	"section": `interface_section_sBMjS`,
	"footer": `interface_footer_dLhK2`,
	"footer-content": `interface_footer-content_KvTod`,
	"footerContent": `interface_footer-content_KvTod`,
	"footer-text": `interface_footer-text_kFpVx`,
	"footerText": `interface_footer-text_kFpVx`,
	"footer-columns": `interface_footer-columns_tcZeb`,
	"footerColumns": `interface_footer-columns_tcZeb`,
	"footer-section": `interface_footer-section_FdP5t`,
	"footerSection": `interface_footer-section_FdP5t`,
	"infobox": `interface_infobox_AbZXo`,
	"unshared-update": `interface_unshared-update_wZeR8`,
	"unsharedUpdate": `interface_unshared-update_wZeR8`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/.pnpm/file-loader@6.2.0_webpack@5.106.2/node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js"
/*!*****************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/file-loader@6.2.0_webpack@5.106.2/node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js ***!
  \*****************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "sw.js");

/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js"
/*!*****************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js ***!
  \*****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayMap.js"
/*!*******************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayMap.js ***!
  \*******************************************************************************/
(module) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayPush.js"
/*!********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayPush.js ***!
  \********************************************************************************/
(module) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseFlatten.js"
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseFlatten.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js"
/*!*********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsArguments.js"
/*!**************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsArguments.js ***!
  \**************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsRegExp.js"
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsRegExp.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseToString.js"
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseToString.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseUnary.js"
/*!********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseUnary.js ***!
  \********************************************************************************/
(module) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_freeGlobal.js"
/*!*********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_freeGlobal.js ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getRawTag.js"
/*!********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getRawTag.js ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isFlattenable.js"
/*!************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isFlattenable.js ***!
  \************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_nodeUtil.js"
/*!*******************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_nodeUtil.js ***!
  \*******************************************************************************/
(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_objectToString.js"
/*!*************************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_objectToString.js ***!
  \*************************************************************************************/
(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js"
/*!***************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js ***!
  \***************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/escapeRegExp.js"
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/escapeRegExp.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toString.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/flatten.js"
/*!*****************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/flatten.js ***!
  \*****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArguments.js"
/*!*********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArguments.js ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js"
/*!*****************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js ***!
  \*****************************************************************************/
(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js"
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js ***!
  \**********************************************************************************/
(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isRegExp.js"
/*!******************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isRegExp.js ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(/*! ./_baseIsRegExp */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsRegExp.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isString.js"
/*!******************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isString.js ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js"
/*!******************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ },

/***/ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toString.js"
/*!******************************************************************************!*\
  !*** ../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toString.js ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ },

/***/ "../../node_modules/.pnpm/react-string-replace@0.4.4/node_modules/react-string-replace/index.js"
/*!******************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/react-string-replace@0.4.4/node_modules/react-string-replace/index.js ***!
  \******************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable vars-on-top, no-var, prefer-template */
var isRegExp = __webpack_require__(/*! lodash/isRegExp */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isRegExp.js");
var escapeRegExp = __webpack_require__(/*! lodash/escapeRegExp */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/escapeRegExp.js");
var isString = __webpack_require__(/*! lodash/isString */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isString.js");
var flatten = __webpack_require__(/*! lodash/flatten */ "../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/flatten.js");

/**
 * Given a string, replace every substring that is matched by the `match` regex
 * with the result of calling `fn` on matched substring. The result will be an
 * array with all odd indexed elements containing the replacements. The primary
 * use case is similar to using String.prototype.replace except for React.
 *
 * React will happily render an array as children of a react element, which
 * makes this approach very useful for tasks like surrounding certain text
 * within a string with react elements.
 *
 * Example:
 * matchReplace(
 *   'Emphasize all phone numbers like 884-555-4443.',
 *   /([\d|-]+)/g,
 *   (number, i) => <strong key={i}>{number}</strong>
 * );
 * // => ['Emphasize all phone numbers like ', <strong>884-555-4443</strong>, '.'
 *
 * @param {string} str
 * @param {regexp|str} match Must contain a matching group
 * @param {function} fn
 * @return {array}
 */
function replaceString(str, match, fn) {
  var curCharStart = 0;
  var curCharLen = 0;

  if (str === '') {
    return str;
  } else if (!str || !isString(str)) {
    throw new TypeError('First argument to react-string-replace#replaceString must be a string');
  }

  var re = match;

  if (!isRegExp(re)) {
    re = new RegExp('(' + escapeRegExp(re) + ')', 'gi');
  }

  var result = str.split(re);

  // Apply fn to all odd elements
  for (var i = 1, length = result.length; i < length; i += 2) {
    curCharLen = result[i].length;
    curCharStart += result[i - 1].length;
    result[i] = fn(result[i], i, curCharStart);
    curCharStart += curCharLen;
  }

  return result;
}

module.exports = function reactStringReplace(source, match, fn) {
  if (!Array.isArray(source)) source = [source];

  return flatten(source.map(function(x) {
    return isString(x) ? replaceString(x, match, fn) : x;
  }));
};


/***/ },

/***/ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.css"
/*!*************************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/cloud-variable-badge.css ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./cloud-variable-badge.css */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-cloud-variable-badge/cloud-variable-badge.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/tw-description/description.css"
/*!*******************************************************!*\
  !*** ./src/components/tw-description/description.css ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_description_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./description.css */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-description/description.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_description_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_description_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_description_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_description_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/tw-featured-projects/featured-projects.css"
/*!*******************************************************************!*\
  !*** ./src/components/tw-featured-projects/featured-projects.css ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_featured_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./featured-projects.css */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-featured-projects/featured-projects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_featured_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/tw-invalid-embed/invalid-embed.css"
/*!***********************************************************!*\
  !*** ./src/components/tw-invalid-embed/invalid-embed.css ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_invalid_embed_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./invalid-embed.css */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-invalid-embed/invalid-embed.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_invalid_embed_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_invalid_embed_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_invalid_embed_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_invalid_embed_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/tw-project-input/project-input.css"
/*!***********************************************************!*\
  !*** ./src/components/tw-project-input/project-input.css ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_project_input_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./project-input.css */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-project-input/project-input.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_project_input_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_project_input_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_project_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_project_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/tw-studioview/studioview.css"
/*!*****************************************************!*\
  !*** ./src/components/tw-studioview/studioview.css ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_studioview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./studioview.css */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/components/tw-studioview/studioview.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_studioview_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_studioview_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_studioview_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_studioview_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/playground/interface.css"
/*!**************************************!*\
  !*** ./src/playground/interface.css ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_interface_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./interface.css */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/playground/interface.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_interface_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_interface_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_interface_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_interface_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/tw-cloud-variable-badge/clouddata.svg"
/*!**************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/clouddata.svg ***!
  \**************************************************************/
(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMCAwIDQwIDQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5FeHRlbnNpb25zL1NvZnR3YXJlL0Nsb3VkLURhdGEtQmxvY2s8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJFeHRlbnNpb25zL1NvZnR3YXJlL0Nsb3VkLURhdGEtQmxvY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1vcGFjaXR5PSIwLjE1Ij4NCiAgICAgICAgPHBhdGggZD0iTTguNzkzMTg2MTYsMjguMTE1MTYzOCBMMzEuNjg3Njk4OSwyOC4xMTUxNjM4IEMzMy43ODcyNjI4LDI4LjExNTE2MzggMzUuNSwyNi4zNjc4MTIgMzUuNSwyNC4yMDU3NjcgQzM1LjUsMjIuMDQ1NzY1NiAzMy43ODYxMjA1LDIwLjI5NjM3MDIgMzEuNjg3Njk4OSwyMC4yOTYzNzAyIEMzMS4wOTQ5MTUxLDIwLjI5NjM3MDIgMzAuNTI4OTI3NSwyMC40MzQ0Njg1IDMwLjAwOTU3NTMsMjAuNjk4NTQwNSBMMjkuMTQ5MDI4LDIxLjEzNjA5OCBMMjkuMjg4MTc2NiwyMC4xODA3NzgzIEMyOS4yOTQ2MDc1LDIwLjEzNjYyNzIgMjkuMjk4ODQxLDIwLjA5MDUxMzQgMjkuMzAxMzkwMSwyMC4wMzgzODI3IEMyOS4zMDQyNzksMTkuOTc5MzA0NCAyOS4zMDQ4ODUyLDE5LjkyOTA5MzEgMjkuMzA0ODg1MiwxOS44MDc1ODE5IEMyOS4zMDQ4ODUyLDE1LjIxNDI1NjMgMjUuNjczMzMwMSwxMS41IDIxLjE5MTI0NzcsMTEuNSBDMTguNzMzNjgxMSwxMS41IDE2LjQ1NDAxODYsMTIuNjI3NjEzIDE0LjkxOTE5OCwxNC41Mzg4MzY0IEwxNC42Mzk1NDc3LDE0Ljg4NzA2ODggTDE0LjI2MjA4NDMsMTQuNjQ4MzQgQzEzLjc1NzcwNDYsMTQuMzI5MzQyMyAxMy4xODQ2NDY5LDE0LjE2MTk3NTEgMTIuNTc3NjEwMywxNC4xNjE5NzUxIEMxMC43Njk2MTk2LDE0LjE2MTk3NTEgOS4yOTMxODYxNiwxNS42NzIwODMyIDkuMjkzMTg2MTYsMTcuNTMzMjEwOSBDOS4yOTMxODYxNiwxNy45Mjg3NDY3IDkuMzU0NjU2MjcsMTguMjkxMTAyNyA5LjQ3OTM2ODYxLDE4LjYyNTM0MDMgTDkuNzg5NzgwOTEsMTkuNDU3MjY2NCBMOC45MTc0NzM4OCwxOS4yOTEzMjI2IEM4LjkxMjk3MzQxLDE5LjI5MDQ2NjUgOC44OTg3NTIwNSwxOS4yODkxMTYgOC44NzcwODgxNCwxOS4yODgyOTQ0IEM4Ljg1NjI3Mzg4LDE5LjI4NzUwNSA4LjgzOTkzNDc1LDE5LjI4NzM0NyA4Ljc5MzE4NjE2LDE5LjI4NzMxODMgQzYuNDI1NjQ5MzEsMTkuMjg3MzE4MyA0LjUsMjEuMjYzODgzMiA0LjUsMjMuNzAyODQyNyBDNC41LDI2LjE0NzIzNiA2LjQyMTU1NjY1LDI4LjExNTE2MzggOC43OTMxODYxNiwyOC4xMTUxNjM4IFoiIGlkPSJGaWxsLTEiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iIzRENEQ0RCIvPg0KICAgIDwvZz4NCjwvc3ZnPg=="

/***/ }

}]);
//# sourceMappingURL=src_playground_render-interface_jsx.js.map