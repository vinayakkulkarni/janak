module.exports = {
  title: '<%= name %>',
  description: '<%= description %>',
  themeConfig: {
    sidebar: {
      '/': [
        ['', '<%= name %>'],
      ],
    },
    nav: [{ text: 'Home', link: '/' }],
    theme: '@vuepress/theme-default',
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated', // string | boolean
    // Smooth Scrolling
    smoothScroll: true,
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../src/',
      },
    },
  },
};
