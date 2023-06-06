// @ts-check
import coverI from '../public/images/cover.jpg'
import coverII from '../public/images/cover-ii.jpg'

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
   * To add a new cover, you should upoload and then import it, like the ones at the top of the page. 
   */

  books: [{title: 'Book Title', author:'Author Name', cover: coverI,
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {title: 'Book Title II', author:'Author Name', cover: coverII,
  description:'Nam sequi, fugit ipsum placeat ad laudantium.'},
  ],
};

module.exports = { blogConfig };
