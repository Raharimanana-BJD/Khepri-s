import React from "react";
import { blog_1, blog_2, blog_3 } from "../asset";
import { AppWindowMacIcon } from "lucide-react";
export const Links = [
  {
    name: "Acceille",
    path: "/",
  },
  {
    name: "A propos",
    path: "/Apropos",
  },
  {
    name: "Service",
    path: "/Service",
  },
  {
    name: "Produit",
    path: "/Produit",
  },
  {
    name: "Blog",
    path: "/Blog",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];

export const FooterLink = [
  {
    name: "Menu",
    links: [
      {
        name: "Acceille",
        path: "/",
      },
      {
        name: "A propos",
        path: "/AproposPage",
      },
      {
        name: "Service",
        path: "/ServicePage",
      },
      {
        name: "Produit",
        path: "/ProduitPage",
      },
      {
        name: "Blog",
        path: "/BlogPage",
      },
      {
        name: "Contact",
        path: "/ContactPage",
      },
    ],
  },
  {
    name: "Service",
    links: [
      {
        name: "Design",
        path: "/",
      },
      {
        name: "Developement",
        path: "/AproposPage",
      },
      {
        name: "Marketing",
        path: "/ServicePage",
      },
      {
        name: "Voir plus",
        path: "/ProduitPage",
      },
    ],
  },
];

export const CardServices = [
  {
    id:"01",
    icon: "AppWindowMacIcon",
    iconD: React.createElement(AppWindowMacIcon),
    title: "Developement",
    description: "Developpemrnt site et application mobile",
  },
  {
    id:"02",
    icon: "AppWindowMacIcon",
    iconD: React.createElement(AppWindowMacIcon),
    title: "web",
    description: "Developpemrnt site et application mobile",
  },
  {
    id:"03",
    icon: "AppWindowMacIcon",
    iconD: React.createElement(AppWindowMacIcon),
    title: "mobile",
    description: "Developpemrnt site et application mobile",
  },
]as const;
export type IconName = typeof CardServices[number]['icon'];

export const CardBlogs = [
  {
    id: "01",
    img: blog_1,
    title: "Innovative Technologies for Startups",
    date: "— 01 Mar 2023",
    cathegorie: "Innovation",
    description: "Exploring the latest technologies that are transforming the startup ecosystem. Learn how to leverage these innovations for your startup. In today's fast-paced world, staying ahead of the curve is crucial for success. This article delves into groundbreaking technologies such as AI, blockchain, and IoT, examining their potential to disrupt traditional business models and create new opportunities for startups. Discover how these innovations can enhance efficiency, reduce costs, and provide a competitive edge.",
    url: "/Blog/Innovative-Technologies",
  },
  {
    id: "02",
    img: blog_2,
    title: "Securing Funding for Your Startup",
    date: "— 15 Mar 2023",
    cathegorie: "Funding",
    description: "A comprehensive guide to securing funding for your startup. From venture capital to angel investors, discover the best strategies to raise capital. This article covers the different stages of startup funding, from seed funding to Series A, B, and beyond. Learn about the key players in the investment landscape, how to pitch your startup effectively, and the importance of building strong relationships with potential investors. Practical tips and real-world examples provide valuable insights for entrepreneurs looking to secure the financial resources needed to grow their business.",
    url: "/Blog/Securing-Funding",
  },
  {
    id: "03",
    img: blog_3,
    title: "Building a Strong Company Culture",
    date: "— 05 Apr 2023",
    cathegorie: "Culture",
    description: "Learn how to build and maintain a strong company culture that attracts and retains top talent. Tips and insights from successful startups. Company culture is a critical component of a startup's success. This article explores the elements that contribute to a positive and productive work environment, such as clear communication, shared values, and a focus on employee well-being. Discover strategies for fostering collaboration, encouraging innovation, and creating a sense of community within your organization. Insights from industry leaders and case studies of successful startups provide practical advice for building a culture that supports growth and success.",
    url: "/Blog/Company-Culture",
  },
  {
    id: "04",
    img: blog_1,
    title: "Effective Marketing Strategies for Tech Startups",
    date: "— 20 Apr 2023",
    cathegorie: "Marketing",
    description: "Discover effective marketing strategies tailored for tech startups. From digital marketing to brand building, learn how to make your startup stand out. This article covers the essentials of creating a compelling brand identity, developing a strong online presence, and leveraging social media to reach your target audience. Learn about the importance of content marketing, SEO, and email marketing in driving engagement and generating leads. Case studies and expert insights provide actionable tips for developing and executing a marketing plan that resonates with your audience and drives business growth.",
    url: "/Blog/Marketing-Strategies",
  },
  {
    id: "05",
    img: blog_2,
    title: "Navigating the Startup Ecosystem",
    date: "— 10 May 2023",
    cathegorie: "Ecosystem",
    description: "A deep dive into the startup ecosystem. Understand the key players, resources, and networks that can help your startup thrive. The startup ecosystem is a complex and dynamic environment that includes entrepreneurs, investors, mentors, incubators, accelerators, and more. This article explores the various components of the ecosystem, highlighting the support structures and resources available to startups. Learn about the benefits of networking, participating in startup events, and joining industry associations. Real-world examples and expert advice provide valuable insights into navigating the ecosystem and maximizing the opportunities available to your startup.",
    url: "/Blog/Startup-Ecosystem",
  },
  {
    id: "06",
    img: blog_3,
    title: "Tech Trends Shaping the Future",
    date: "— 25 May 2023",
    cathegorie: "Trends",
    description: "Stay ahead of the curve by exploring the tech trends that are shaping the future. Insights into emerging technologies and their potential impact on startups. This article examines the latest trends in technology, such as artificial intelligence, machine learning, big data, and cybersecurity. Discover how these trends are influencing the startup landscape and creating new opportunities for innovation and growth. Learn about the potential challenges and considerations for startups looking to adopt these technologies. Expert insights and case studies provide a comprehensive overview of the trends that will shape the future of the tech industry.",
    url: "/Blog/Tech-Trends",
  },
];

export const getBlogById = (id: string) => {
  return CardBlogs.find(blog => blog.id === id);
};



import { Server, Code, Database, Cloud, Shield, Smartphone } from 'lucide-react';

export const dataProduit = [
  {
    id: "1",
    title: 'Développement Web',
    icon: React.createElement(Code),
    description: 'Création de sites web sur mesure utilisant les dernières technologies et frameworks.'
  },
  {
    id: "2",
    title: 'Hébergement Cloud',
    icon: React.createElement(Cloud),
    description: 'Solutions d\'hébergement cloud fiables et évolutives pour répondre à vos besoins.'
  },
  {
    id: "3",
    title: 'Sécurité Informatique',
    icon: React.createElement(Shield),
    description: 'Services de sécurité avancés pour protéger vos données et systèmes.'
  },
  {
    id: "4",
    title: 'Développement Mobile',
    icon: React.createElement(Smartphone),
    description: 'Développement d\'applications mobiles intuitives et performantes pour iOS et Android.'
  },
  {
    id: "5",
    title: 'Gestion de Bases de Données',
    icon: React.createElement(Database),
    description: 'Solutions de gestion de bases de données robustes et efficaces.'
  },
  {
    id: "6",
    title: 'Serveurs Dédiés',
    icon: React.createElement(Server),
    description: 'Serveurs dédiés performants pour des besoins spécifiques et exigeants.'
  }
];
