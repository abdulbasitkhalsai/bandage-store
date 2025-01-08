import { ILink, IlogosProp, IProdCard, IProdCategroy,} from "./interfaces";

export const navItems :ILink[] = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Shop",
      link: "/shop"
    },
    {
      title: "About",
      link: "/about"
    },
    {
        title: "Blog",
        link: "/blog"
    },
    {
      title: "Contact",
      link: "/contact"
    },
    {
      title: "Pricing",
      link: "/pricing"
    }
    
  ];

export const socialLinks  = [
    {
      altIcon: "X",
      srcIcon: "/images/H-Twitter.png",
      hrefIcon: "https://twitter.com/?lang=en"
    },
    {
      altIcon: "Facebook",
      srcIcon: "/images/H-FB.png",
      hrefIcon: "https://www.facebook.com"
    },
    {
      altIcon: "YouTube",
      srcIcon: "/images/H-YT.png",
      hrefIcon: "https://www.youtube.com/"
    },
    {
      altIcon: "Instagram",
      srcIcon: "/images/H-Insta.png",
      hrefIcon: "https://www.instagram.com/"
    },
  ];

  export const FeaturedProd : IProdCard[] = [
    {
      id: 1,
      image: "/images/ProdCard-1.png",
      altImage: "Dress",
      title: "Grapic Design",
      description: "English Department",
      price: 166.48,
      discPrice: 6.48
  
    },
    {
      id: 2,
      image: "/images/ProdCard-2.png",
      altImage: "Dress",
      title: "Grapic Design",
      description: "English Department",
      price: 166.48,
      discPrice: 6.48
  
    },
    {
      id: 3,
      image: "/images/ProdCard-3.png",
      altImage: "Dress",
      title: "Grapic Design",
      description: "English Department",
      price: 16.48,
      discPrice: 6.48
  
    },
    {
      id: 4,
      image: "/images/ProdCard-4.png",
      altImage: "Dress",
      title: "Grapic Design",
      description: "English Department",
      price: 16.48,
      discPrice: 6.48
  
    },
    {
      id: 5,
      image: "/images/ProdCard-5.png",
      altImage: "Dress",
      title: "Grapic Design",
      description: "English Department",
      price: 16.48,
      discPrice: 6.48
  
    },
    {
      id: 6,
      image: "/images/ProdCard-6.png",
      altImage: "Dress",
      title: "Grapic Design",
      description: "English Department",
      price: 16.48,
      discPrice: 6.48
  
    },
    {
      id: 7,
      image: "/images/ProdCard-7.png",
      altImage: "Dress",
      title: "Grapic Design",
      description: "English Department",
      price: 16.48,
      discPrice: 6.48
  
    },
    {
      id: 8,
      image: "/images/ProdCard-8.png",
      altImage: "Dress",
      title: "Grapic Design",
      description: "English Department",
      price: 16.48,
      discPrice: 6.48
  
    },
]

export const blog : IProdCard[] = [
{
  id: "Blog-1",
  image: "/images/Blog1.png",
  altImage: "Blog",
  title: "Loudest à la Madison #1 (L'integral)",
  description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  postingdate: "22 April 2021",
  commentCount: 10,
},
{
  id: "Blog-2",
  image: "/images/Blog2.png",
  altImage: "Blog",
  title: "Loudest à la Madison #1 (L'integral)",
  description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  postingdate: "22 April 2021",
  commentCount: 10,
},
{
  id: "Blog-3",
  image: "/images/Blog3.png",
  altImage: "Blog",
  title: "Loudest à la Madison #1 (L'integral)",
  description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  postingdate: "22 April 2021",
  commentCount: 10,
}
]

export const ProdCategory : IProdCategroy[] = [
  {
    id: "Category-1",
    image: "/images/Category1.jpg",
    altImage: "Clothes",
    itemCount: 5,
  },
  {
    id: "Category-2",
    image: "/images/Category2.jpg",
    altImage: "Clothes",
    itemCount: 5,
  },
  {
    id: "Category-3",
    image: "/images/Category3.jpg",
    altImage: "Clothes",
    itemCount: 5,
  },
  {
    id: "Category-4",
    image: "/images/Category4.jpg",
    altImage: "Clothes",
    itemCount: 5,
  },
  {
    id: "Category-5",
    image: "/images/Category5.jpg",
    altImage: "Clothes",
    itemCount: 5,
  }
]

export const logos : IlogosProp[] = [
  {
    id: 1,
    image: "/images/logo1.png",
    altImage: "Logo 1",
  },
  {
    id: 2,
    image: "/images/logo2.png",
    altImage: "Logo 2",
  },
  {
    id: 3,
    image: "/images/logo3.png",
    altImage: "Logo 3",
  },
  {
    id: 4,
    image: "/images/logo4.png",
    altImage: "Logo 4",
  },
  {
    id: 5,
    image: "/images/logo5.png",
    altImage: "Logo 5",
  },
  {
    id: 6,
    image: "/images/logo6.png",
    altImage: "Logo 6",
  }
]

export const footerData = [
  {
    title: "Company Info",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Carrier", href: "/carrier" },
      { text: "We are hiring", href: "/hiring" },
      { text: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Carrier", href: "/carrier" },
      { text: "We are hiring", href: "/hiring" },
      { text: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Features",
    links: [
      { text: "Business Marketing", href: "/features/business-marketing" },
      { text: "User Analytic", href: "/features/user-analytic" },
      { text: "Live Chat", href: "/features/live-chat" },
      { text: "Unlimited Support", href: "/features/unlimited-support" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "iOS & Android", href: "/resources/ios-android" },
      { text: "Watch a Demo", href: "/resources/watch-demo" },
      { text: "Customers", href: "/resources/customers" },
      { text: "API", href: "/resources/api" },
    ],
  },
  {
    title: "Get In Touch",
    links: [],
    extra: {
      inputPlaceholder: "Your Email",
      buttonText: "Subscribe",
      description: "Lorem ipsum dolor Amit",
    },
  },
];


export const socialIcons = [
  {
    altIcon: "Facebook",
    srcIcon: "/images/facebook.png",
    hrefIcon: "https://www.facebook.com"
  },
  {
    altIcon: "X",
    srcIcon: "/images/twitter.png",
    hrefIcon: "https://twitter.com/?lang=en"
  },
  {
    altIcon: "Instagram",
    srcIcon: "/images/instagram.png",
    hrefIcon: "https://www.instagram.com/"
  }
]
