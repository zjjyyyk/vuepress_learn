---
title: 如何加入一篇博客
date: 2023-03-07
tags:
  - VuePress
  - Blogging
---

# 如果我要加入一段刚写的博客，怎么做？
要添加一篇新的博客文章到 VuePress 1.x 网站中，请按照以下步骤进行操作：

## 步骤1：创建博客文章文件

在 docs 文件夹中的某一分类文件夹中创建一个新的 Markdown 文件，例如 在new-category文件夹下的my-new-blog-post.md。

## 步骤2：编写博客文章

使用 Markdown 语法编写您的博客文章。您可以添加标题、段落、列表、代码块、链接等等。具体语法可见[Markdown 基本语法 | Markdown 官方教程](https://markdown.com.cn/basic-syntax/)

## 步骤3：配置博客文章

在您的博客文章开头，您需要添加一些特殊的 YAML 前置元数据。这个元数据可以设置文章的标题、日期、标签等等。以下是一个示例：

``` yaml
---
title: My New Blog Post
date: 2023-03-07
tags:
  - VuePress
  - Blogging
---
```
## 步骤4：在侧边栏中添加博客文章链接

打开您的 .vuepress/config.js 文件，并在 sidebar 配置中添加您的新博客文章链接。例如：

``` javascript
module.exports = {
  // ...
  themeConfig: {
    // ...
    sidebar: {
      '/use-vuepress/': [
        '',
        'add-blog'
      ],
      '/chatgpt/': [
        '',
        'art1',
        'art2',
      ],
      '/new-category/': [
        '',
        // ...
        'my-new-blog-post'
      ],
      '/': [
        '',
        'use-vuepress/',
        'chatgpt/',
        'new-category',
      ]
    },
}
```
::: warning
如果这是这个文件夹下的第一遍博客，那还需要更新一下上面的script.js，并且在该文件夹里额外补充一个README.md
:::

## 步骤5：重新启动VuePress以查看效果

在终端中，使用以下命令重新启动 VuePress，以更新站点并查看您的新博客文章：

``` bash
# 调试
yarn docs:dev
```
现在您的新博客文章已经添加到您的 VuePress 1.x 网站中了。您可以在浏览器中导航到您的博客文章链接，以查看它们的内容。
## 步骤6：将更新同步到github pages上
由于已经配置了github action，只需要通过git 提交并上传到github即可
``` bash
git add *
git commit -m "<commit info>"
git push
```
过一会即可在 [博客主页](https://zjjyyyk.github.io/vuepress_learn/) 查看到新写的博客了