"use strict";(self.webpackChunkgotrongluan=self.webpackChunkgotrongluan||[]).push([[842],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(o),d=n,g=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return o?a.createElement(g,i(i({ref:t},u),{},{components:o})):a.createElement(g,i({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8721:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=o(7462),n=(o(7294),o(3905));const r={title:"How to create your github.io page",description:"Simple guide how to create your github.io page",authors:"gotrongluan",tag:"github-pages"},i=void 0,p={permalink:"/2023/how-to-create-github-pages",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023/how-to-create-github-pages/index.md",source:"@site/blog/2023/how-to-create-github-pages/index.md",title:"How to create your github.io page",description:"Simple guide how to create your github.io page",date:"2023-01-23T11:24:43.000Z",formattedDate:"January 23, 2023",tags:[],readingTime:1.8,hasTruncateMarker:!1,authors:[{name:"Luan Nguyen Trong",title:"Senior FE Engineer @ Shopee",url:"https://github.com/gotrongluan",imageURL:"https://github.com/gotrongluan.png",key:"gotrongluan"}],frontMatter:{title:"How to create your github.io page",description:"Simple guide how to create your github.io page",authors:"gotrongluan",tag:"github-pages"},nextItem:{title:"Finally, I have a blog site",permalink:"/2023/01/23/finally-i-have-a-blog-site"}},l={authorsImageUrls:[void 0]},s=[{value:"Create a public repository",id:"create-a-public-repository",level:2},{value:"Publish your code to the repository",id:"publish-your-code-to-the-repository",level:2},{value:"Specify the deployed branch",id:"specify-the-deployed-branch",level:2},{value:"Set the deployed branch",id:"set-the-deployed-branch",level:2},{value:"Visit your website",id:"visit-your-website",level:2},{value:"Next step",id:"next-step",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"What should you do to have your personal github.io page, check my blog!"),(0,n.kt)("p",null,"As a software engineer, we should have our personal blog page, to make companies impress about us. You can choose lots of options to write and deploy your blog. For me, I used ",(0,n.kt)("strong",{parentName:"p"},"Docusaurus")," to write my blog, and use ",(0,n.kt)("strong",{parentName:"p"},"Github Pages")," to host it. This article will show you the simple way to create your github page."),(0,n.kt)("h2",{id:"create-a-public-repository"},"Create a public repository"),(0,n.kt)("p",null,"Open ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/new"},"github.com/new")," to create a new public repository. Give it the name ",(0,n.kt)("inlineCode",{parentName:"p"},"<your_name>.github.io"),"."),(0,n.kt)("h2",{id:"publish-your-code-to-the-repository"},"Publish your code to the repository"),(0,n.kt)("p",null,"After your ",(0,n.kt)("inlineCode",{parentName:"p"},"<your_name>.github.io")," repository is created, jumping to the ",(0,n.kt)("strong",{parentName:"p"},"Code")," tab in repository detail page. Then, you can follow the instructions to publish your code to the repo."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Guide",src:o(8517).Z,width:"2444",height:"1352"})),(0,n.kt)("p",null,"Mostly, your personal website includes HTML, CSS and Javascript. These can be result after building your application by running ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn build")," (you can have a React with Webpack config, or Docusaurus project before). Make sure the ",(0,n.kt)("inlineCode",{parentName:"p"},"index.html")," file as the root of the repo."),(0,n.kt)("h2",{id:"specify-the-deployed-branch"},"Specify the deployed branch"),(0,n.kt)("p",null,"You have to decide which branch your code will be deployed. For example, you can have multiple branches ",(0,n.kt)("inlineCode",{parentName:"p"},"master"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"draft"),", but you deploy the ",(0,n.kt)("inlineCode",{parentName:"p"},"master")," branch only. Choose one branch as deploy branch and come to the next step!"),(0,n.kt)("h2",{id:"set-the-deployed-branch"},"Set the deployed branch"),(0,n.kt)("p",null,"Open repository detail page and click the ",(0,n.kt)("strong",{parentName:"p"},"Settings")," tab. Under ",(0,n.kt)("strong",{parentName:"p"},"Code and automation")," section, click on the ",(0,n.kt)("strong",{parentName:"p"},"Pages")," item. You will see a similar image like this is shown"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pages Setting",src:o(7316).Z,width:"2190",height:"1178"})),(0,n.kt)("p",null,"Under ",(0,n.kt)("strong",{parentName:"p"},"Build and deployment")," section:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),": Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"Deploy from a branch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Branch"),": Select the ",(0,n.kt)("inlineCode",{parentName:"li"},"branch")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"folder")," to serve your static files")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Assume you set ",(0,n.kt)("inlineCode",{parentName:"p"},"branch")," as ",(0,n.kt)("inlineCode",{parentName:"p"},"master"),", and set ",(0,n.kt)("inlineCode",{parentName:"p"},"folder")," as ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs"),", then the files under the ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs")," folder of your ",(0,n.kt)("inlineCode",{parentName:"p"},"master")," branch code will be your website files, and the root index HTML file is ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs/index.html"))),(0,n.kt)("h2",{id:"visit-your-website"},"Visit your website"),(0,n.kt)("p",null,"Now, you can see your website at the link ",(0,n.kt)("inlineCode",{parentName:"p"},"https://<your_name>.github.io/"),", sometimes after you deploy the code, your changes haven't been affected immediately, you can wait some minutes (up to 10 minutes according this ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site"},"doc"),")."),(0,n.kt)("h2",{id:"next-step"},"Next step"),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages"},"Github pages")))}c.isMDXComponent=!0},8517:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/git_guide-0bab149d4875a42f3af7a685fb61132f.png"},7316:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/git_page_guide-144a4cfa0baafef29ea33bb504a1fa32.png"}}]);