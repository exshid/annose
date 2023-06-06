// @ts-check

/**
 * The blog's configuration. Start here after cloning the repo.
 * Hovering over the properties (in an editor like VSCode) will provide additional information about them.
 */

/** @type {import('./types').BlogConfig} */
const blogConfig = {
  url: 'https://portfoliodemo.vercel.app',
  title: 'Portfolio',
  titleParts: ['portfolio', 'blog'],
  author: 'A. B. CDEF',
  pages: {
    home: {
      title: 'Portfolio',
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
  //Biography in About me page
  //To add a line-break, instead of an enter, use \n, as in the example below.
  about: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.\nNam sequi, fugit ipsum placeat ad laudantium.`,
  footerLinks: {
    twitter: 'https://twitter.com/',
    facebook: 'https://facebook.com/',
    email: 'email@example.com',
  },
  topics: [
    'Author',
    'Editor',
  ],
};

module.exports = { blogConfig };
