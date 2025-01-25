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

//   export const FeaturedProd : IProdCard[] = [
//     {
//       id: 1,
//       image: "/images/ProdCard-1.png",
//       altImage: "Dress",
//       title: "Grapic Design",
//       description: "English Department",
//       price: 166.48,
//       discPrice: 6.48
  
//     },
//     {
//       id: 2,
//       image: "/images/ProdCard-2.png",
//       altImage: "Dress",
//       title: "Grapic Design",
//       description: "English Department",
//       price: 166.48,
//       discPrice: 6.48
  
//     },
//     {
//       id: 3,
//       image: "/images/ProdCard-3.png",
//       altImage: "Dress",
//       title: "Grapic Design",
//       description: "English Department",
//       price: 16.48,
//       discPrice: 6.48
  
//     },
//     {
//       id: 4,
//       image: "/images/ProdCard-4.png",
//       altImage: "Dress",
//       title: "Grapic Design",
//       description: "English Department",
//       price: 16.48,
//       discPrice: 6.48
  
//     },
//     {
//       id: 5,
//       image: "/images/ProdCard-5.png",
//       altImage: "Dress",
//       title: "Grapic Design",
//       description: "English Department",
//       price: 16.48,
//       discPrice: 6.48
  
//     },
//     {
//       id: 6,
//       image: "/images/ProdCard-6.png",
//       altImage: "Dress",
//       title: "Grapic Design",
//       description: "English Department",
//       price: 16.48,
//       discPrice: 6.48
  
//     },
//     {
//       id: 7,
//       image: "/images/ProdCard-7.png",
//       altImage: "Dress",
//       title: "Grapic Design",
//       description: "English Department",
//       price: 16.48,
//       discPrice: 6.48
  
//     },
//     {
//       id: 8,
//       image: "/images/ProdCard-8.png",
//       altImage: "Dress",
//       title: "Grapic Design",
//       description: "English Department",
//       price: 16.48,
//       discPrice: 6.48
  
//     },
// ]

export const FeaturedProd: IProdCard[] = [
  {
    id: 1,
    image: "/images/ProdCard-1.png",
    altImage: "Women's Pastel Knitwear",
    title: "Pastel Knit Top & Shorts",
    description: "Step into effortless elegance with this pastel knit top and shorts set. Designed for ultimate comfort, this ensemble features lightweight, breathable fabric that feels soft against the skin. The muted pastel tones add a touch of sophistication, perfect for casual outings or lounging at home. The top offers a relaxed fit, while the shorts come with a secure elastic waistband for easy wear. Pair it with sneakers for a laid-back vibe or elevate your look with accessories. Redefine cozy chic with this must-have addition to your wardrobe.",
    price: 49.99,
    discPrice: 39.99
  },
  {
    id: 2,
    image: "/images/ProdCard-2.png",
    altImage: "Men's Graphic Tee",
    title: "Minimal Graphic T-Shirt",
    description: "Discover the perfect blend of simplicity and style with this minimal graphic t-shirt. Crafted from premium cotton, this tee offers unmatched softness and breathability, keeping you comfortable all day long. Its versatile design, featuring a subtle yet trendy graphic pattern, makes it suitable for casual outings, weekend adventures, or even layering under jackets. With a tailored fit and classic crew neckline, this t-shirt complements any body type. Elevate your wardrobe essentials and enjoy effortless style with a piece that redefines everyday fashion.",
    price: 29.99,
    discPrice: 19.99
  },
  {
    id: 3,
    image: "/images/ProdCard-3.png",
    altImage: "Women's White Trousers",
    title: "High-Waist White Pants",
    description: "Experience timeless sophistication with these high-waist white pants. Designed for the modern woman, these trousers feature a flattering cut that enhances your silhouette while providing unmatched comfort. The premium fabric is both durable and breathable, ensuring ease of wear throughout the day. Perfect for both professional and casual settings, these pants pair seamlessly with blouses, crop tops, or jackets. Whether you're heading to the office or enjoying a night out, these pants are a versatile addition to your wardrobe, offering endless styling possibilities.",
    price: 59.99,
    discPrice: 49.99
  },
  {
    id: 4,
    image: "/images/ProdCard-4.png",
    altImage: "Women's Midi Skirt",
    title: "Vintage Floral Midi Skirt",
    description: "Unleash your inner fashionista with this vintage floral midi skirt. Adorned with intricate floral patterns, this skirt exudes a retro charm that never goes out of style. The A-line silhouette offers a universally flattering fit, while the soft, flowy fabric ensures comfort and grace in every step. Pair it with a tucked-in blouse or a casual top to create stunning day-to-night looks. Whether you’re attending brunch with friends or a romantic dinner, this midi skirt is your go-to for effortless elegance.",
    price: 45.99,
    discPrice: 35.99
  },
  {
    id: 5,
    image: "/images/ProdCard-5.png",
    altImage: "Women's Cardigan",
    title: "Oversized Knit Cardigan",
    description: "Stay warm and stylish with this oversized knit cardigan, the ultimate layering piece for any season. Made from ultra-soft yarn, this cardigan envelops you in coziness without compromising on style. The oversized fit offers a relaxed yet chic look, while the neutral tones make it easy to pair with any outfit. Whether you're heading to work, running errands, or enjoying a casual evening out, this cardigan is the perfect companion. Add it to your collection for a versatile piece that keeps you comfortable and on-trend.",
    price: 69.99,
    discPrice: 54.99
  },
  {
    id: 6,
    image: "/images/ProdCard-6.png",
    altImage: "Women's Black Crop Top",
    title: "Essential Black Crop Top",
    description: "Embrace versatility and effortless style with this essential black crop top. A true wardrobe staple, this piece is crafted from stretchable, breathable fabric that ensures a snug yet comfortable fit. The clean, minimalist design makes it perfect for pairing with high-waisted jeans, skirts, or leggings. Whether you're hitting the gym, running errands, or going out with friends, this crop top adapts to every occasion. Elevate your casual wear game and enjoy the endless styling possibilities that this must-have basic offers.",
    price: 24.99,
    discPrice: 19.99
  },
  {
    id: 7,
    image: "/images/ProdCard-7.png",
    altImage: "Women's Activewear Set",
    title: "Activewear Jacket & Top",
    description: "Take your athleisure game to the next level with this activewear jacket and top set. Designed for movement and style, this set combines functionality with modern aesthetics. The jacket features a lightweight, breathable material and a flattering fit, while the top is crafted for maximum comfort during workouts or casual outings. Whether you're hitting the gym or running errands, this set ensures you look and feel your best. Embrace fashion-forward activewear that blends performance and style seamlessly.",
    price: 74.99,
    discPrice: 59.99
  },
  {
    id: 8,
    image: "/images/ProdCard-8.png",
    altImage: "Men's Utility Jacket",
    title: "Urban Utility Jacket",
    description: "Make a bold statement with this urban utility jacket, designed for the modern adventurer. Combining practicality with style, this jacket features multiple pockets, durable fabric, and a sleek silhouette. Ideal for urban exploration or weekend getaways, it pairs effortlessly with jeans or chinos for a rugged yet refined look. The lightweight construction ensures comfort without sacrificing durability, making it a versatile addition to your outerwear collection. Step up your fashion game with a jacket that balances function and flair.",
    price: 89.99,
    discPrice: 69.99
  },
];


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

export const ProdCategory1 : IProdCategroy[] = [
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
