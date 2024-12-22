import { ILink, IProdCard,} from "./interfaces";

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
      title: "Pages",
      link: "/pages"
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
      price: 16.48,
      discPrice: 6.48
  
    },
    {
      id: 2,
      image: "/images/ProdCard-2.png",
      altImage: "Dress",
      title: "Grapic Design",
      description: "English Department",
      price: 16.48,
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