import heroimg from "./assets/hero-right.png";
import Skills from "./components/Skills";
import figmalogo from "./assets/skills/figma-logo.png";
import jslogo from "./assets/skills/js-logo.png";
import reactlogo from "./assets/skills/react-logo.png";
import reduxlogo from "./assets/skills/redux-logo.png";
import nodelogo from "./assets/skills/node-logo.png";
import vscode from "./assets/skills/vscode-logo.png";
import profileimg from "./assets/profile/profile-img.png";
import pizzaproje from "./assets/projects/pizzaprojess.png";
import filmproje from "./assets/projects/filmprojess.png";
import ecommerceproje from "./assets/projects/ecommerceproje.png";
import twitterapiproject from "./assets/projects/twitterapiproject.png";
import atsignlogo from "./assets/footer/at-sign-logo.png";
import codepenlogo from "./assets/footer/codepen-logo.png";
import instagramlogo from "./assets/footer/instagram-logo.png";
import twitterlogo from "./assets/footer/twitter-logo.png";
import atsignlogodark from "./assets/footer/at-sign-dark.png";
import codepenlogodark from "./assets/footer/codepen-dark.png";
import instagramlogodark from "./assets/footer/instagram-dark.png";
import twitterlogodark from "./assets/footer/twitter-dark.png";
import profilfoto from "./assets/profile/profilFoto.png";
import githubfoto from "./assets/profile/githubfoto.png";

export const data = {
  en: {
    HeaderSection: [
      { name: "Hamza" },
      { title: "From a Fullstack Developer..." },
      {
        text: "Solid, scalable full-stack applications with strong backend foundations.",
      },
      { github: "https://github.com/hmzdnzl" },
      { linkedin: "https://www.linkedin.com/in/hmzdnzl/" },
      { img: githubfoto },
    ],
    SkillsSection: [
      { title: "Skills" },
      { id: 1, name: "JAVASCRIPT", logo: jslogo },
      { id: 2, name: "REACT", logo: reactlogo },
      { id: 3, name: "REDUX", logo: reduxlogo },
      { id: 4, name: "NODE", logo: nodelogo },
      { id: 5, name: "VS CODE", logo: vscode },
      { id: 6, name: "FIGMA", logo: figmalogo },
    ],
    ProfileSection: [
      { title: "Profile" },
      { subtitle: "Basic Information" },
      { birthLabel: "Birth Date" },
      { birth: "15.12.1996" },
      { addressLabel: "Location" },
      { address: "İstanbul" },
      { educationLabel: "Education Status" },
      { education: "Erciyes Ünv. Çevre Müh. Lisans, 2022" },
      { preferredRoleLabel: "Preferred Role" },
      { preferredRole: "Full-Stack, Backend" },
      { img: profilfoto },
      {
        aboutme: [
          { title: "About Me" },
          {
            text1: `I graduated in 2022 and completed my military service. Then I worked as an environmental engineer for two and a half years.`,
            text2:
              "After resigning from my previous role, I repositioned my career toward software development. As part of an intensive full-stack training program lasting approximately six months, I worked primarily on React- and Java-based applications, gaining hands-on experience in both frontend and backend development through project-driven work.",
          },
        ],
      },
    ],

    ProjectsSection: [
      { id: 0, title: "Projects" },
        {
        id: 1,
        subtitle: "E-Commerce website",
        projectimg: ecommerceproje,
        projectDetails: {
          description: `This website is about an e-commerce platform. On this website, you can select products, add them to your cart, and proceed to checkout. The platform supports various payment methods and provides order tracking. In addition, I’ve listed the technologies I used in this project.`,
          technologies: [
            { id: 1, name: "react" },
            { id: 2, name: "redux" },
            { id: 3, name: "vercel" },
          ],
          viewSiteLink: "https://e-commerce-project-sigma-khaki.vercel.app/",
          githubLink: "https://github.com/hmzdnzl/E-commerce-project",
        },
      },
      {
        id: 2,
        subtitle: "Twitter API",
        projectimg: twitterapiproject,
        projectDetails: {
          description: `This project involves integrating with the Twitter API to fetch and display tweets based on specific criteria. The application allows users create tweets, comment tweets, like tweets retweet tweets, editing fundamental twitter functions and search for tweets, view user profiles, and then analyze tweet data. It demonstrates the use of RESTful API principles and handles authentication with token-based authentication. `,
          technologies: [
            { id: 1, name: "java" },
            { id: 2, name: "springboot" },
            { id: 3, name: "postgresql" },
          ],
          viewSiteLink:
            "This project is developed locally and does not have a live site. Codes are available on GitHub. If you want to see how it works, please contact me.",
          githubLink:
            "https://github.com/hmzdnzl/FSWEB-s19-Challenge",
        },
      },            
       {
        id: 3,
        subtitle: "Teknolojik Yemekler",
        projectimg: pizzaproje,
        projectDetails: {
          description: `This website is about ordering pizza. On this website, you can select the pizza size and thickness, and choose extra ingredients. You can also add your name and a note. The price changes according to your choices. Of course, some form fields, such as the pizza size, must be filled in. If you don’t complete these fields, you can’t place an order. In addition, I’ve listed the technologies I used in this project.`,
          technologies: [
            { id: 1, name: "react" },
            { id: 2, name: "cypress" },
            { id: 3, name: "vercel" },
          ],
          viewSiteLink: "https://fsweb-s8-challenge-pizza-silk.vercel.app/",
          githubLink: "https://github.com/hmzdnzl/fsweb-s8-challenge-pizza",
        },
      },
      {
        id: 4,
        subtitle: "Redux Watchlist Solution",
        projectimg: filmproje,
        projectDetails: {
          description: `This website is about a movie list. On this website, there are two movie lists. One is the “Movies” list, where movies are displayed one by one. You can use the “Previous” and “Next” buttons to navigate through the movies. The other list is “My List.” You can add a movie to “My List,” and when you do, it is removed from the “Movies” list. If you remove a movie from “My List,” it is added back to the “Movies” list. `,
          technologies: [
            { id: 1, name: "react" },
            { id: 2, name: "tailwind" },
            { id: 3, name: "axios" },
          ],
          viewSiteLink:
            "https://fsweb-s10g3-redux-watchlist-solutio-olive.vercel.app/",
          githubLink:
            "https://github.com/hmzdnzl/fsweb-s10g3-redux-watchlist-solution",
        },
      },
      
    ],
    FooterSection: {
      title: "Send me a message!",
      text: "I would be very happy to hear from you, whether you have a question, a proposal, a suggestion, or just want to say hello.",
      mailAddress: "hmzdnzl38@gmail.com",
      connections: [
        {
          id: 1,
          link: "https://x.com/Hamzade38",
          logo: twitterlogo,
          darkLogo: twitterlogodark,
        },
        {
          id: 2,
          link: "https://codepen.io/hamza-denizli",
          logo: codepenlogo,
          darkLogo: codepenlogodark,
        },
        {
          id: 3,
          link: "mailto:hmzdnzl38@gmail.com",
          logo: atsignlogo,
          darkLogo: atsignlogodark,
        },
        {
          id: 4,
          link: "https://www.instagram.com/hmzdnzl",
          logo: instagramlogo,
          darkLogo: instagramlogodark,
        },
      ],
    },
  },
  tr: {
    HeaderSection: [
      { name: "Hamza" },
      { title: "Bir Full-Stack Developerdan..." },
      {
        text: "Güçlü backend temelleri üzerine inşa edilmiş, sağlam ve ölçeklenebilir full-stack uygulamalar.",
      },
      { github: "https://github.com/hmzdnzl" },
      { linkedin: "https://www.linkedin.com/in/hmzdnzl/" },
      {  img: githubfoto },
    ],
    SkillsSection: [
      { title: "Yetenekler" },
      { id: 1, name: "JAVASCRIPT", logo: jslogo },
      { id: 2, name: "REACT", logo: reactlogo },
      { id: 3, name: "REDUX", logo: reduxlogo },
      { id: 4, name: "NODE", logo: nodelogo },
      { id: 5, name: "VS CODE", logo: vscode },
      { id: 6, name: "FIGMA", logo: figmalogo },
    ],
    ProfileSection: [
      { title: "Profil" },
      { subtitle: "Temel Bilgiler" },
      { birthLabel: "Doğum Tarihi" },
      { birth: "15.12.1996" },
      { addressLabel: "Lokasyon" },
      { address: "İstanbul" },
      { educationLabel: "Eğitim Durumu" },
      { education: "Erciyes Ünv. Çevre Müh. Lisans, 2022" },
      { preferredRoleLabel: "Tercih Edilen Rol" },
      { preferredRole: "Full-Stack, Backend" },
      { img: profilfoto },
      {
        aboutme: [
          { title: "Hakkımda" },
          {
            text1: `2022’de mezun oldum ve askerlik hizmetimi tamamladım. Ardından iki buçuk yıl çevre mühendisi olarak çalıştım.`,
            text2:
              "İstifa ettikten sonra yazılım geliştirme alanında kendimi yeniden konumlandırdım. Yaklaşık altı ay süren yoğun bir full-stack eğitim programı kapsamında, özellikle React ve Java tabanlı uygulamalar üzerinde çalıştım; proje odaklı ilerleyerek hem frontend hem de backend geliştirme konularında deneyim edindim.",
          },
        ],
      },
    ],

    ProjectsSection: [
      { id: 0, title: "Projeler" },
      {
        id: 1,
        subtitle: "E-Ticaret Sitesi",
        projectimg: ecommerceproje,
        projectDetails: {
          description: `Bu web sitesi bir e-ticaret platformudur. Sitede ürünleri seçebilir, sepetinize ekleyebilir ve ödeme adımına geçebilirsiniz. Platform farklı ödeme yöntemlerini destekler ve sipariş takibi sağlar. Ayrıca bu projede kullandığım teknolojileri de listeledim.`,
          technologies: [
            { id: 1, name: "react" },
            { id: 2, name: "redux" },
            { id: 3, name: "vercel" },
          ],
          viewSiteLink: "https://e-commerce-project-sigma-khaki.vercel.app/",
          githubLink: "https://github.com/hmzdnzl/E-commerce-project",
        },
      },
      {
        id: 2,
        subtitle: "Twitter API",
        projectimg: twitterapiproject,
        projectDetails: {
          description: `Bu proje, Twitter API ile entegre olarak belirli kriterlere göre tweetleri çekip görüntülemeye olanak tanır. Uygulama ile kullanıcılar tweet oluşturabilir, tweetlere yorum yapabilir, beğenebilir, retweet edebilir, temel Twitter fonksiyonlarını düzenleyebilir, tweet arayabilir, kullanıcı profillerini görüntüleyebilir ve tweet verilerini analiz edebilir. RESTful API prensipleriyle geliştirilmiş olup, token tabanlı kimlik doğrulama kullanır.`,
          technologies: [
            { id: 1, name: "java" },
            { id: 2, name: "springboot" },
            { id: 3, name: "postgresql" },
          ],
          viewSiteLink:
            "Bu proje localhostta geliştirilmiştir ve yayınlanmış bir sitesi yoktur. Kodlar GitHub'da mevcuttur. Sistemin nasıl çalıştığını görmek isterseniz benimle iletişime geçebilirsiniz.",
          githubLink:
            "https://github.com/hmzdnzl/FSWEB-s19-Challenge",
        },
      },
      {
        id: 3,
        subtitle: "Technological Foods",
        projectimg: pizzaproje,
        projectDetails: {
          description: `Bu web sitesi pizza siparişi vermekle ilgilidir. Bu sitede pizza boyutunu ve kalınlığını seçebilir, ekstra malzemeler ekleyebilirsiniz. Ayrıca adınızı ve bir not ekleyebilirsiniz. Fiyat, seçtiğiniz seçeneklere göre değişir. Elbette pizza boyutu gibi bazı form alanlarının doldurulması gerekir. Bu alanları doldurmazsanız sipariş veremezsiniz. Ayrıca, bu projede kullandığım teknolojileri de listeledim.`,
          technologies: [
            { id: 1, name: "react" },
            { id: 2, name: "cypress" },
            { id: 3, name: "vercel" },
          ],
          viewSiteLink: "https://fsweb-s8-challenge-pizza-silk.vercel.app/",
          githubLink: "https://github.com/hmzdnzl/fsweb-s8-challenge-pizza",
        },
      },
      {
        id: 4,
        subtitle: "Redux İzleme Listesi Çözümü",
        projectimg: filmproje,
        projectDetails: {
          description: `Bu web sitesi bir film listesi ile ilgilidir. Bu sitede iki film listesi bulunmaktadır. Bunlardan biri “Filmler” listesidir ve filmler tek tek görüntülenir. Filmler arasında gezinmek için “Önceki” ve “Sonraki” butonlarını kullanabilirsiniz. Diğer liste ise “Listem” listesidir. Bir filmi “Listem” listesine ekleyebilirsiniz; eklediğinizde film “Filmler” listesinden çıkarılır. Eğer bir filmi “Listem” listesinden çıkarırsanız, film tekrar “Filmler” listesine eklenir. `,
          technologies: [
            { id: 1, name: "react" },
            { id: 2, name: "tailwind" },
            { id: 3, name: "axios" },
          ],
          viewSiteLink:
            "https://fsweb-s10g3-redux-watchlist-solutio-olive.vercel.app/",
          githubLink:
            "https://github.com/hmzdnzl/fsweb-s10g3-redux-watchlist-solution",
        },
      },
    ],
    FooterSection: {
      title: "Bana ulaş!",
      text: "Bir sorunuz, teklifiniz, tavsiyeniz için ya da sadece selam vermek için benimle iletişime geçmenize sevinirim.",
      
      mailAddress: "hmzdnzl38@gmail.com",
      connections: [
        {
          id: 1,
          link: "https://x.com/Hamzade38",
          logo: twitterlogo,
          darkLogo: twitterlogodark,
        },
        {
          id: 2,
          link: "https://codepen.io/hamza-denizli",
          logo: codepenlogo,
          darkLogo: codepenlogodark,
        },
        {
          id: 3,
          link: "mailto:hmzdnzl38@gmail.com",
          logo: atsignlogo,
          darkLogo: atsignlogodark,
        },
        {
          id: 4,
          link: "https://www.instagram.com/hmzdnzl",
          logo: instagramlogo,
          darkLogo: instagramlogodark,
        },
      ],
    },
  },
};
