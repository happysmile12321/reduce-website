import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";
export default withMermaid(
  defineConfig({
    title: 'reduce',
    titleTemplate: ':title - reduce',
    description: 'A software for help people learning',
    lang: 'en-US',
    base: '/reduce-website/',
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
        { text: 'Guide', link: '/guide/why_i_develop_this' },
        {
          text: 'Download',
          items: [
            { text: 'v0.1', link: '' }
          ]
        },
      ],
      sidebar: [
        {
          text: 'Story',
          items: [
            { text: 'Why I develop this', link: '/guide/why_i_develop_this' }
          ]
        },
        {
          text: 'Concept',
          items: [
            { text: 'Fronted Model', link: '/concept/frontend' },
            { text: 'Backend Model', link: '/concept/backend' },
          ]
        },
        {
          text: 'Methods',
          items: [
            {text: 'Feynman Learning',link: '/methods/feynman'},
            {text: 'Computational thinking',link: '/methods/computational_thinking'},
            {text: 'Four realms',link: '/methods/four_realms'},
            {text: 'Extension of pure reason based on mathematic',link: '/methods/math'},
            {text: 'Semantic tree & First principles',link: '/methods/SemanticTree_and_firstPrinciples'},
          ]
        },
        {
          text: 'Methods Merge',
          items: [
            {text: 'how to merge those methods',link: '/practice/methods_merge'},
          ]
        }
      ]
    },
    mermaid: {
      // refer https://mermaid-js.github.io/mermaid/#/Setup for options
    },
  })
)
