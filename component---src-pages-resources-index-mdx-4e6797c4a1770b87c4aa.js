(window.webpackJsonp=window.webpackJsonp||[]).push([[31,41,42],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),i=a.n(b),c=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,i=r.subDirectory,o=b+"/edit/"+r.branch+i+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:o},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),v=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),b=r===n,o=new RegExp(n+"/?(#.*)?$"),l=a.replace(o,r);return Object(p.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=b,t),v.listItem)},Object(p.b)(c.Link,{className:v.link,to:""+l},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:v.list},r))))))},t}(r.a.Component),f=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,u=t.relativePagePath,d=t.titleType,m=s.tabs,x=s.title,h=s.theme,v=s.description,N=s.keywords,k=Object(w.a)().interiorTheme,P=Object(c.useStaticQuery)("2456312558").site.pathPrefix,I=P?n.pathname.replace(P,""):n.pathname,y=m?I.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",C=h||k;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:C,pageTitle:x,pageDescription:v,pageKeywords:N,titleType:d},Object(p.b)(g,{title:r?Object(p.b)(r,null):x,label:"label",tabs:m,theme:C}),m&&Object(p.b)(T,{slug:I,tabs:m,currentTab:y}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:u})),Object(p.b)(O.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:y}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FHeL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),o={_frontmatter:c},l=i.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(l,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Resource Links"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/cloud/architecture/architectures/modern-integration/overview"}),"Integration Architecture Center")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.ibm.com/cloud-integration-swat"}),"Cloud Integration SWAT resources")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.ibm.com/integration/blog/"}),"Developer Integration Blogs")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ot4i"}),"Integration Opensource git"))))}s.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-resources-index-mdx-4e6797c4a1770b87c4aa.js.map