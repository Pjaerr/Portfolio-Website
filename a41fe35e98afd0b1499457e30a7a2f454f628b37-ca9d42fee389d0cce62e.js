(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2rMq":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("sc67"),n("AqHK"),n("pJf4"),n("LagC"),n("pS08");var o=n("q1tI"),i=r(o),a=r(n("2rMq")),u=r(n("Gytx"));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s=[],f=void 0;function d(){f=e(s.map((function(e){return e.props}))),p.canUseDOM?t(f):n&&(f=n(f))}var p=function(e){function t(){return c(this,t),l(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return f},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=f;return f=void 0,s=[],e},t.prototype.shouldComponentUpdate=function(e){return!u(e,this.props)},t.prototype.componentWillMount=function(){s.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),d()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(o.Component);return p.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",p.canUseDOM=a.canUseDOM,p}}},C8Qj:function(e,t,n){"use strict";n("t+fG")("small",(function(e){return function(){return e(this,"small","","")}}))},N8DM:function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0;var o=r(n("QL1J"));t.ThemeToggler=o.default},QL1J:function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0,t.default=void 0;var o=r(n("v06X")),i=r(n("XEEL")),a=r(n("0jh0")),u=r(n("q1tI")),c=r(n("17x9")),l=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,(0,a.default)((0,o.default)(t),"state",{theme:null}),t}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return u.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(u.default.Component);l.propTypes={children:c.default.func.isRequired};var s=l;t.default=s},TJpk:function(e,t,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),a=f(n("17x9")),u=f(n("8+s/")),c=f(n("bmMU")),l=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,T,E,g=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),A=(m=g,E=T=function(e){function t(){return p(this,t),h(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=d(o,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=d(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(m,o)},o(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),T.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=m.peek,T.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},bKpH:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return f}));var r=n("q1tI"),o=n.n(r),i=n("vOnD").c.svg.withConfig({displayName:"SVGIcon__SVG",componentId:"sc-1rlxxk7-0"})(["fill:var(--colour-text-body);&:hover{","}"],(function(e){return e.isHoverable&&"fill: var(----colour-highlight)"})),a=function(e){var t=e.path,n=e.width,r=e.height,a=e.viewBoxX,u=void 0===a?"0":a,c=e.viewBoxY,l=void 0===c?"0":c,s=e.viewBoxWidth,f=void 0===s?"24":s,d=e.viewBoxHeight,p=void 0===d?"24":d,h=e.color,m=e.isHoverable,T=void 0!==m&&m;return o.a.createElement(i,{isHoverable:T,xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:n,height:r,viewBox:u+" "+l+" "+f+" "+p},o.a.createElement("path",{d:t,fill:h}))},u=function(e){var t=e.size;return o.a.createElement(a,{isHoverable:!0,width:t,height:t,path:"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"})},c=function(e){var t=e.size;return o.a.createElement(a,{isHoverable:!0,width:t,height:t,path:"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"})},l=function(e){var t=e.size;return o.a.createElement(a,{isHoverable:!0,width:t,height:t,path:"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z"})},s=function(e){var t=e.theme;return o.a.createElement(a,{width:"36",height:"38",color:"light"===t?"#F1CB66":"#fff",path:"light"===t?"M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z":"M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z"})},f=function(e){var t=e.size;return o.a.createElement(a,{width:t,height:t,path:"M8.95 13.4H6.58A5.5 5.5 0 0 1 6.58 10.6H8.95A11.56 11.56 0 0 0 8.85 12A11.56 11.56 0 0 0 8.95 13.4M7.16 9.2H9.2A12.06 12.06 0 0 1 10.18 6.71A5.55 5.55 0 0 0 7.16 9.2M16.84 9.2A5.59 5.59 0 0 0 13.81 6.71A10.95 10.95 0 0 1 14.78 9.2M12 17.57A9.5 9.5 0 0 0 13.34 14.8H10.66A9.5 9.5 0 0 0 12 17.57M12 6.42A9.53 9.53 0 0 0 10.66 9.2H13.34A9.53 9.53 0 0 0 12 6.42M7.16 14.8A5.61 5.61 0 0 0 10.18 17.29A12.06 12.06 0 0 1 9.2 14.8M21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5M19 12A7 7 0 1 0 12 19A7 7 0 0 0 19 12M15.15 12A11.56 11.56 0 0 1 15.05 13.4H17.42A5.5 5.5 0 0 0 17.42 10.6H15.05A11.56 11.56 0 0 1 15.15 12M13.81 17.29A5.62 5.62 0 0 0 16.84 14.8H14.78A10.95 10.95 0 0 1 13.81 17.29M10.36 10.6A8.81 8.81 0 0 0 10.36 13.4H13.64A10.3 10.3 0 0 0 13.75 12A10.21 10.21 0 0 0 13.64 10.6Z"})}},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,l,s=r(t),f=r(n);if(s&&f){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(s!=f)return!1;var d=t instanceof Date,p=n instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==n.getTime();var h=t instanceof RegExp,m=n instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==n.toString();var T=o(t);if((c=T.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!i.call(n,T[u]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(l=T[u])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"t+fG":function(e,t,n){var r=n("P8UN"),o=n("96qb"),i=n("ap2Z"),a=/"/g,u=function(e,t,n,r){var o=String(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},upxI:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Josh Jackson - @Pjaerr","description":"Personal Site and Blog for Josh Jackson - @Pjaerr","author":"@Pjaerr","siteUrl":"https://joshuaj.co.uk"}}}}')},v1p5:function(e,t,n){(function(e){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),a=c(n("MgzW")),u=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=T(e,u.TAG_NAMES.TITLE),n=T(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=T(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return T(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},h=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},m=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var l=i[c],s=(0,a.default)({},o[l],r[l]);o[l]=s}return e}),[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},E=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){E(e)}),0)}),g=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:e.requestAnimationFrame||E,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},y=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;_(u.TAG_NAMES.BODY,r),_(u.TAG_NAMES.HTML,o),M(d,p);var h={baseTag:C(u.TAG_NAMES.BASE,n),linkTags:C(u.TAG_NAMES.LINK,i),metaTags:C(u.TAG_NAMES.META,a),noscriptTags:C(u.TAG_NAMES.NOSCRIPT,c),scriptTags:C(u.TAG_NAMES.SCRIPT,s),styleTags:C(u.TAG_NAMES.STYLE,f)},m={},T={};Object.keys(h).forEach((function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(T[e]=h[e].oldTags)})),t&&t(),l(e,m,T)},w=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),_(u.TAG_NAMES.TITLE,t)},_=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var f=i.indexOf(l);-1!==f&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},R=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=P(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=O(n),i=w(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){y&&v(y),e.defer?y=A((function(){S(e,(function(){y=null}))})):(S(e),y=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:R(u.TAG_NAMES.BASE,t,r),bodyAttributes:R(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:R(u.ATTRIBUTE_NAMES.HTML,o,r),link:R(u.TAG_NAMES.LINK,i,r),meta:R(u.TAG_NAMES.META,a,r),noscript:R(u.TAG_NAMES.NOSCRIPT,c,r),script:R(u.TAG_NAMES.SCRIPT,l,r),style:R(u.TAG_NAMES.STYLE,s,r),title:R(u.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:h([u.TAG_PROPERTIES.HREF],e),bodyAttributes:p(u.ATTRIBUTE_NAMES.BODY,e),defer:T(e,u.HELMET_PROPS.DEFER),encode:T(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(u.ATTRIBUTE_NAMES.HTML,e),linkTags:m(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:m(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:m(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=b}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("upxI"),o=n("q1tI"),i=n.n(o),a=n("TJpk"),u=n.n(a);function c(e){var t=e.description,n=e.lang,o=e.meta,a=e.title,c=e.image,l=r.data.site,s=t||l.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:a||l.siteMetadata.title,titleTemplate:a?a+" | "+l.siteMetadata.title:""+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:a},{property:"og:description",content:s},{property:"og:type",content:"website"},{property:"og:image",content:l.siteMetadata.siteUrl+c},{name:"twitter:image",content:l.siteMetadata.siteUrl+c},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:s}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},yBb5:function(e,t,n){"use strict";n.d(t,"b",(function(){return A})),n.d(t,"a",(function(){return v}));var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("X7BR"),u=n("N8DM"),c=(n("C8Qj"),i.c.nav.withConfig({displayName:"NavigationStyles__Nav",componentId:"nyoyvp-0"})(["transform:",";transition-property:background-color,color;transition-duration:",";transition-timing-function:ease-out;background-color:",";position:absolute;top:0;left:0;bottom:0;right:0;z-index:10;padding:0;display:grid;grid-template-rows:auto 1fr;grid-row-gap:20px;@media (min-width:","){transform:translateX(0px);transition:background-color 0s ease-out;background-color:initial;position:relative;grid-template-rows:1fr;grid-template-columns:1fr 1fr;padding:20px "," 20px ",";}"],(function(e){return e.isMenuOpen?"translateY(0px)":"translateY(-2000px);"}),a.a,(function(e){return e.isMenuOpen?"var(--colour-mobile-menu-background)":"initial"}),a.e.medium,a.g,a.g)),l=i.c.div.withConfig({displayName:"NavigationStyles__NavHeader",componentId:"nyoyvp-1"})(["display:grid;grid-template-columns:1fr auto;justify-content:center;align-items:center;transform:",";transition:transform 0s ease-in;padding:20px "," 20px ",";a{justify-self:start;font-size:",";text-decoration:underline;font-weight:bold;color:",";font-weight:bold;&:hover{color:",";}}button{justify-self:end;background:none;outline:none;border:none;width:48px;height:48px;position:relative;cursor:pointer;svg{width:32px;height:32px;fill:",";}}@media (min-width:","){transform:translateX(0px);grid-template-columns:1fr;grid-template-rows:auto;justify-content:start;padding:0;button{display:none;}a{color:var(--colour-text-heading);&:hover{color:var(--colour-highlight);}}}"],(function(e){return e.isMenuOpen?"translateY(0px)":"translateY(2000px);"}),a.g,a.g,a.f.small,(function(e){return e.isMenuOpen?"var(--colour-mobile-menu-text)":"var(--colour-text-heading)"}),(function(e){return e.isMenuOpen?"var(--colour-mobile-menu-text-hover)":"var(----colour-highlight)"}),(function(e){return e.isMenuOpen?"var(--colour-mobile-menu-text)":"var(--colour-text-heading)"}),a.e.medium),s=i.c.div.withConfig({displayName:"NavigationStyles__NavLinks",componentId:"nyoyvp-2"})(["display:",";grid-template-rows:3fr 1fr;grid-row-gap:25px;ul{display:grid;grid-template-rows:auto auto auto;grid-row-gap:25px;justify-content:center;align-items:center;list-style:none;margin:0;padding:0;li{margin:0 auto;a{font-size:",";color:var(--colour-mobile-menu-text);font-weight:bold;&:hover{color:var(--colour-mobile-menu-text-hover);}svg{fill:var(--colour-mobile-menu-text);&:hover{fill:var(--colour-mobile-menu-text-hover);}}}}}@media (min-width:","){display:grid;grid-template-columns:auto auto;grid-template-rows:auto;grid-column-gap:50px;justify-content:end;align-items:center;ul{grid-template-columns:1fr 1fr 1fr;grid-column-gap:25px;grid-row-gap:0;justify-content:center;align-items:center;li{a{font-size:",";color:var(--colour-text-heading);font-weight:bold;&:hover{color:var(--colour-highlight);}svg{fill:var(--colour-text-heading);width:32px;height:32px;&:hover{fill:var(--colour-highlight);}}}}}}"],(function(e){return e.isMenuOpen?"grid":"none"}),a.f.large,a.e.medium,a.f.small),f=i.c.label.withConfig({displayName:"NavigationStyles__ThemeSwitcherLabel",componentId:"nyoyvp-3"})(["align-self:center;justify-self:center;&:hover{cursor:pointer;}input{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}@media (min-width:","){margin-bottom:5px;}"],a.e.medium),d=i.c.span.withConfig({displayName:"NavigationStyles__MenuIcon",componentId:"nyoyvp-4"})(["&:before{background-color:",';transition:transform 0.2s ease-in;content:"";width:26px;height:5px;margin-top:',";display:inline-block;","}&:after{background-color:",';transition:transform 0.25s ease-in;content:"";width:26px;height:5px;margin-top:',";display:inline-block;","}"],(function(e){return e.isMenuOpen?"var(--colour-mobile-menu-text)":"var(--colour-text-heading)"}),(function(e){return e.isMenuOpen?"0":"-2.5px"}),(function(e){return e.isMenuOpen&&"transform: translate(0px,5px) rotate(45deg)"}),(function(e){return e.isMenuOpen?"var(--colour-mobile-menu-text)":"var(--colour-text-heading)"}),(function(e){return e.isMenuOpen?"0":"-2.5px"}),(function(e){return e.isMenuOpen&&"transform: translate(0px, -10px) rotate(-45deg)"})),p=n("bKpH"),h=function(){var e,t,n,i=Object(r.useState)(!1),a=i[0],h=i[1];return o.a.createElement(c,{isMenuOpen:a},o.a.createElement(l,{isMenuOpen:a},o.a.createElement("a",{href:"/"},"Josh Jackson"),o.a.createElement("button",{onClick:function(){a?[document.body,document.documentElement].forEach((function(e){return e.classList.remove("menu-open")})):[document.body,document.documentElement].forEach((function(e){return e.classList.add("menu-open")})),h(!a)},"aria-label":"toggle mobile menu"},o.a.createElement(d,{isMenuOpen:a}))),o.a.createElement(s,{isMenuOpen:a},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",((e={"aria-label":"Github Link",href:"https://github.com/pjaerr",target:"_blank",rel:"noopener noreferrer"})["aria-label"]="visit my github page",e),o.a.createElement(p.b,{size:"48"}))),o.a.createElement("li",null,o.a.createElement("a",((t={"aria-label":"LinkedIn Link",href:"https://www.linkedin.com/in/joshua-jackson-53b9bb14b/",target:"_blank",rel:"noopener noreferrer"})["aria-label"]="visit my linkedin profile",t),o.a.createElement(p.c,{size:"48"}))),o.a.createElement("li",null,o.a.createElement("a",((n={"aria-label":"Twitter Link",href:"https://twitter.com/Pjaerr",target:"_blank",rel:"noopener noreferrer"})["aria-label"]="visit my twitter profile",n),o.a.createElement(p.e,{size:"48"})))),o.a.createElement(u.ThemeToggler,null,(function(e){var t=e.theme,n=e.toggleTheme;return o.a.createElement(f,{"aria-label":"toggle light theme"},o.a.createElement("input",{type:"checkbox",onChange:function(e){n(e.target.checked?"dark":"light")},checked:"dark"===t,className:"theme-switcher-checkbox"}),o.a.createElement(p.d,{theme:t}))}))))},m=i.c.div.withConfig({displayName:"ScrollProgressBar__Container",componentId:"hiuh85-0"})(["position:fixed;top:0;z-index:1;width:100%;height:4px;div{height:4px;background:var(--colour-highlight);width:0%;}"]),T=function(){var e=Object(r.useRef)(null),t=function(){var t=document.body.top||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight;e.current&&(e.current.style.width=t/n*100+"%")};return Object(r.useEffect)((function(){return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),o.a.createElement(m,null,o.a.createElement("div",{ref:e}))};function E(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(['\n  body,\n  html {\n    margin: 0;\n    padding: 0;\n    border: 0;\n\n    font-family: "IBM Plex Sans", sans-serif;\n  }\n\n  body {\n    --colour-background: #fff;\n    --colour-text-heading: #2a2f36;\n    --colour-text-body: #353b48;\n    --colour-highlight: #0097A7;\n    --colour-mobile-menu-background: rgba(1, 163, 164, 0.99);\n    --colour-mobile-menu-text: #fff;\n    --colour-mobile-menu-text-hover: #2a2f36;\n    --colour-code-highlight: #feb;\n    --colour-code-highlight-sidebar: #f99;\n    --colour-code-title: #F5F6FA;\n\n    font-weight: 500;\n    background-color: var(--colour-background);\n    color: var(--colour-text-body);\n    transition-property: background-color, color;\n    transition-duration: ',";\n    transition-timing-function: ease-out;\n\n    font-size: ","\n  }\n\n  body.dark {\n    --colour-background: #282c35;\n    --colour-text-heading: #fff;\n    --colour-text-body: #dcdde1;\n    --colour-highlight: #01cbcb;\n    --colour-mobile-menu-background: rgba(63, 67, 77, 0.99);\n    --colour-mobile-menu-text-hover: rgba(1, 163, 164, 0.99);\n    --colour-code-highlight: #1e2f3e;\n    --colour-code-highlight-sidebar: #fbc531;\n    --colour-code-title: #576574;\n  }\n\n  html.menu-open,\n  body.menu-open {\n    height: 100%;\n    overflow: hidden;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    margin: 0;\n    color: var(--colour-text-heading);\n  }\n\n  a {\n    color: var(--colour-highlight);\n    text-decoration: none;\n    transition: color "," ease;\n\n    &:hover {\n      color: var(--colour-text-body);\n    }\n  }\n\n  main {\n    margin-left: ",";\n    margin-right: ",";\n    margin-bottom: 120px;\n  }\n\n  main.blogpost-layout {\n    @media (min-width: ",") {\n      display: flex;\n      justify-content: center;\n    }\n  }\n\n  .layout-header {\n    height: 120px;\n  }\n"]);return E=function(){return e},e}var g=Object(i.a)(E(),a.a,a.d.large,a.a,a.g,a.g,a.e.medium),A=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null),o.a.createElement("header",{className:"layout-header"},o.a.createElement(h,null)),o.a.createElement("main",null,t))},v=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null),o.a.createElement("header",{className:"layout-header"},o.a.createElement(h,null)),o.a.createElement(T,null),o.a.createElement("main",{className:"blogpost-layout"},t))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=a41fe35e98afd0b1499457e30a7a2f454f628b37-ca9d42fee389d0cce62e.js.map