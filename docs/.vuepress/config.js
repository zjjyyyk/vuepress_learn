module.exports = {
  title: 'zjjyyyk的笔记',
  base : '/vuepress_learn/',
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
      ]
    },
  }
}