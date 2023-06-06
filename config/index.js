// @ts-check

//The websie's configuration.
 

/** @type {import('./types').BlogConfig} */
const blogConfig = {
  url: 'https://portfoliodemo.vercel.app',
  title: 'Portfolio',
  titleParts: ['portfolio', 'website'],
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
  about: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
   Nam sequi, fugit ipsum placeat ad laudantium.`,
  footerLinks: {
    twitter: 'https://twitter.com/',
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    email: 'email@example.com',
    tiktok:'https://tiktok.com/'
  },
  topics: [
    'Author',
    'Editor',
  ],
    /**
   * List of books here.
   * To add a new book, copy those {}s and fill the fields. Important: Do not forget to seperae books using a comma.
   * To add a new cover, you should upoload it in public/images folder first. 
   */

  books: [{title: 'Book Title', author:'Author Name', cover: '../public/images/cover.jpg',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {title: 'Book Title II', author:'Author Name', cover: '../public/images/cover-ii.jpg',
  description:'Nam sequi, fugit ipsum placeat ad laudantium.'},
  ],
};

module.exports = { blogConfig };
