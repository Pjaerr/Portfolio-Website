(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{236:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(240),c=n(227),s=(n(228),function(){var e=Object(r.useRef)(null),t=function(){var t=document.body.top||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight;e.current&&(e.current.style.width=t/n*100+"%")};return Object(r.useEffect)((function(){return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),a.a.createElement("div",{className:"scroll-progress"},a.a.createElement("div",{className:"scroll-progress-bar",ref:e}))}),u=(n(229),n(72)),i=(n(230),function(){return a.a.createElement("aside",{className:"blog-post-author"},a.a.createElement("div",{className:"blog-post-author-content"},a.a.createElement("h1",null,"If you enjoyed this post you can read my other blog posts"," ",a.a.createElement(u.Link,{to:"/blog"},"here")," or follow me on twitter"," ",a.a.createElement("a",{href:"https://twitter.com/Pjaerr",target:"_blank",rel:"noopener noreferrer"},"@Pjaerr"))))}),m=n(226),l=(n(46),n(15),n(7),n(231),function(e){var t=e.issueUri,n=e.commentsPerPage,o=e.allowRefreshingComments,c=Object(r.useState)([]),s=c[0],u=c[1],i=Object(r.useState)(!1),m=i[0],l=i[1],v=Object(r.useState)(0),y=v[0],E=v[1],w=function(){void 0!==window.fetch&&fetch("https://api.github.com/repos/"+t+"/comments",{method:"GET",headers:{Accept:"application/vnd.github.v3.html+json"}}).then((function(e){return e.json()})).then((function(e){if(e.message)console.error('The issueUri: "'+t+"\" doesn't exist");else{e=e.reverse(),n||(n=e.length);var r=[],a=[],o=0,c=e,s=Array.isArray(c),i=0;for(c=s?c:c[Symbol.iterator]();;){var m;if(s){if(i>=c.length)break;m=c[i++]}else{if((i=c.next()).done)break;m=i.value}var f=m;a.push({body:{__html:f.body_html},user:{username:f.user.login,avatarUrl:f.user.avatar_url,isRepositoryOwner:"OWNER"===f.author_association},createdAt:f.created_at}),o===n-1?(r.push(a),a=[],o=0):o++}a.length>0&&r.push(a),u(r),l(!0)}}))};return Object(r.useEffect)(w,[t]),m?a.a.createElement(a.a.Fragment,null,s.length>0&&s[y]?s[y].map((function(e){return a.a.createElement(b,{key:e.user.username+"_"+e.createdAt,body:e.body,user:e.user,createdAt:e.createdAt})})):a.a.createElement(h,null),s.length>1&&a.a.createElement(f,{activePage:y,numberOfPages:s.length,onPageChange:function(e){return E(e)}}),o&&a.a.createElement(p,{onRefresh:w}),a.a.createElement(d,{redirectUrl:"https://github.com/"+t+"#issue-comment-box"})):a.a.createElement(g,null)}),f=function(e){for(var t=e.activePage,n=e.numberOfPages,r=e.onPageChange,o=[],c=function(e){o.push(a.a.createElement("button",{key:e,className:t===e?"GithubIssueComments-pagination-button GithubIssueComments-pagination-button-active":"GithubIssueComments-pagination-button",onClick:function(){r(e)}},e+1))},s=0;s<n;s++)c(s);return a.a.createElement("div",{className:"GithubIssueComments-pagination"},o)},p=function(e){var t=e.onRefresh,n=Object(r.useState)(!1),o=n[0],c=n[1];return a.a.createElement("button",{className:"GithubIssueComments-refresh-comments-button",disabled:o,onClick:function(){c(!0),t(),setTimeout((function(){return c(!1)}),1e3)}},"Check for new comments")},b=function(e){var t=e.body,n=e.user,r=e.createdAt;return a.a.createElement("div",{className:"GithubIssueComments-comment"},a.a.createElement("a",{className:"GithubIssueComments-comment-user-avatar",href:"https://github.com/"+n.username,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:n.avatarUrl,alt:"Avatar of "+n.username})),a.a.createElement("div",{className:"GithubIssueComments-comment-box"},a.a.createElement("div",{className:n.isRepositoryOwner?"GithubIssueComments-comment-box-header GithubIssueComments-comment-box-header-isOwner":"GithubIssueComments-comment-box-header"},a.a.createElement("b",{className:"GithubIssueComments-comment-box-header-username"},n.username,a.a.createElement("span",null," commented on ",new Date(r).toLocaleDateString()))),a.a.createElement("div",{className:"GithubIssueComments-comment-box-body"},a.a.createElement("p",{dangerouslySetInnerHTML:t}))))},h=function(){return a.a.createElement("p",{className:"GithubIssueComments-no-comments-found"},"No comments found"," ",a.a.createElement("span",{role:"img","aria-label":"Smiley Face Emoji"},"🙁"))},d=function(e){var t=e.redirectUrl;return a.a.createElement("a",{className:"GithubIssueComments-new-comment-button",href:t,target:"_blank",rel:"noopener noreferrer"},"Write a Comment via Github")},g=function(){return a.a.createElement("section",{className:"GithubIssueComments-container"},a.a.createElement("div",{className:"GithubIssueComments-loading-icon"}))},v=function(e){var t=e.issueUri,n=e.useShowCommentsButton,o=void 0===n||n,c=e.allowRefreshingComments,s=void 0===c||c,u=e.commentsPerPage,i=Object(r.useState)(!o),m=i[0],f=i[1];return a.a.createElement("section",{className:"GithubIssueComments-container"},m?a.a.createElement(l,{issueUri:t,commentsPerPage:u,allowRefreshingComments:s}):a.a.createElement("button",{className:"GithubIssueComments-show-comments-button",onClick:function(){return f(!0)}},"Show Comments"))};function y(e){var t=e.data.mdx,n=t.frontmatter,r=t.body;return a.a.createElement(c.a,null,a.a.createElement(m.a,{description:n.description,lang:"en",title:n.title}),a.a.createElement("div",null,a.a.createElement(s,null),a.a.createElement("div",{className:"blog-post"},a.a.createElement("article",{className:"blog-post-container"},a.a.createElement("h1",{className:"sub-page-title"},n.title),a.a.createElement("section",{className:"blog-post-content"},a.a.createElement(o.MDXRenderer,null,r)),a.a.createElement(v,{issueUri:n.issueLink}),a.a.createElement(i,{name:"Josh Jackson",twitterUsername:"Pjaerr",imgSrc:"/me.jpg"})))))}n.d(t,"default",(function(){return y})),n.d(t,"pageQuery",(function(){return E}));var E="1056835620"},239:function(e,t,n){var r=n(1),a=n(60),o=n(31),c=n(8),s=n(9),u=n(13),i=n(152),m=(n(6).Reflect||{}).construct,l=u((function(){function e(){}return!(m((function(){}),[],e)instanceof e)})),f=!u((function(){m((function(){}))}));r(r.S+r.F*(l||f),"Reflect",{construct:function(e,t){o(e),c(t);var n=arguments.length<3?e:o(arguments[2]);if(f&&!l)return m(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(i.apply(e,r))}var u=n.prototype,p=a(s(u)?u:Object.prototype),b=Function.apply.call(e,p,t);return s(b)?b:p}})},240:function(e,t,n){var r=n(241);e.exports={MDXRenderer:r}},241:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(40),n(5),n(12),n(81),n(151),n(46),n(15),n(7),n(80),n(59),n(2),n(239),n(239),n(80),n(81),n(151),n(59),n(46),n(40),n(15),n(7),n(5),n(2),n(12);var i=n(0),m=n(108),l=m.useMDXComponents,f=m.mdx,p=n(138).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,c=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),u=l(n),m=p(t),b=i.useMemo((function(){if(!a)return null;var e=s({React:i,mdx:f},m),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+a])).apply(void 0,[{}].concat(o(n)))}),[a,t]);return i.createElement(b,s({components:u},c))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-js-a64d25c148527ec442de.js.map