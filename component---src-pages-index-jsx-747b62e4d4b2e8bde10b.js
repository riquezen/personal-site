(self.webpackChunkisabellaenriquez_github_io=self.webpackChunkisabellaenriquez_github_io||[]).push([[230],{523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],o[s[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6124:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(m,"canUseDOM",l),m}}},50:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ne}});var r,a,i,o,l=n(7294),c=n(1721),s=n(2058),u=n(5444),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).title=t.title,n.timespan=t.timespan,n.summary=t.summary,n.stack=t.stack,t.links?n.links=t.links:n.links=[],n.imgName=t.imgName,n}(0,c.Z)(t,e);var n=t.prototype;return n.generateLinkIcons=function(e){if(this.links.length)return this.links.map((function(t){if(""!==t.url)return l.createElement("a",{key:t.name+"-icon",className:"link-icon",href:t.url,"aria-label":"Misc"===t.name?"See it in action!":"See on "+t.name,title:"Misc"===t.name?"See it in action!":t.name},l.createElement("div",{style:{maskImage:"url("+e[t.name].publicURL+")",WebkitMaskImage:"url("+e[t.name].publicURL+"#"+t.name+")",width:"auto",height:"100%",maskRepeat:"no-repeat",WebkitMaskRepeat:"no-repeat",maskPosition:"center",WebkitMaskPosition:"center"}}))}))},n.getExpImage=function(e){var t=this;return e.find((function(e){return e.node.name===t.imgName})).node.publicURL},n.render=function(){var e=this;return l.createElement(u.i1,{query:"470853297",render:function(t){return l.createElement("div",{className:"block exp-block"},l.createElement("img",{src:e.getExpImage(t.allFile.edges),alt:e.title}),l.createElement("div",{className:"info"},l.createElement("h2",null,e.title),l.createElement("p",{className:"timespan"},e.timespan),l.createElement("p",null,e.summary),l.createElement("p",{className:"stack"},"Stack: ",e.stack),l.createElement("div",{className:"social-icons projects"},e.generateLinkIcons(t))))}})},t}(l.Component),f=n(5774),p=n(6646),d=n.n(p),h=n(4697),y=n(2551),b=function(e){function t(){return e.apply(this,arguments)||this}(0,c.Z)(t,e);var n=t.prototype;return n.getWorkBlocks=function(){return h.map((function(e){return l.createElement(m,{key:e.company,title:e.position+" @ "+e.company,timespan:e.timespan,summary:e.summary,stack:e.stack,links:e.links,imgName:e.imgName})}))},n.getProjectBlocks=function(){return y.map((function(e){return l.createElement(m,{key:e.title,title:e.title,timespan:e.timespan,summary:e.summary,stack:e.stack,links:e.links,imgName:e.imgName})}))},n.componentDidMount=function(){var e=this,t=[{section:document.getElementById("about-me"),show:!1,msg:"Isabella is hoping to start a blog soon, so stay tuned!"},{section:document.getElementById("work"),show:!1,msg:"Next summer, Isabella will be working at Linkedin's head office as an UI Engineer Intern!"}];window.addEventListener("scroll",(function(){if(e.blob&&e.blobMsg){var n=!1;t.forEach((function(t){t.show=e.showSectionBlob(t.section),t.show&&(n||(n=!0),e.blobMsg.innerHTML!==t.msg&&(e.blobMsg.innerHTML=t.msg))})),n&&!e.blob.classList.contains("visible-blob")?e.blob.classList.add("visible-blob"):!n&&e.blob.classList.contains("visible-blob")&&e.blob.classList.remove("visible-blob")}}),!0)},n.showSectionBlob=function(e){var t=e.getBoundingClientRect().top;return t>=e.clientHeight/2*-1&&t<=0},n.render=function(){var e=this;return l.createElement(u.i1,{query:"3008281641",render:function(t){return l.createElement(l.Fragment,null,l.createElement("main",null,l.createElement(s.Z,null,e.props.children),l.createElement("section",{"aria-label":"Home",id:"home"},l.createElement("header",null,l.createElement("h1",null,"👋 Hi, I'm Isabella!"),l.createElement("p",null,"✨ I like coding pretty, functional things that everyone can enjoy.")),l.createElement("img",{src:"dark"===e.props.theme?t.darkModeMe.publicURL:t.lightModeMe.publicURL,alt:"Isabella Enriquez",id:"profile-pic"})),l.createElement("section",{id:"about-me","aria-label":"About Me"},l.createElement("header",null,l.createElement("h1",null,"About Me")),l.createElement("p",null,'I started coding in the 10th grade. I meant to take a graphic design course but 15-year old Isabella did not actually read the description of the "Computer Studies" course. I think it worked out though.'),l.createElement("div",{className:"block-grid"},l.createElement("div",{className:"block rounded-block"},l.createElement("h2",null,"🤖 Tech Stack"),l.createElement("div",{className:"subsection"},l.createElement("span",null,"Languages:"),"Python, JavaScript, TypeScript, HTML, CSS, Sass, Java, C#, C, Dart, SQL"),l.createElement("div",{className:"subsection"},l.createElement("span",null,"Frameworks:"),"Flask, Django, React, Svelte, Cypress, JUnit, Gatsby, Flutter, Selenium"),l.createElement("div",{className:"subsection"},l.createElement("span",null,"Other tools and skills:"),"Git/GitHub, Unity, Linux, Figma, REST, CI/CD")),l.createElement("div",{className:"block rounded-block"},l.createElement("h2",null,"🤓 Interests"),l.createElement("div",{className:"subsection"},l.createElement("span",null,"Professional Interests:"),"All Things Web (dev/design/a11y), Full Stack Development, Tech for Social Impact"),l.createElement("div",{className:"subsection"},l.createElement("span",null,"Personal Interests:"),"Cultural Geography, Fashion, History, Movies, Mythology, Travel, Video Games, Writing"))),l.createElement("hr",null),l.createElement("p",null,"Currently, I’m a junior at Queen’s University studying towards a Bachelor of Computing with a specialization in Software Design. Beyond my professional career, I’m involved in a few extra-curricular activities and I’ll sometimes work on coding projects in my free time."),l.createElement("br",null),l.createElement("p",null,"Feel free to reach out to me at"," ",l.createElement("a",{href:"mailto:isabella.enriquez@queensu.ca"},"isabella.enriquez@queensu.ca"),"! I’d love to chat, whether it be about opportunities (current resume available upon request), any one of my interests, my writing, or even just how you’re doing. I’m here to listen.")),l.createElement("section",{id:"work","aria-label":"Work",ref:function(t){return e.workSection=t}},l.createElement("header",null,l.createElement("h1",null,"Work")),l.createElement("p",null,"🚀 My professional adventures thus far."),l.createElement("div",{className:"block-grid"},e.getWorkBlocks())),l.createElement("section",{id:"projects","aria-label":"Projects"},l.createElement("header",null,l.createElement("h1",null,"Projects")),l.createElement("p",null,"🔨 Innovating with code and design. Check out more of my projects on my"," ",l.createElement("a",{href:"https://github.com/isabellaenriquez"},"GitHub"),"!"),l.createElement("div",{className:"block-grid"},e.getProjectBlocks())),l.createElement("div",{id:"popup-blob",className:"blob-friend",ref:function(t){return e.blob=t}},l.createElement(d(),null),l.createElement("span",{className:"blob-message",ref:function(t){return e.blobMsg=t}}))),l.createElement("footer",{id:"footer"},l.createElement("h2",null,"Aw, leaving already? Let's stay connected!"),l.createElement(f.Z,null),l.createElement("div",{id:"footer-blob",className:"blob-friend"},l.createElement(d(),null),l.createElement("span",{className:"blob-message"},"I'll miss you! ❤"))))}})},t}(l.Component),g=n(9925),v=n(6743),E=n(5130),w=n(1168),k=n(2775),C=n.n(k),T=n(7296),L=n.n(T),S=n(5697),x=n.n(S),A=n(6124),I=n.n(A),O=n(523),F=n.n(O),M=n(4756),j=n.n(M),P="bodyAttributes",N="htmlAttributes",R="titleAttributes",B={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},H=(Object.keys(B).map((function(e){return B[e]})),"charset"),q="cssText",D="href",U="http-equiv",_="innerHTML",z="itemprop",G="name",Y="property",J="rel",W="src",Z="target",Q={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},K="defaultTitle",V="defer",$="encodeSpecialCharacters",X="onChangeClientState",ee="titleTemplate",te=Object.keys(Q).reduce((function(e,t){return e[Q[t]]=t,e}),{}),ne=[B.NOSCRIPT,B.SCRIPT,B.STYLE],re="data-react-helmet",ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},oe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},se=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ue=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},me=function(e){var t=ye(e,B.TITLE),n=ye(e,ee);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ye(e,K);return t||r||void 0},fe=function(e){return ye(e,X)||function(){}},pe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return le({},e,t)}),{})},de=function(e,t){return t.filter((function(e){return void 0!==e[B.BASE]})).map((function(e){return e[B.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},he=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&we("Helmet: "+e+' should be of type "Array". Instead found type "'+ae(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||n===J&&"canonical"===e[n].toLowerCase()||c===J&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==_&&l!==q&&l!==z||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],c=j()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},ye=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},be=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){be(e)}),0)}),ge=function(e){return clearTimeout(e)},ve="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||be:n.g.requestAnimationFrame||be,Ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ge:n.g.cancelAnimationFrame||ge,we=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ke=null,Ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;Se(B.BODY,r),Se(B.HTML,a),Le(m,f);var p={baseTag:xe(B.BASE,n),linkTags:xe(B.LINK,i),metaTags:xe(B.META,o),noscriptTags:xe(B.NOSCRIPT,l),scriptTags:xe(B.SCRIPT,s),styleTags:xe(B.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,d,h)},Te=function(e){return Array.isArray(e)?e.join(""):e},Le=function(e,t){void 0!==e&&document.title!==e&&(document.title=Te(e)),Se(B.TITLE,t)},Se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(re),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)n.removeAttribute(i[m]);a.length===i.length?n.removeAttribute(re):n.getAttribute(re)!==o.join(",")&&n.setAttribute(re,o.join(","))}},xe=function(e,t){var n=document.head||document.querySelector(B.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===_)n.innerHTML=t.innerHTML;else if(r===q)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(re,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},Ae=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Q[n]||n]=e[n],t}),t)},Oe=function(e,t,n){switch(e){case B.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[re]=!0,a=Ie(n,r),[l.createElement(B.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=Ae(n),i=Te(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+ue(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ue(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case P:case N:return{toComponent:function(){return Ie(t)},toString:function(){return Ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[re]=!0,r);return Object.keys(t).forEach((function(e){var n=Q[e]||e;if(n===_||n===q){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),l.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===_||e===q)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+ue(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===ne.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:Oe(B.BASE,t,r),bodyAttributes:Oe(P,n,r),htmlAttributes:Oe(N,a,r),link:Oe(B.LINK,i,r),meta:Oe(B.META,o,r),noscript:Oe(B.NOSCRIPT,l,r),script:Oe(B.SCRIPT,c,r),style:Oe(B.STYLE,s,r),title:Oe(B.TITLE,{title:m,titleAttributes:f},r)}},Me=I()((function(e){return{baseTag:de([D,Z],e),bodyAttributes:pe(P,e),defer:ye(e,V),encode:ye(e,$),htmlAttributes:pe(N,e),linkTags:he(B.LINK,[J,D],e),metaTags:he(B.META,[G,H,U,Y,z],e),noscriptTags:he(B.NOSCRIPT,[_],e),onChangeClientState:fe(e),scriptTags:he(B.SCRIPT,[W,_],e),styleTags:he(B.STYLE,[q],e),title:me(e),titleAttributes:pe(R,e)}}),(function(e){ke&&Ee(ke),e.defer?ke=ve((function(){Ce(e,(function(){ke=null}))})):(Ce(e),ke=null)}),Fe)((function(){return null})),je=(a=Me,o=i=function(e){function t(){return ie(this,t),se(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!F()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case B.SCRIPT:case B.NOSCRIPT:return{innerHTML:t};case B.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return le({},r,((t={})[n.type]=[].concat(r[n.type]||[],[le({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case B.TITLE:return le({},a,((t={})[r.type]=o,t.titleAttributes=le({},i),t));case B.BODY:return le({},a,{bodyAttributes:le({},i)});case B.HTML:return le({},a,{htmlAttributes:le({},i)})}return le({},a,((n={})[r.type]=le({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=le({},t);return Object.keys(e).forEach((function(t){var r;n=le({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[te[n]||n]=e[n],t}),t)}(ce(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case B.LINK:case B.META:case B.NOSCRIPT:case B.SCRIPT:case B.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=ce(e,["children"]),r=le({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(a,r)},oe(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:x().object,bodyAttributes:x().object,children:x().oneOfType([x().arrayOf(x().node),x().node]),defaultTitle:x().string,defer:x().bool,encodeSpecialCharacters:x().bool,htmlAttributes:x().object,link:x().arrayOf(x().object),meta:x().arrayOf(x().object),noscript:x().arrayOf(x().object),onChangeClientState:x().func,script:x().arrayOf(x().object),style:x().arrayOf(x().object),title:x().string,titleAttributes:x().object,titleTemplate:x().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=Fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);je.renderStatic=je.rewind;var Pe=n.p+"static/site-preview-6ce5f51f14040b75283e16c2255ec892.jpg";function Ne(){var e=(0,v.v)(),t=e[0],n=e[1],r=(e[2],"light"===t?E.W:E.$),a=function(){return l.createElement("div",{className:"toggler"},l.createElement("input",{type:"checkbox",name:"theme",id:"theme",onChange:n,checked:"dark"===t,"aria-label":"theme toggle"}),l.createElement("label",{htmlFor:"theme"},l.createElement(L(),null),l.createElement(C(),null),l.createElement("span",{className:"ball","aria-label":"theme toggler",title:"Toggle theme"})))},i="Isabella Enriquez",o="I like making pretty, functional things everyone can enjoy.";return l.createElement(g.f6,{theme:r},l.createElement(l.Fragment,null,l.createElement(je,null,l.createElement("meta",{charSet:"utf-8"}),l.createElement("title",null,i),l.createElement("meta",{name:"description",content:o}),l.createElement("meta",{property:"og:title",content:i}),l.createElement("meta",{property:"og:description",content:o}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image",content:"https://www.isabellaenriquez.github.io"+Pe}),l.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.createElement("script",{src:"https://kit.fontawesome.com/740a5138ca.js",crossorigin:"anonymous"})),l.createElement(w.n,null),l.createElement(b,{theme:t},l.createElement(a,null))))}},6646:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M157.994 80C157.998 79.6672 158 79.3338 158 79C158 35.3695 122.63 0 79 0C35.3695 0 0 35.3695 0 79C0 79.3338 0.0020705 79.6672 0.00619937 80H157.994Z",fill:"#FFC700",key:0}),r.createElement("ellipse",{cx:"57",cy:"54",rx:"7",ry:"12",fill:"#121212",key:1}),r.createElement("ellipse",{cx:"101",cy:"54",rx:"7",ry:"12",fill:"#121212",key:2})])}a.defaultProps={id:"blob",preserveAspectRatio:"xMaxYMax",width:"100%",height:"100%",viewBox:"0 0 158 80",fill:"none"},e.exports=a,a.default=a},7296:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.4556 1.87008C21.2275 4.20789 16 10.9935 16 19C16 27.8999 22.4591 35.2912 30.9454 36.7419C27.8006 38.802 24.0402 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C23.0219 0 25.8873 0.670204 28.4556 1.87008Z",fill:"#F49BBA",key:0}),r.createElement("circle",{cx:"7.5",cy:"14.5",r:"2.5",fill:"#121212",key:1}),r.createElement("circle",{cx:"15.5",cy:"16.5",r:"2.5",fill:"#121212",key:2}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.3348 22.408C14.2852 23.2656 12.5831 23.5191 10.9151 22.939C9.24722 22.3589 8.06981 21.1042 7.77865 19.7805C7.35518 21.6505 8.48183 23.614 10.4432 24.2961C12.4047 24.9783 14.5066 24.1375 15.3348 22.408Z",fill:"#121212",key:3}),r.createElement("path",{d:"M24.7815 13.6322L24.2188 15.738L26.0476 16.9239L23.871 17.0394L23.3083 19.1451L22.5258 17.1108L20.3493 17.2263L22.0422 15.8535L21.2598 13.8192L23.0885 15.0051L24.7815 13.6322Z",fill:"#FF4D8B",key:4}),r.createElement("path",{d:"M25.9891 6.25561L26.8368 8.26363L29.0085 8.07791L27.3607 9.50465L28.2085 11.5127L26.3424 10.3864L24.6946 11.8132L25.189 9.69037L23.3229 8.56413L25.4946 8.37841L25.9891 6.25561Z",fill:"#FF4D8B",key:5}),r.createElement("path",{d:"M26.6667 27.7807L24.5608 27.2186L23.3754 29.0477L23.2593 26.8712L21.1534 26.3091L23.1875 25.526L23.0714 23.3495L24.4447 25.0421L26.4788 24.259L25.2934 26.0882L26.6667 27.7807Z",fill:"#FF4D8B",key:6}),r.createElement("path",{d:"M32.2506 31.1474L31.5073 29.0985L29.3289 29.1722L31.0479 27.8321L30.3046 25.7832L32.1103 27.0039L33.8293 25.6638L33.2263 27.7584L35.032 28.9791L32.8536 29.0529L32.2506 31.1474Z",fill:"#FF4D8B",key:7}),r.createElement("path",{d:"M34.6667 20.7807L32.5608 20.2186L31.3754 22.0477L31.2593 19.8712L29.1534 19.3091L31.1875 18.526L31.0714 16.3495L32.4447 18.0421L34.4788 17.259L33.2934 19.0882L34.6667 20.7807Z",fill:"#FF4D8B",key:8})])}a.defaultProps={width:"37",height:"40",viewBox:"0 0 37 40",fill:"none"},e.exports=a,a.default=a},2775:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("rect",{x:"32",y:"21.3334",width:"2.66667",height:"8",rx:"1.33333",transform:"rotate(-90 32 21.3334)",fill:"#FFC700",key:0}),r.createElement("rect",{x:"18.6667",y:"32",width:"2.66667",height:"8",rx:"1.33333",fill:"#FFC700",key:1}),r.createElement("rect",{width:"2.66667",height:"8",rx:"1.33333",transform:"matrix(1 0 0 -1 18.6667 8)",fill:"#FFC700",key:2}),r.createElement("rect",{width:"2.66667",height:"8",rx:"1.33333",transform:"matrix(0 -1 -1 0 8 21.3334)",fill:"#FFC700",key:3}),r.createElement("rect",{x:"5.33328",y:"8.55225",width:"2.66667",height:"8",rx:"1.33333",transform:"rotate(-45 5.33328 8.55225)",fill:"#FFC700",key:4}),r.createElement("rect",{x:"26.6667",y:"28.5522",width:"2.66667",height:"8",rx:"1.33333",transform:"rotate(-45 26.6667 28.5522)",fill:"#FFC700",key:5}),r.createElement("rect",{x:"29.5898",y:"13.6292",width:"2.66667",height:"8",rx:"1.33333",transform:"rotate(-135 29.5898 13.6292)",fill:"#FFC700",key:6}),r.createElement("rect",{x:"25.1303",y:"12.4115",width:"2.66667",height:"8",rx:"1.33333",transform:"rotate(-157.5 25.1303 12.4115)",fill:"#FFC700",key:7}),r.createElement("rect",{x:"14.4636",y:"36.4115",width:"2.66667",height:"8",rx:"1.33333",transform:"rotate(-157.5 14.4636 36.4115)",fill:"#FFC700",key:8}),r.createElement("rect",{width:"2.66667",height:"8",rx:"1.33333",transform:"matrix(0.92388 -0.382683 -0.382683 -0.92388 25.7281 36.4115)",fill:"#FFC700",key:9}),r.createElement("rect",{width:"2.66667",height:"8",rx:"1.33333",transform:"matrix(0.382683 -0.92388 -0.92388 -0.382683 11.3914 18.8585)",fill:"#FFC700",key:10}),r.createElement("rect",{width:"2.66667",height:"8",rx:"1.33333",transform:"matrix(0.382683 -0.92388 -0.92388 -0.382683 35.3914 28.1918)",fill:"#FFC700",key:11}),r.createElement("rect",{x:"29.0209",y:"18.8585",width:"2.66667",height:"8",rx:"1.33333",transform:"rotate(-112.5 29.0209 18.8585)",fill:"#FFC700",key:12}),r.createElement("rect",{x:"5.02094",y:"28.1918",width:"2.66667",height:"8",rx:"1.33333",transform:"rotate(-112.5 5.02094 28.1918)",fill:"#FFC700",key:13}),r.createElement("rect",{width:"2.66667",height:"8",rx:"1.33333",transform:"matrix(0.92388 -0.382683 -0.382683 -0.92388 15.0615 12.4115)",fill:"#FFC700",key:14}),r.createElement("rect",{x:"7.21945",y:"34.2091",width:"2.66667",height:"8",rx:"1.33333",transform:"rotate(-135 7.21945 34.2091)",fill:"#FFC700",key:15}),r.createElement("circle",{cx:"20.0002",cy:"19.9999",r:"13.3333",transform:"rotate(-90 20.0002 19.9999)",fill:"#FFEC40",key:16}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.5345 22.6667C22.5935 23.736 21.3559 24.3852 20.0001 24.3852C18.6443 24.3852 17.4067 23.736 16.4657 22.6666C17.1477 25.0497 18.4747 26.6666 20.0001 26.6666C21.5254 26.6666 22.8524 25.0497 23.5345 22.6667Z",fill:"#121212",key:17}),r.createElement("circle",{r:"2",transform:"matrix(-1 0 0 1 24.6667 18)",fill:"black",key:18}),r.createElement("circle",{r:"2",transform:"matrix(-1 0 0 1 15.3333 18)",fill:"black",key:19})])}a.defaultProps={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},e.exports=a,a.default=a},2551:function(e){"use strict";e.exports=JSON.parse('[{"title":"Pandemic Protection","timespan":"January to April 2021","summary":"A 2D platformer that educates young Canadians on COVID-19 safety guidelines.","stack":"Unity, C#","links":[{"name":"GitHub","url":"https://www.github.com/isabellaenriquez/pandemic-protection"},{"name":"Youtube","url":"https://www.youtube.com/watch?v=08aMdLG3SLI"},{"name":"Misc","url":"https://creative.caslab.queensu.ca/~pandemic-protection/Pandemic%20Protection%20Game/"}],"imgName":"pandemicProtection"},{"title":"studybuddy","timespan":"January 2021","summary":"The remote student\'s best friend.","stack":"React, CSS, TensorFlow","links":[{"name":"GitHub","url":"https://github.com/Cameron-Beaulieu/studybuddy"},{"name":"Youtube","url":"https://www.youtube.com/watch?v=lE0MNbCttMY&list=PLH2wYuURvrWS-dMX1bjbcE4xq0kCGRQqR&ab_channel=KevinQuijalvo"}],"imgName":"studybuddy"},{"title":"leya.","timespan":"January 2021","summary":"A Chrome extension for visual and audial immersion.","stack":"JavaScript, HTML, CSS, Google Chrome Extension API","links":[{"name":"GitHub","url":"https://github.com/isabellaenriquez/leya"},{"name":"Youtube","url":"https://www.youtube.com/watch?v=mJd_DdHNVGo"}],"imgName":"leya"},{"title":"Journey","timespan":"November 2020","summary":"A mental health and wellness journaling tool. Awarded \\"Most Innovative Project\\" at hackHer 2020.","stack":"React, Express, Firebase, Google Natural Language API","links":[{"name":"GitHub","url":"https://github.com/isabellaenriquez/journey"}],"imgName":"journey"},{"title":"KOSMOS — your virtual makeup bag","timespan":"August 2020","summary":"Making the makeup community and experience simple and transparent.","stack":"Python, Django, JavaScript, HTML, Sass, Celery, RabbitMQ","links":[{"name":"GitHub","url":"https://github.com/isabellaenriquez/kosmos"}],"imgName":"kosmos"},{"title":"Bookworm Wannabe","timespan":"July 2020","summary":"A simple book review website with user authentication and a database of 5000+ books.","stack":"Python, Flask, SQLAlchemy, PostgreSQL, HTML, CSS, Goodreads API (now deprecated)","links":[{"name":"GitHub","url":"https://github.com/isabellaenriquez/bookworm-wannabe"},{"name":"Youtube","url":"https://www.youtube.com/watch?v=XaUTkiJLEHQ&list=PLH2wYuURvrWQskB8BvBHlLlFj8IeHopvF&index=2"}],"imgName":"bookworm-wannabe"}]')},4697:function(e){"use strict";e.exports=JSON.parse('[{"company":"Queen\'s University","position":"Teaching Assistant","timespan":"January to April 2021, September 2021 to April 2022","summary":"Educated and evaluated computer science students at the university level.\\n\\nCourses: Introduction to Computing Science I (CISC 121), Logic for Computing (CISC 204), and Game Design (CISC 226).","stack":"Python (CISC 121 and CISC 204); Unity, C# (CISC 226)","imgName":"qsc"},{"company":"Nylas","position":"Frontend Dev","timespan":"May to August 2021","summary":"Empowered developers with powerful APIs and beautiful web components that seamlessly integrate into existing applications.\\n\\nFirst and only intern on the Developer Experience Team ❤","stack":"Svelte, JavaScript, TypeScript, Cypress","imgName":"nylas"}]')}}]);
//# sourceMappingURL=component---src-pages-index-jsx-747b62e4d4b2e8bde10b.js.map