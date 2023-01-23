"use strict";(self.webpackChunkgotrongluan=self.webpackChunkgotrongluan||[]).push([[765],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const i={title:"Some insights about Docusaurus",description:"My personal thinkings after learning Docusaurus and building the blog page in 4 hours",authors:"gotrongluan",tags:["Docusaurus"]},l=void 0,r={permalink:"/2023/01/23/some-thinkings-about-docusaurus",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023/01/23/some-thinkings-about-docusaurus/index.md",source:"@site/blog/2023/01/23/some-thinkings-about-docusaurus/index.md",title:"Some insights about Docusaurus",description:"My personal thinkings after learning Docusaurus and building the blog page in 4 hours",date:"2023-01-23T00:00:00.000Z",formattedDate:"January 23, 2023",tags:[{label:"Docusaurus",permalink:"/tags/docusaurus"}],readingTime:6.31,hasTruncateMarker:!0,authors:[{name:"Luan Nguyen Trong",title:"Senior FE Engineer @ Shopee",url:"https://github.com/gotrongluan",imageURL:"https://github.com/gotrongluan.png",key:"gotrongluan"}],frontMatter:{title:"Some insights about Docusaurus",description:"My personal thinkings after learning Docusaurus and building the blog page in 4 hours",authors:"gotrongluan",tags:["Docusaurus"]},prevItem:{title:"Finally, I have a blog site",permalink:"/2023/01/23/finally-i-have-a-blog-site"}},s={authorsImageUrls:[void 0]},u=[{value:"What is Docusaurus?",id:"what-is-docusaurus",level:2},{value:"Some notable things about Docusaurus",id:"some-notable-things-about-docusaurus",level:2},{value:"Easily create a new project",id:"easily-create-a-new-project",level:3},{value:"Start writing documents and test locally immediately",id:"start-writing-documents-and-test-locally-immediately",level:3},{value:"Good concepts",id:"good-concepts",level:3},{value:"Good and intutive folder structure",id:"good-and-intutive-folder-structure",level:3},{value:"Automatically build blog pages",id:"automatically-build-blog-pages",level:3},{value:"Easy to custom and config",id:"easy-to-custom-and-config",level:3},{value:"Powerful front matter in markdown",id:"powerful-front-matter-in-markdown",level:3},{value:"Global authors mapping file",id:"global-authors-mapping-file",level:3},{value:"Other good points",id:"other-good-points",level:3},{value:"Conclusion about Docusaurus",id:"conclusion-about-docusaurus",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What do I think about Docusaurus after building my blog page with it :D"),(0,o.kt)("h2",{id:"what-is-docusaurus"},"What is Docusaurus?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},(0,o.kt)("strong",{parentName:"a"},"Docusaurus"))," is a Facebook open-source framework allow you to build a content-centric website, such as document site, personal blog, landing page... with a fast, eligible and good developer experience way. It supports lots of out-of-the-box features to help you do that."),(0,o.kt)("h2",{id:"some-notable-things-about-docusaurus"},"Some notable things about Docusaurus"),(0,o.kt)("h3",{id:"easily-create-a-new-project"},"Easily create a new project"),(0,o.kt)("p",null,"I can easily create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Docusaurus")," project by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"create-docusaurus")," cli:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create docusaurus <project_name> classic --typescript\n")),(0,o.kt)("p",null,"This command scaffolds the Docusaurus project. It does some set up like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up some configurations like ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"babel.config.js")),(0,o.kt)("li",{parentName:"ul"},"Install neccessary dependencies"),(0,o.kt)("li",{parentName:"ul"},"Create a default ",(0,o.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," file"),(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," file"),(0,o.kt)("li",{parentName:"ul"},"Create example folders and files like ",(0,o.kt)("inlineCode",{parentName:"li"},"src/pages"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"blog")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"docs")),(0,o.kt)("li",{parentName:"ul"},"Inside ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),", it creates some commands ",(0,o.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"build")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"deploy")),(0,o.kt)("li",{parentName:"ul"},"It sets up css module out of the box\nand more")),(0,o.kt)("h3",{id:"start-writing-documents-and-test-locally-immediately"},"Start writing documents and test locally immediately"),(0,o.kt)("p",null,"After scaffolding the project, you can start to write your documents or blogs immediately without any extra efforts to set up or install. You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," to start the development server and play with it."),(0,o.kt)("p",null,"Docusaurus uses HMR technique, so any changes to your project will reload your local server immediately. "),(0,o.kt)("h3",{id:"good-concepts"},"Good concepts"),(0,o.kt)("p",null,"With Docusaurus, you can create:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Document pages"),(0,o.kt)("li",{parentName:"ul"},"Blog posts"),(0,o.kt)("li",{parentName:"ul"},"Non-document pages")),(0,o.kt)("p",null,"These document types are almost enough when you want to create a content-centric website, and they're supported well by Docusaurus."),(0,o.kt)("h3",{id:"good-and-intutive-folder-structure"},"Good and intutive folder structure"),(0,o.kt)("p",null,"After scaffolding the project, you can look at the folder structure and see that it's organized very clear and well:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs")," contains document pages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blog")," contains blog posts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/pages")," contains custom pages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"static")," contains static assets like images, files")),(0,o.kt)("p",null,"Then, you can add a blog Markdown file inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," folder with name ",(0,o.kt)("inlineCode",{parentName:"p"},"2023-01-23-hello.md")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"2023/01/23/hello.md"),", Docusaurus will generate the that blog page detail, attached with a readable link and especially it shows the blog date as ",(0,o.kt)("inlineCode",{parentName:"p"},"2023-01-23"),". The detail way it resolves the blog post date can be founded ",(0,o.kt)("a",{parentName:"p",href:"https://google.com"},"here"),"."),(0,o.kt)("p",null,"You can add a file ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorld.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorld/index.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorld.md")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages")," folder, Docusaurus will use that JSX/Markdown file to generate a custom page, with the route path as ",(0,o.kt)("inlineCode",{parentName:"p"},"/helloWorld")," (same with folder/file name). This route generation technique is not new but it's very cool and it helps us create pages very fast."),(0,o.kt)("h3",{id:"automatically-build-blog-pages"},"Automatically build blog pages"),(0,o.kt)("p",null,"Which I very love about Docusaurus when building my blog page is I just need to focus on the content of the blog, and let Docusaurus do other things."),(0,o.kt)("p",null,"What I just do is creating a ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," file, give it a name, put the content inside and specify a date for its file name. Then, Docusarus will automatically generate:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A blog posts page with pagination, each post card shows a truncated version of blog content"),(0,o.kt)("li",{parentName:"ul"},"A blog post detail page with metadata like ",(0,o.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"date"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"author"),"..."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"Recent posts")," sidebar")),(0,o.kt)("p",null,"And of course, I can customize the way Docusaurus generate above things for me, like pagination size for blog posts list page, or number of recent posts show in the sidebar."),(0,o.kt)("h3",{id:"easy-to-custom-and-config"},"Easy to custom and config"),(0,o.kt)("p",null,"Because my website is just a blog site, I don't use the ",(0,o.kt)("strong",{parentName:"p"},"document")," feature of Docusaurus. To disable ",(0,o.kt)("strong",{parentName:"p"},"document"),", I can easily specify ",(0,o.kt)("inlineCode",{parentName:"p"},"docs: false")," in the options object of the ",(0,o.kt)("inlineCode",{parentName:"p"},"classic")," preset (inside ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file), and then remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,o.kt)("p",null,"Moreover, I can custom the navigation bar data or footer data by changing ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig")," field inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file. The change will be affected immediately with HMR. Docusaurus will render a beautiful navigation bar and footer, I don't need to add any HTML or CSS code!"),(0,o.kt)("p",null,"More configuration can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/configuration"},"here")),(0,o.kt)("h3",{id:"powerful-front-matter-in-markdown"},"Powerful front matter in markdown"),(0,o.kt)("p",null,"At the top of markdown file, you can specify the metadata of the page like ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"slug")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"author"),". For example, this is the ",(0,o.kt)("inlineCode",{parentName:"p"},"front matter")," of this blog page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Some Thinkings about Docusaurus 2\ndescription: My personal thinkings after learning Docusaurus and building the blog page in 4 hours\nauthors: gotrongluan\ntags: [Docusaurus]\n---\n")),(0,o.kt)("p",null,"Because this is a blog page, so below this ",(0,o.kt)("inlineCode",{parentName:"p"},"front matter"),", I can also set the ",(0,o.kt)("strong",{parentName:"p"},"truncated")," content of this blog, to show in the blog list page. You can use this feature to write summary of your blog post."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Some Thinkings about Docusaurus 2\ndescription: My personal thinkings after learning Docusaurus and building the blog page in 4 hours\nauthors: gotrongluan\ntags: [Docusaurus]\n---\n\nThis is summary of the blog post, this blog is about Docusaurus 2.\n\n\x3c!--truncated--\x3e\n")),(0,o.kt)("p",null,"Remember to use the dedicated comment ",(0,o.kt)("inlineCode",{parentName:"p"},"\x3c!--truncated--\x3e"),", only content above this comment and below the ",(0,o.kt)("inlineCode",{parentName:"p"},"front matter")," will be the summary of the blog."),(0,o.kt)("h3",{id:"global-authors-mapping-file"},"Global authors mapping file"),(0,o.kt)("p",null,"One of the cool feature I like most in Docusaurus is the global authors mapping file, located at ",(0,o.kt)("inlineCode",{parentName:"p"},"authors.yml"),". Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"gotrongluan:\n  name: Luan Nguyen Trong\n  title: Senior FE Engineer @ Shopee\n  url: https://github.com/gotrongluan\n  image_url: https://github.com/gotrongluan.png\n")),(0,o.kt)("p",null,"This file creates the global ",(0,o.kt)("inlineCode",{parentName:"p"},"gotrongluan")," author, and you can refer it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"front matter")," section, by specify just ",(0,o.kt)("inlineCode",{parentName:"p"},"gotrongluan")," name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nauthors: gotrongluan\n---\n")),(0,o.kt)("p",null,"The result is a lovely author card like this"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Author Example",src:a(9573).Z,width:"594",height:"158"})),(0,o.kt)("h3",{id:"other-good-points"},"Other good points"),(0,o.kt)("p",null,"Beside those above points, there're still more good things which Docusaurus brings to us."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Good code conventions: You can read more about Docusaurus document to know more about recommended ways to create blogs or documents, recommended ways to orgarnize the code structure."),(0,o.kt)("li",{parentName:"ul"},"Deploying easily and fast: You just only need to specify the github username, repo and branch (if you deploy to github page), and run the ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn deploy")," command, Docusaurus will help us to deploy our site."),(0,o.kt)("li",{parentName:"ul"},"Building with multiple locales"),(0,o.kt)("li",{parentName:"ul"},"Providing powerful search feature"),(0,o.kt)("li",{parentName:"ul"},"Well and clear documentation")),(0,o.kt)("h3",{id:"conclusion-about-docusaurus"},"Conclusion about Docusaurus"),(0,o.kt)("p",null,"In conclusion, I think Docusaurus is a very powerful and good framework to develop content-centric websites so far. I will use this tool for my blog for now and for document sites I'll build in the future, untils there's a better tool haha."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"My final keywords about Docusaurus:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Help us develop content-centric websites fast"),(0,o.kt)("li",{parentName:"ul"},"Hot Module Reloading"),(0,o.kt)("li",{parentName:"ul"},"Good developer experience"),(0,o.kt)("li",{parentName:"ul"},"Powerful cli"),(0,o.kt)("li",{parentName:"ul"},"Easy to config, flexible, never block us to do anything"),(0,o.kt)("li",{parentName:"ul"},"Support both React and Markdown"),(0,o.kt)("li",{parentName:"ul"},"Route generation"),(0,o.kt)("li",{parentName:"ul"},"JAMStack architecture"),(0,o.kt)("li",{parentName:"ul"},"Static Site Generator (SSG) technique, prebuilt markup files"),(0,o.kt)("li",{parentName:"ul"},"Single page application with Client Side Rendering"))),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"After inspecting my blog page built by Docusaurus, I found a interesting behavior.\nIf I first come to the blog post ",(0,o.kt)("inlineCode",{parentName:"p"},"/finally-i-have-a-blog-site"),", it fetches:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Development")," mode:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"finally-i-have-a-blog-site/index.html")," file like a SPA ",(0,o.kt)("inlineCode",{parentName:"li"},"index.html")," file"),(0,o.kt)("li",{parentName:"ul"},"Some JS files, and there's a JS file to render the ",(0,o.kt)("inlineCode",{parentName:"li"},"finally-i-have-a-blog-site")," page"),(0,o.kt)("li",{parentName:"ul"},"When hovering the menu side bar, hovering the ",(0,o.kt)("inlineCode",{parentName:"li"},"Some insights about Docusaurus"),", it loads the JS file ",(0,o.kt)("inlineCode",{parentName:"li"},"content---2023-01-23-some-thinkings-about-docusaurus-62-d-4c3.js"),", this file looks like it render the content of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Some insights about Docusaurus")," blog post (CSR)."),(0,o.kt)("li",{parentName:"ul"},"When navigating to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Some insights about Docusaurus")," blog, no HTML file is loaded, seems the JS file above will render the content.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Production")," mode\nNothing different with the ",(0,o.kt)("strong",{parentName:"li"},"development")," mode except the ",(0,o.kt)("inlineCode",{parentName:"li"},"finally-i-have-a-blog-site/index.html")," file, it is embedded with content of the blog, for better performance (first contentful bit rendered faster).")),(0,o.kt)("p",null,"I will investigate more about this behavior of Docusaurus!"))}d.isMDXComponent=!0},9573:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/author_example-d0afd3c9de5c683c8e26640abeff07a7.png"}}]);