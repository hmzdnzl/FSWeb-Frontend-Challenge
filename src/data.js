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
import atsignlogo from "./assets/footer/at-sign-logo.png";
import codepenlogo from "./assets/footer/codepen-logo.png";
import instagramlogo from "./assets/footer/instagram-logo.png";
import twitterlogo from "./assets/footer/twitter-logo.png";
import atsignlogodark from "./assets/footer/at-sign-dark.png";
import codepenlogodark from "./assets/footer/codepen-dark.png";
import instagramlogodark from "./assets/footer/instagram-dark.png";
import twitterlogodark from "./assets/footer/twitter-dark.png";

export const data = {
  en: {
    HeaderSection: [
      { name: "Hamza" },
      { title: "From a Frontend Developer..." },
      {
        text: "If you want solid and scalable frontend projects crafted, you are at the right website.",
      },
      { github: "https://github.com/hmzdnzl" },
      { linkedin: "https://www.linkedin.com/in/hmzdnzl/" },
      { img: heroimg },
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
      { preferredRole: "Frontend, UI" },
      { img: profileimg },
      {
        aboutme: [
          { title: "About Me" },
          {
            text1: `I graduated in 2022 and completed my military service. Then I worked as an environmental engineer for two and a half years.`,
            text2:
              "After resigning, I joined a six-month fullstack developer course. I’m now halfway through, done with frontend and starting backend soon.",
          },
        ],
      },
    ],

    ProjectsSection: [
      { id: 0, title: "Projects" },
      {
        id: 1,
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
        id: 2,
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
      { title: "Bir Frontend Developerdan..." },
      {
        text: "Sağlam ve ölçeklendirilebilir frontend projeleri üretmesini istiyorsanız, doğru websitesindesiniz.",
      },
      { github: "https://github.com/hmzdnzl" },
      { linkedin: "https://www.linkedin.com/in/hmzdnzl/" },
      { img: heroimg },
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
      { preferredRole: "Frontend, UI" },
      { img: profileimg },
      {
        aboutme: [
          { title: "Hakkımda" },
          {
            text1: `2022’de mezun oldum ve askerlik hizmetimi tamamladım. Ardından iki buçuk yıl çevre mühendisi olarak çalıştım.`,
            text2:
              "İstifa ettikten sonra altı aylık bir fullstack developer kursuna katıldım. Şu anda kursun yarısındayım; frontend kısmını bitirdim ve yakında backend’e başlayacağım.",
          },
        ],
      },
    ],

    ProjectsSection: [
      { id: 0, title: "Projeler" },
      {
        id: 1,
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
        id: 2,
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
