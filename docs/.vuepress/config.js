module.exports = config = {
  theme: '',
  title: '前端手札',
  description: '',
  base: '/',
  port: '8080',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'Element-UI',
        link: '/Element-UI/'
      },
    ],
    sidebar: 'auto',
  },
  head: [],
  plugins: ['demo-container', "vuepress-plugin-auto-sidebar"], // 配置插件
  markdown: {}
}
