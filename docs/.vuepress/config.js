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
      { text: 'Vuepress手册', link: '/use-vuepress/' },
      { text: '对话Chatgpt', link: '/chatgpt/' },
    ],
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
      '/': [
        '',
        'use-vuepress/',
        'chatgpt/'
      ]
    },
  }
}