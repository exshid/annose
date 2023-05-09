// @ts-check

/**
 * The blog's configuration. Start here after cloning the repo.
 * Hovering over the properties (in an editor like VSCode) will provide additional information about them.
 */

/** @type {import('./types').BlogConfig} */
const blogConfig = {
  url: 'https://blog.kfirfitousi.com',
  title: 'portfolio',
  titleParts: ['portfolio', 'blog'],
  author: 'Alan Parniyan',
  pages: {
    home: {
      title: 'portfolio',
      description:
        "portfolio.",
    },
    posts: {
      url: '/posts',
      title: 'Posts',
      description:
        "All my blog posts.",
    },
  },
  theme: {
    accentColor: {
      light: '#be123c',
      dark: '#fda4af',
    },
    codeBlockTheme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  giscus: {
    repo: 'kfirfitousi/blog',
    repoId: 'R_kgDOIcM7JA',
    category: 'Comments',
    categoryId: 'DIC_kwDOIcM7JM4CTdK0',
    mapping: 'title',
    theme: {
      light: 'light',
      dark: 'dark_dimmed',
    },
  },
  footerLinks: {
    twitter: 'https://twitter.com/',
    facebook: 'https://facebook.com/',
    email: 'email@example.com',
    snapchat:'https://snapchat.com/',
    pinterest:'https://pinterest.com/'
  },
  topics: [
    'Author',
    'Editor',
    'Literary Agent',
  ],
};

module.exports = { blogConfig };
