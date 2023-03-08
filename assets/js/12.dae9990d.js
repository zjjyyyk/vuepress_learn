(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{285:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"如果我要加入一段刚写的博客-怎么做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果我要加入一段刚写的博客-怎么做"}},[t._v("#")]),t._v(" 如果我要加入一段刚写的博客，怎么做？")]),t._v(" "),a("p",[t._v("要添加一篇新的博客文章到 VuePress 1.x 网站中，请按照以下步骤进行操作：")]),t._v(" "),a("h2",{attrs:{id:"步骤1-创建博客文章文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤1-创建博客文章文件"}},[t._v("#")]),t._v(" 步骤1：创建博客文章文件")]),t._v(" "),a("p",[t._v("在 docs 文件夹中的某一分类文件夹中创建一个新的 Markdown 文件，例如 在new-category文件夹下的my-new-blog-post.md。")]),t._v(" "),a("h2",{attrs:{id:"步骤2-编写博客文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤2-编写博客文章"}},[t._v("#")]),t._v(" 步骤2：编写博客文章")]),t._v(" "),a("p",[t._v("使用 Markdown 语法编写您的博客文章。您可以添加标题、段落、列表、代码块、链接等等。具体语法可见"),a("a",{attrs:{href:"https://markdown.com.cn/basic-syntax/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown 基本语法 | Markdown 官方教程"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"步骤3-配置博客文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤3-配置博客文章"}},[t._v("#")]),t._v(" 步骤3：配置博客文章")]),t._v(" "),a("p",[t._v("在您的博客文章开头，您需要添加一些特殊的 YAML 前置元数据。这个元数据可以设置文章的标题、日期、标签等等。以下是一个示例：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" My New Blog Post\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2023-03-07")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" VuePress\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Blogging\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("h2",{attrs:{id:"步骤4-在侧边栏中添加博客文章链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤4-在侧边栏中添加博客文章链接"}},[t._v("#")]),t._v(" 步骤4：在侧边栏中添加博客文章链接")]),t._v(" "),a("p",[t._v("打开您的 .vuepress/config.js 文件，并在 sidebar 配置中添加您的新博客文章链接。例如：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sidebar")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/use-vuepress/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add-blog'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/chatgpt/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'art1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'art2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/new-category/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-new-blog-post'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use-vuepress/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chatgpt/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new-category'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("如果这是这个文件夹下的第一遍博客，那还需要更新一下上面的script.js，并且在该文件夹里额外补充一个README.md")])]),t._v(" "),a("h2",{attrs:{id:"步骤5-重新启动vuepress以查看效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤5-重新启动vuepress以查看效果"}},[t._v("#")]),t._v(" 步骤5：重新启动VuePress以查看效果")]),t._v(" "),a("p",[t._v("在终端中，使用以下命令重新启动 VuePress，以更新站点并查看您的新博客文章：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 调试")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" docs:dev\n")])])]),a("p",[t._v("现在您的新博客文章已经添加到您的 VuePress 1.x 网站中了。您可以在浏览器中导航到您的博客文章链接，以查看它们的内容。")]),t._v(" "),a("h2",{attrs:{id:"步骤6-将更新同步到github-pages上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤6-将更新同步到github-pages上"}},[t._v("#")]),t._v(" 步骤6：将更新同步到github pages上")]),t._v(" "),a("p",[t._v("由于已经配置了github action，只需要通过git 提交并上传到github即可")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" *\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<commit info>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("p",[t._v("过一会即可在 "),a("a",{attrs:{href:"https://zjjyyyk.github.io/vuepress_learn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客主页"),a("OutboundLink")],1),t._v(" 查看到新写的博客了")])])}),[],!1,null,null,null);s.default=r.exports}}]);