module.exports = {
  title: 'zjjyyyk的笔记',
  base : '/vuepress_learn/',
  extendMarkdown(md) {
    md.set({ html: true });
    md.use(require("markdown-it-katex"));
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '技术工具', link: '/techniques/' },
      { text: '电阻距离', link: '/ResistanceDistance/' },
    ],
    sidebar: {
      '/techniques/': [
        '',
        'add-blog'
      ],
      '/ResistanceDistance/': [
        '',
        'basic',
        'interpretation',
      ],
      '/': [
        '',
        'techniques/',
        'ResistanceDistance/',
      ]
    },
  }
}