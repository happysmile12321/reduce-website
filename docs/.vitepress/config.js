export default {
  title: 'reduce',
  titleTemplate: ':title - reduce',
  description: 'A software for help people learning',
  lang: 'en-US',
  base: '/',
  lastUpdated: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  outDir: '../public',
  themeConfig: {
    siteTitle: false,
    lastUpdatedText: 'Update Date',
    i18nRouting: true,
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Download',
        items: [
          { text: 'v0.1', link: '' }
        ]
      },
    ],
    sidebar:[
      {
        text:'Story',
        items:[
          {text:'Why I develop this', link: '/guide//why_i_develop_this'}
        ]
      }
    ]
  },
}
