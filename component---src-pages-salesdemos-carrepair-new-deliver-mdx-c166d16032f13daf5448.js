(window.webpackJsonp=window.webpackJsonp||[]).push([[34,48,50,51],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),i=a.n(o),c=a("NmYn"),b=a.n(c),s=a("Wbzz"),n=a("Xrax"),r=a("k4MR"),l=a("TSYQ"),d=a.n(l),m=a("QH2O"),p=a.n(m),g=a("qKvR"),A=function(e){var t,a=e.title,o=e.theme,i=e.tabs,c=void 0===i?[]:i;return Object(g.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=c.length,t[p.a.darkMode]="dark"===o,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},a)))))},u=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,o=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||o,c=i.baseUrl,b=i.subDirectory,n=c+"/edit/"+i.branch+b+"/src/pages"+t;return c?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:n},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),y=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,i=o.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),c=a===i,n=new RegExp(i+"/?(#.*)?$"),r=o.replace(n,a);return Object(g.b)("li",{key:e,className:d()((t={},t[y.selectedItem]=c,t),y.listItem)},Object(g.b)(s.Link,{className:y.link,to:""+r},e))}));return Object(g.b)("div",{className:y.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:y.list},c))))))},t}(i.a.Component),w=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,c=t.frontmatter,l=void 0===c?{}:c,d=t.relativePagePath,m=t.titleType,p=l.tabs,u=l.title,j=l.theme,y=l.description,O=l.keywords,L=Object(v.a)().interiorTheme,k=Object(s.useStaticQuery)("2456312558").site.pathPrefix,z=k?o.pathname.replace(k,""):o.pathname,T=p?z.split("/").filter(Boolean).slice(-1)[0]||b()(p[0],{lower:!0}):"",S=j||L;return Object(g.b)(r.a,{tabs:p,homepage:!1,theme:S,pageTitle:u,pageDescription:y,pageKeywords:O,titleType:m},Object(g.b)(A,{title:i?Object(g.b)(i,null):u,label:"label",tabs:p,theme:S}),p&&Object(g.b)(x,{title:u,slug:z,tabs:p,currentTab:T}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:d})),Object(g.b)(f.a,{pageContext:t,location:o,slug:z,tabs:p,currentTab:T}),Object(g.b)(n.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ra6L:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return s})),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return h}));var o=a("wx14"),i=a("zLVn"),c=(a("q1tI"),a("7ljp")),b=a("013z"),s=(a("qKvR"),function(){return Object(c.b)("span",null,"Car Crash Repair - Cognitive API Demo")}),n={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},l=r("AnchorLinks"),d=r("AnchorLink"),m=r("Row"),p=r("Column"),g=r("ArticleCard"),A={Title:s,_frontmatter:n},u=b.a;function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)(u,Object(o.a)({},A,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"There are 3 options to deliver this demo. Select the options below:"),Object(c.b)(l,{mdxType:"AnchorLinks"},Object(c.b)(d,{mdxType:"AnchorLink"},"Click-Through Demo (Screenshot Demo)"),Object(c.b)(d,{mdxType:"AnchorLink"},"101 Live Demo (Shared Environment)"),Object(c.b)(d,{mdxType:"AnchorLink"},"301 Live Demo (Own Environment)")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Click-Through Demo (Screenshot Demo)"),Object(c.b)("p",null,"Click-Through Demo is a static demo based on screenshot pictures. It is a good demo for a “First-Demo” scenario, just to introduce and give a solid view about the benefits of our solution. The Demo Script is almost the same of the live demo. You are able to deliver this demo with or without an internet connection. Open the assets below to know how to deliver the Click-Through Demo."),Object(c.b)(m,{mdxType:"Row"},Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"Online Demo Link",href:"https://ibm.invisionapp.com/share/7DO0YDLTUMJ",author:"Access the Online Demo",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVQoz2NI3n8PE6Xsv5d06FHsvvs+E9bFHXyYePBhyoH7mMoYkDlJ++6m7L2dcuBe4t67sRNWZk9cllAzMWvSitieJfE7b6QcfJC87y4OzfvuAaVj9z9K2Hc/YMnhSXNW3L929e6t2x9fPF+4eI337N1ph9Hth2nedzf18KOotWeTcorj+xe5TNo8Ye7Kk8dOXLp67c3bNwtWbnJsWxqx/GjspovJSPoRmtOOPnFpX9ZRmVW9drt974bG7hnHDxzau+fg6WMnu/pnuXSvDF24L2DWjsjVp+D6YZoP3I9efdJj6hajFRcjNl0qmrPKr2mub+cy/9YF/m0LfdsWBc7eGTRvT9Dc3YGzdkStOwPxP0PSHmAI3Y/dcjlo9k7/Obuky+bGL9g5s62svTClrrMzbMHe4IX7Q+bvDZqzC6gTRIJR/LarIJtTDj1K3n8/BGjqvD0BM7bqyevblUxqK0ra7sxeU1nst/BI0OwdQfP3Bs/bGzBtC1BbMEjZlogVx1IOPWSIWXUiesVRh+ji4Lm73btWpYYGZc5dXZqV1mQpX19d7LPwiH1YjmftjMCZ2+wji/wmrguctd0+pjRg6qb4LZcZrN1ibP3TLJwiLZ3CTZ1jgn2C3NzDvIys/AxNYy3NLELyza0DzKz8Ld1iLF2jLZwjgQjIsHSJtvNPYzDWczbWczJQNtdXMjVQNtNTsdRTMtNXtTRStzJQsTRUszJQszLStgcqM1Cx0Fc01VcyM1C10Fc2AyIGA1VLEFK3hiBDdSugBkM1SwMQCdIJQfowNYZgBGEwmGjaApExboRHFgBtNXXLY/qHJwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"lecture",title:"lecture",src:"/cp4i-demohub/static/54207649d0d07826b9bac9578a8f7129/739ea/lecture.png",srcSet:["/cp4i-demohub/static/54207649d0d07826b9bac9578a8f7129/7fc1e/lecture.png 288w","/cp4i-demohub/static/54207649d0d07826b9bac9578a8f7129/739ea/lecture.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"Offline Demo File",href:"https://ibm.box.com/s/q04olaxo1ihhwdm7unmdkel6gtj6x08c",author:"Download the Offline Demo File",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVQoz2NI3n8PE6Xsv5d06FHsvvs+E9bFHXyYePBhyoH7mMoYkDlJ++6m7L2dcuBe4t67sRNWZk9cllAzMWvSitieJfE7b6QcfJC87y4OzfvuAaVj9z9K2Hc/YMnhSXNW3L929e6t2x9fPF+4eI337N1ph9Hth2nedzf18KOotWeTcorj+xe5TNo8Ye7Kk8dOXLp67c3bNwtWbnJsWxqx/GjspovJSPoRmtOOPnFpX9ZRmVW9drt974bG7hnHDxzau+fg6WMnu/pnuXSvDF24L2DWjsjVp+D6YZoP3I9efdJj6hajFRcjNl0qmrPKr2mub+cy/9YF/m0LfdsWBc7eGTRvT9Dc3YGzdkStOwPxP0PSHmAI3Y/dcjlo9k7/Obuky+bGL9g5s62svTClrrMzbMHe4IX7Q+bvDZqzC6gTRIJR/LarIJtTDj1K3n8/BGjqvD0BM7bqyevblUxqK0ra7sxeU1nst/BI0OwdQfP3Bs/bGzBtC1BbMEjZlogVx1IOPWSIWXUiesVRh+ji4Lm73btWpYYGZc5dXZqV1mQpX19d7LPwiH1YjmftjMCZ2+wji/wmrguctd0+pjRg6qb4LZcZrN1ibP3TLJwiLZ3CTZ1jgn2C3NzDvIys/AxNYy3NLELyza0DzKz8Ld1iLF2jLZwjgQjIsHSJtvNPYzDWczbWczJQNtdXMjVQNtNTsdRTMtNXtTRStzJQsTRUszJQszLStgcqM1Cx0Fc01VcyM1C10Fc2AyIGA1VLEFK3hiBDdSugBkM1SwMQCdIJQfowNYZgBGEwmGjaApExboRHFgBtNXXLY/qHJwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"lecture",title:"lecture",src:"/cp4i-demohub/static/54207649d0d07826b9bac9578a8f7129/739ea/lecture.png",srcSet:["/cp4i-demohub/static/54207649d0d07826b9bac9578a8f7129/7fc1e/lecture.png 288w","/cp4i-demohub/static/54207649d0d07826b9bac9578a8f7129/739ea/lecture.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"Click-Through Guided Tour",href:"https://ibm-cloud-architecture.github.io/refarch-dba/use-cases/accounts-pay/#use-case-guided-tour",author:"How to navigate in the Demo",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVQ4y42TTUhUURTH333v3fmesRnHcZSZnLFBzI+yMc0ca8ZMF40I9oGBUVPhTlu1S4I0XASRlRSU7hSxRYgGtUmCgqhFy9wGBW5yVVHR4tdz3tQ4OYQPDve+c8/5/8+noigK25EyT4QSR/kmncieHluQQEl0s21xAKGo2bOiMozHoRFw1VAX6kJT9b82Nt3NcN9DTvVlCJT7CwF9/jIa4y243J4C4HDqDgcys1THqtH+6IVJZtHcJFqP0toWx+v1FQK2p7pJ9qTRLbrhaCceuojF0Jd2TXP4JjRfe03L4AjhUMiwV/OkQmCR+taUA8FKdGnP3qVq53zTSzJ1S3Sl39B76zun59domVul/fYM0V0RFBnEVXMBazBlgMpCQFU1GYXBpogNpZOxM2+ZHf3M5LmvXBn6wcjMGgNL79m/8JTqhjqEczfO2CDS24DQHf9pijC7l6y9xOLdj6y+gndzvxi6us7J55/onF8mWt+YD+Bff4fdxdjYOIuLj2mKx03DXCcdSozh/mleTMGxzvv4hidoXnhGzd49OXINKSXeHSVoWq6OXk+A6alHbHw/v8GRRDr7oGv5ujRWnCDmazLHKNFNRaQq96ZhtTpIJNPYrVphyqmDvfT3ZLBJjzm0BrtQpSGmYVX5Pi73LVPrb8v+a5ole6Z7B5h68AF/tCcXteEs1HwtVH8EvbSqYBts0s3Z5CSjx1eoLG3IAZopjl+fYP0L3Lj3xFiGTRGq6gawBd/OepzBcNHt8bnCWKVzi76jo41U6lDxLmvGCAmxvf0uJr8Bo31qf27UgHwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"lab",title:"lab",src:"/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png",srcSet:["/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/7fc1e/lab.png 288w","/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(c.b)(m,{mdxType:"Row"},Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"Demo Narration",href:"https://ibm-cloud-architecture.github.io/refarch-dba/use-cases/accounts-pay/#full-demo-narration",author:"Sales Pitch used in the Demo",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVQ4y42TTUhUURTH333v3fmesRnHcZSZnLFBzI+yMc0ca8ZMF40I9oGBUVPhTlu1S4I0XASRlRSU7hSxRYgGtUmCgqhFy9wGBW5yVVHR4tdz3tQ4OYQPDve+c8/5/8+noigK25EyT4QSR/kmncieHluQQEl0s21xAKGo2bOiMozHoRFw1VAX6kJT9b82Nt3NcN9DTvVlCJT7CwF9/jIa4y243J4C4HDqDgcys1THqtH+6IVJZtHcJFqP0toWx+v1FQK2p7pJ9qTRLbrhaCceuojF0Jd2TXP4JjRfe03L4AjhUMiwV/OkQmCR+taUA8FKdGnP3qVq53zTSzJ1S3Sl39B76zun59domVul/fYM0V0RFBnEVXMBazBlgMpCQFU1GYXBpogNpZOxM2+ZHf3M5LmvXBn6wcjMGgNL79m/8JTqhjqEczfO2CDS24DQHf9pijC7l6y9xOLdj6y+gndzvxi6us7J55/onF8mWt+YD+Bff4fdxdjYOIuLj2mKx03DXCcdSozh/mleTMGxzvv4hidoXnhGzd49OXINKSXeHSVoWq6OXk+A6alHbHw/v8GRRDr7oGv5ujRWnCDmazLHKNFNRaQq96ZhtTpIJNPYrVphyqmDvfT3ZLBJjzm0BrtQpSGmYVX5Pi73LVPrb8v+a5ole6Z7B5h68AF/tCcXteEs1HwtVH8EvbSqYBts0s3Z5CSjx1eoLG3IAZopjl+fYP0L3Lj3xFiGTRGq6gawBd/OepzBcNHt8bnCWKVzi76jo41U6lDxLmvGCAmxvf0uJr8Bo31qf27UgHwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"lab",title:"lab",src:"/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png",srcSet:["/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/7fc1e/lab.png 288w","/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(c.b)("hr",null),Object(c.b)("h2",null,"101 Live Demo (Shared Environment)"),Object(c.b)("p",null,"Are you looking for quick live demos using a shared environment? You are on the right place. Open the assets below to know how to deliver the 101 Demo."),Object(c.b)(m,{mdxType:"Row"},Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"Acessing your Shared Demo Environment",href:" https://pages.github.ibm.com/demohub/wiab/cookbooks/reqcp4i-2020-1/",author:"Steps to access your CP4I Demo Environment",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIElEQVQozzWS7U8SARzH711vetOL3vaqv6A128qyVmuVaZYzWlljLitKU9eDVjM1SsqoZg+kPZEOrTRqoSCiUkJggHDHwx1wAsrdcdwd3PEYB7Uebm1t3zffF599v7/fvkAsRvE8n8sVGIYL+IMulyeIRvAYHY/T2Wxerdb09z/0Qg7QubDosE5Pz0xM6ruu36yqrGkQnwacSDSdyZaKJZJkEATFYxRO0JEoKdhEgmUYVi7vn5udRoNer9tpWzBPTmge3L1XW3VQfLwBaL/xyPD525/fv9LpHEmxGEFjeFzgaTrJMMl8vuBwQAMDg0uoDwLtEGhDYBB02VSqkba2y0Bj07VhjVkILxQKFM0RMUYgYyQjkIkExyYz+Rw/PqbWaSdCKBxZQgg8shLyLmiHjZoRwO5d/mD2f3EEfpb4dCbPMCmKFtom/4kV+Gy2wLKpoSFVAIHoOIYi4GjnUcebTmXHYWDeCX+y+J+8txJkolQqcqksm0z/h5O5HM9xmfF371tbL1ktJi7FWrQq7a0jy6ZBjUwMXFXcea0D5W+/qqacfOG7cGSKy1DxhJBJxCjjnPF0Q4NIdHRENQyD5lgU9pgn1e2VmGXYp+0DLnY2t1zr7xuzdA19gfwrP4p8JpPn+R9ut+/ihcubyjY3NbVO6XThIBSCZgKLBoJYsWsUro/3MWgSEJ+r3rO79rz0+eAM3PXcwBeLRb707JmyomLXzl17pdJei8W0aDVA9vkIvIAszoZDfo/bZTLqnyoUwLHGyi0btu2oOaP8uvxSC05ops6ckuzbX9Pc0qYWJqIbN5uMwYBPeHV4CREU8HsIAodhj9E4C1QfOLhm1dorspfTVrfklGRb+c6enpt227dQEA2g9uaeQ4oXfSBow7EQFcdCKEJiQRL5FA0jHMsA28v3yuWPpVLZ1vIdtXWihwP3zQ6tUiN7Y+iVdFatK1st6ahTKHv1et3sjJ6KrxS/4zlMHQXVLI0Dr16P1teL64+LVSMqP+Kbs4+13ha1yEQn2ivK9qyvPrmxsaOq48ZZh83e3d0z9nY0kybp8Hzc2stzS38BXJYx1SXNPFAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cookbook",title:"cookbook",src:"/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/739ea/cookbook.png",srcSet:["/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/7fc1e/cookbook.png 288w","/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/739ea/cookbook.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"101 Demo Guided Tour",href:"https://ibm-cloud-architecture.github.io/refarch-dba/use-cases/accounts-pay/#use-case-guided-tour",author:"How to navigate in the Demo",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVQ4y42TTUhUURTH333v3fmesRnHcZSZnLFBzI+yMc0ca8ZMF40I9oGBUVPhTlu1S4I0XASRlRSU7hSxRYgGtUmCgqhFy9wGBW5yVVHR4tdz3tQ4OYQPDve+c8/5/8+noigK25EyT4QSR/kmncieHluQQEl0s21xAKGo2bOiMozHoRFw1VAX6kJT9b82Nt3NcN9DTvVlCJT7CwF9/jIa4y243J4C4HDqDgcys1THqtH+6IVJZtHcJFqP0toWx+v1FQK2p7pJ9qTRLbrhaCceuojF0Jd2TXP4JjRfe03L4AjhUMiwV/OkQmCR+taUA8FKdGnP3qVq53zTSzJ1S3Sl39B76zun59domVul/fYM0V0RFBnEVXMBazBlgMpCQFU1GYXBpogNpZOxM2+ZHf3M5LmvXBn6wcjMGgNL79m/8JTqhjqEczfO2CDS24DQHf9pijC7l6y9xOLdj6y+gndzvxi6us7J55/onF8mWt+YD+Bff4fdxdjYOIuLj2mKx03DXCcdSozh/mleTMGxzvv4hidoXnhGzd49OXINKSXeHSVoWq6OXk+A6alHbHw/v8GRRDr7oGv5ujRWnCDmazLHKNFNRaQq96ZhtTpIJNPYrVphyqmDvfT3ZLBJjzm0BrtQpSGmYVX5Pi73LVPrb8v+a5ole6Z7B5h68AF/tCcXteEs1HwtVH8EvbSqYBts0s3Z5CSjx1eoLG3IAZopjl+fYP0L3Lj3xFiGTRGq6gawBd/OepzBcNHt8bnCWKVzi76jo41U6lDxLmvGCAmxvf0uJr8Bo31qf27UgHwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"lab",title:"lab",src:"/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png",srcSet:["/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/7fc1e/lab.png 288w","/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"Demo Narration",href:"https://ibm-cloud-architecture.github.io/refarch-dba/use-cases/accounts-pay/#full-demo-narration",author:"Sales Pitch used in the Demo",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVQ4y42TTUhUURTH333v3fmesRnHcZSZnLFBzI+yMc0ca8ZMF40I9oGBUVPhTlu1S4I0XASRlRSU7hSxRYgGtUmCgqhFy9wGBW5yVVHR4tdz3tQ4OYQPDve+c8/5/8+noigK25EyT4QSR/kmncieHluQQEl0s21xAKGo2bOiMozHoRFw1VAX6kJT9b82Nt3NcN9DTvVlCJT7CwF9/jIa4y243J4C4HDqDgcys1THqtH+6IVJZtHcJFqP0toWx+v1FQK2p7pJ9qTRLbrhaCceuojF0Jd2TXP4JjRfe03L4AjhUMiwV/OkQmCR+taUA8FKdGnP3qVq53zTSzJ1S3Sl39B76zun59domVul/fYM0V0RFBnEVXMBazBlgMpCQFU1GYXBpogNpZOxM2+ZHf3M5LmvXBn6wcjMGgNL79m/8JTqhjqEczfO2CDS24DQHf9pijC7l6y9xOLdj6y+gndzvxi6us7J55/onF8mWt+YD+Bff4fdxdjYOIuLj2mKx03DXCcdSozh/mleTMGxzvv4hidoXnhGzd49OXINKSXeHSVoWq6OXk+A6alHbHw/v8GRRDr7oGv5ujRWnCDmazLHKNFNRaQq96ZhtTpIJNPYrVphyqmDvfT3ZLBJjzm0BrtQpSGmYVX5Pi73LVPrb8v+a5ole6Z7B5h68AF/tCcXteEs1HwtVH8EvbSqYBts0s3Z5CSjx1eoLG3IAZopjl+fYP0L3Lj3xFiGTRGq6gawBd/OepzBcNHt8bnCWKVzi76jo41U6lDxLmvGCAmxvf0uJr8Bo31qf27UgHwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"lab",title:"lab",src:"/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png",srcSet:["/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/7fc1e/lab.png 288w","/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(c.b)("hr",null),Object(c.b)("h2",null,"301 Live Demo (Own Environment)"),Object(c.b)("p",null,"Do you want this demo in your own environment? Check the assets below to know how to deliver 301 Demo (custom live demos)."),Object(c.b)(m,{mdxType:"Row"},Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"Requesting your Demo Environment",href:" https://pages.github.ibm.com/demohub/wiab/cookbooks/reqcp4i-2020-1/",author:"Steps to request your CP4I Demo Environment",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIElEQVQozzWS7U8SARzH711vetOL3vaqv6A128qyVmuVaZYzWlljLitKU9eDVjM1SsqoZg+kPZEOrTRqoSCiUkJggHDHwx1wAsrdcdwd3PEYB7Uebm1t3zffF599v7/fvkAsRvE8n8sVGIYL+IMulyeIRvAYHY/T2Wxerdb09z/0Qg7QubDosE5Pz0xM6ruu36yqrGkQnwacSDSdyZaKJZJkEATFYxRO0JEoKdhEgmUYVi7vn5udRoNer9tpWzBPTmge3L1XW3VQfLwBaL/xyPD525/fv9LpHEmxGEFjeFzgaTrJMMl8vuBwQAMDg0uoDwLtEGhDYBB02VSqkba2y0Bj07VhjVkILxQKFM0RMUYgYyQjkIkExyYz+Rw/PqbWaSdCKBxZQgg8shLyLmiHjZoRwO5d/mD2f3EEfpb4dCbPMCmKFtom/4kV+Gy2wLKpoSFVAIHoOIYi4GjnUcebTmXHYWDeCX+y+J+8txJkolQqcqksm0z/h5O5HM9xmfF371tbL1ktJi7FWrQq7a0jy6ZBjUwMXFXcea0D5W+/qqacfOG7cGSKy1DxhJBJxCjjnPF0Q4NIdHRENQyD5lgU9pgn1e2VmGXYp+0DLnY2t1zr7xuzdA19gfwrP4p8JpPn+R9ut+/ihcubyjY3NbVO6XThIBSCZgKLBoJYsWsUro/3MWgSEJ+r3rO79rz0+eAM3PXcwBeLRb707JmyomLXzl17pdJei8W0aDVA9vkIvIAszoZDfo/bZTLqnyoUwLHGyi0btu2oOaP8uvxSC05ops6ckuzbX9Pc0qYWJqIbN5uMwYBPeHV4CREU8HsIAodhj9E4C1QfOLhm1dorspfTVrfklGRb+c6enpt227dQEA2g9uaeQ4oXfSBow7EQFcdCKEJiQRL5FA0jHMsA28v3yuWPpVLZ1vIdtXWihwP3zQ6tUiN7Y+iVdFatK1st6ahTKHv1et3sjJ6KrxS/4zlMHQXVLI0Dr16P1teL64+LVSMqP+Kbs4+13ha1yEQn2ivK9qyvPrmxsaOq48ZZh83e3d0z9nY0kybp8Hzc2stzS38BXJYx1SXNPFAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cookbook",title:"cookbook",src:"/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/739ea/cookbook.png",srcSet:["/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/7fc1e/cookbook.png 288w","/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/739ea/cookbook.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"Configuring your Environment",href:"https://pages.github.ibm.com/demox/cloudpak-integration/pdf/carrepair-v0.1.pdf",author:"Pre-Requisitis and steps to configure your Demo Environment",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIElEQVQozzWS7U8SARzH711vetOL3vaqv6A128qyVmuVaZYzWlljLitKU9eDVjM1SsqoZg+kPZEOrTRqoSCiUkJggHDHwx1wAsrdcdwd3PEYB7Uebm1t3zffF599v7/fvkAsRvE8n8sVGIYL+IMulyeIRvAYHY/T2Wxerdb09z/0Qg7QubDosE5Pz0xM6ruu36yqrGkQnwacSDSdyZaKJZJkEATFYxRO0JEoKdhEgmUYVi7vn5udRoNer9tpWzBPTmge3L1XW3VQfLwBaL/xyPD525/fv9LpHEmxGEFjeFzgaTrJMMl8vuBwQAMDg0uoDwLtEGhDYBB02VSqkba2y0Bj07VhjVkILxQKFM0RMUYgYyQjkIkExyYz+Rw/PqbWaSdCKBxZQgg8shLyLmiHjZoRwO5d/mD2f3EEfpb4dCbPMCmKFtom/4kV+Gy2wLKpoSFVAIHoOIYi4GjnUcebTmXHYWDeCX+y+J+8txJkolQqcqksm0z/h5O5HM9xmfF371tbL1ktJi7FWrQq7a0jy6ZBjUwMXFXcea0D5W+/qqacfOG7cGSKy1DxhJBJxCjjnPF0Q4NIdHRENQyD5lgU9pgn1e2VmGXYp+0DLnY2t1zr7xuzdA19gfwrP4p8JpPn+R9ut+/ihcubyjY3NbVO6XThIBSCZgKLBoJYsWsUro/3MWgSEJ+r3rO79rz0+eAM3PXcwBeLRb707JmyomLXzl17pdJei8W0aDVA9vkIvIAszoZDfo/bZTLqnyoUwLHGyi0btu2oOaP8uvxSC05ops6ckuzbX9Pc0qYWJqIbN5uMwYBPeHV4CREU8HsIAodhj9E4C1QfOLhm1dorspfTVrfklGRb+c6enpt227dQEA2g9uaeQ4oXfSBow7EQFcdCKEJiQRL5FA0jHMsA28v3yuWPpVLZ1vIdtXWihwP3zQ6tUiN7Y+iVdFatK1st6ahTKHv1et3sjJ6KrxS/4zlMHQXVLI0Dr16P1teL64+LVSMqP+Kbs4+13ha1yEQn2ivK9qyvPrmxsaOq48ZZh83e3d0z9nY0kybp8Hzc2stzS38BXJYx1SXNPFAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cookbook",title:"cookbook",src:"/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/739ea/cookbook.png",srcSet:["/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/7fc1e/cookbook.png 288w","/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/739ea/cookbook.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"Demo Artifacts",href:"https://github.com/IBM/cp4i-demos/tree/main/cognitive-car-insurance-claims",author:"Demo Artifacts used in the Demo",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIElEQVQozzWS7U8SARzH711vetOL3vaqv6A128qyVmuVaZYzWlljLitKU9eDVjM1SsqoZg+kPZEOrTRqoSCiUkJggHDHwx1wAsrdcdwd3PEYB7Uebm1t3zffF599v7/fvkAsRvE8n8sVGIYL+IMulyeIRvAYHY/T2Wxerdb09z/0Qg7QubDosE5Pz0xM6ruu36yqrGkQnwacSDSdyZaKJZJkEATFYxRO0JEoKdhEgmUYVi7vn5udRoNer9tpWzBPTmge3L1XW3VQfLwBaL/xyPD525/fv9LpHEmxGEFjeFzgaTrJMMl8vuBwQAMDg0uoDwLtEGhDYBB02VSqkba2y0Bj07VhjVkILxQKFM0RMUYgYyQjkIkExyYz+Rw/PqbWaSdCKBxZQgg8shLyLmiHjZoRwO5d/mD2f3EEfpb4dCbPMCmKFtom/4kV+Gy2wLKpoSFVAIHoOIYi4GjnUcebTmXHYWDeCX+y+J+8txJkolQqcqksm0z/h5O5HM9xmfF371tbL1ktJi7FWrQq7a0jy6ZBjUwMXFXcea0D5W+/qqacfOG7cGSKy1DxhJBJxCjjnPF0Q4NIdHRENQyD5lgU9pgn1e2VmGXYp+0DLnY2t1zr7xuzdA19gfwrP4p8JpPn+R9ut+/ihcubyjY3NbVO6XThIBSCZgKLBoJYsWsUro/3MWgSEJ+r3rO79rz0+eAM3PXcwBeLRb707JmyomLXzl17pdJei8W0aDVA9vkIvIAszoZDfo/bZTLqnyoUwLHGyi0btu2oOaP8uvxSC05ops6ckuzbX9Pc0qYWJqIbN5uMwYBPeHV4CREU8HsIAodhj9E4C1QfOLhm1dorspfTVrfklGRb+c6enpt227dQEA2g9uaeQ4oXfSBow7EQFcdCKEJiQRL5FA0jHMsA28v3yuWPpVLZ1vIdtXWihwP3zQ6tUiN7Y+iVdFatK1st6ahTKHv1et3sjJ6KrxS/4zlMHQXVLI0Dr16P1teL64+LVSMqP+Kbs4+13ha1yEQn2ivK9qyvPrmxsaOq48ZZh83e3d0z9nY0kybp8Hzc2stzS38BXJYx1SXNPFAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cookbook",title:"cookbook",src:"/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/739ea/cookbook.png",srcSet:["/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/7fc1e/cookbook.png 288w","/cp4i-demohub/static/e5f6ce33cbbb51880de510f6b9a298d7/739ea/cookbook.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(c.b)(m,{mdxType:"Row"},Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"301 Demo Guided Tour",href:"https://ibm-cloud-architecture.github.io/refarch-dba/use-cases/accounts-pay/#use-case-guided-tour",author:"How to navigate in the Demo",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVQ4y42TTUhUURTH333v3fmesRnHcZSZnLFBzI+yMc0ca8ZMF40I9oGBUVPhTlu1S4I0XASRlRSU7hSxRYgGtUmCgqhFy9wGBW5yVVHR4tdz3tQ4OYQPDve+c8/5/8+noigK25EyT4QSR/kmncieHluQQEl0s21xAKGo2bOiMozHoRFw1VAX6kJT9b82Nt3NcN9DTvVlCJT7CwF9/jIa4y243J4C4HDqDgcys1THqtH+6IVJZtHcJFqP0toWx+v1FQK2p7pJ9qTRLbrhaCceuojF0Jd2TXP4JjRfe03L4AjhUMiwV/OkQmCR+taUA8FKdGnP3qVq53zTSzJ1S3Sl39B76zun59domVul/fYM0V0RFBnEVXMBazBlgMpCQFU1GYXBpogNpZOxM2+ZHf3M5LmvXBn6wcjMGgNL79m/8JTqhjqEczfO2CDS24DQHf9pijC7l6y9xOLdj6y+gndzvxi6us7J55/onF8mWt+YD+Bff4fdxdjYOIuLj2mKx03DXCcdSozh/mleTMGxzvv4hidoXnhGzd49OXINKSXeHSVoWq6OXk+A6alHbHw/v8GRRDr7oGv5ujRWnCDmazLHKNFNRaQq96ZhtTpIJNPYrVphyqmDvfT3ZLBJjzm0BrtQpSGmYVX5Pi73LVPrb8v+a5ole6Z7B5h68AF/tCcXteEs1HwtVH8EvbSqYBts0s3Z5CSjx1eoLG3IAZopjl+fYP0L3Lj3xFiGTRGq6gawBd/OepzBcNHt8bnCWKVzi76jo41U6lDxLmvGCAmxvf0uJr8Bo31qf27UgHwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"lab",title:"lab",src:"/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png",srcSet:["/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/7fc1e/lab.png 288w","/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(g,{color:"dark",title:"Demo Narration",href:"https://ibm-cloud-architecture.github.io/refarch-dba/use-cases/accounts-pay/#full-demo-narration",author:"Sales Pitch used in the Demo",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVQ4y42TTUhUURTH333v3fmesRnHcZSZnLFBzI+yMc0ca8ZMF40I9oGBUVPhTlu1S4I0XASRlRSU7hSxRYgGtUmCgqhFy9wGBW5yVVHR4tdz3tQ4OYQPDve+c8/5/8+noigK25EyT4QSR/kmncieHluQQEl0s21xAKGo2bOiMozHoRFw1VAX6kJT9b82Nt3NcN9DTvVlCJT7CwF9/jIa4y243J4C4HDqDgcys1THqtH+6IVJZtHcJFqP0toWx+v1FQK2p7pJ9qTRLbrhaCceuojF0Jd2TXP4JjRfe03L4AjhUMiwV/OkQmCR+taUA8FKdGnP3qVq53zTSzJ1S3Sl39B76zun59domVul/fYM0V0RFBnEVXMBazBlgMpCQFU1GYXBpogNpZOxM2+ZHf3M5LmvXBn6wcjMGgNL79m/8JTqhjqEczfO2CDS24DQHf9pijC7l6y9xOLdj6y+gndzvxi6us7J55/onF8mWt+YD+Bff4fdxdjYOIuLj2mKx03DXCcdSozh/mleTMGxzvv4hidoXnhGzd49OXINKSXeHSVoWq6OXk+A6alHbHw/v8GRRDr7oGv5ujRWnCDmazLHKNFNRaQq96ZhtTpIJNPYrVphyqmDvfT3ZLBJjzm0BrtQpSGmYVX5Pi73LVPrb8v+a5ole6Z7B5h68AF/tCcXteEs1HwtVH8EvbSqYBts0s3Z5CSjx1eoLG3IAZopjl+fYP0L3Lj3xFiGTRGq6gawBd/OepzBcNHt8bnCWKVzi76jo41U6lDxLmvGCAmxvf0uJr8Bo31qf27UgHwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"lab",title:"lab",src:"/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png",srcSet:["/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/7fc1e/lab.png 288w","/cp4i-demohub/static/3f2d5443e324f2ebef55db806cd884b1/739ea/lab.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepair-new-deliver-mdx-c166d16032f13daf5448.js.map