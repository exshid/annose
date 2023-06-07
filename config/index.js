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
  },
  //First color; use tailwindcomponents.com/gradient-generator to generate your favorite color
  firstColor: 'bg-gradient-to-r from-red-500 to-orange-500',
  //Second color
  secondColor: 'bg-gradient-to-r from-blue-200 to-cyan-200',


  //Biography in About me page
about: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sequi, fugit ipsum placeat ad laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sequi, fugit ipsum placeat ad laudantium.
Distinctio voluptate iste doloremque harum similique quod! Voluptatem incidunt dignissimos vero consequuntur laborum. Rem nobis odit assumenda mollitia animi et possimus est.
Consectetur adipisicing elit. Distinctio voluptate iste doloremque harum similique quod! Voluptatem incidunt dignissimos vero consequuntur laborum. Rem nobis odit assumenda mollitia animi et possimus est.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate iste doloremque harum similique quod! Voluptatem incidunt dignissimos vero consequuntur laborum. Rem nobis odit assumenda mollitia animi et possimus est.`,
    //Biography in top of the main page
  aboutTop: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//Biography in about secion of the main page
  aboutMiddle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, ad asperiores ipsam voluptatem rem a id maxime odio ullam accusantium dolor magnam quam expedita! A tenetur ipsam enim magnam cupiditate. Quos iure in voluptas! Libero aspernatur error temporibus id aperiam culp similique pariatur ex, optio sunt. Pariatur velit fugiat consequuntur quaerat eius.',
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

  books: [{title: 'Book Title', author:'Author Name', cover: '/images/cover.jpg',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sequi, fugit ipsum placeat ad laudantium.'},
  {title: 'Book Title II', author:'Author Name', cover: '/images/cover-ii.jpg',
  description:'Nam sequi, fugit ipsum placeat ad laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  ],
    /**
   * List of editioral services here.
   * To add a new service, copy those {}s and fill the fields. Important: Do not forget to seperae books using a comma.
   */

  services: [{title: 'Book edit', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {title: 'Line edit', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {title: 'Book edit', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {title: 'Line edit', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {title: 'Book edit', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {title: 'Line edit', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {title: 'Book edit', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {title: 'Book edit', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {title: 'Line edit', description:'Nam sequi, fugit ipsum placeat ad laudantium.'},
  {title: 'Book edit', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},

],

};

module.exports = { blogConfig };
