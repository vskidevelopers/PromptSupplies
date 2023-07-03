import mduka from "../assets/images/projectImages/mduka.png";
import iowa from "../assets/images/projectImages/iowa.png";
import safari from "../assets/images/projectImages/safari.png";
import predictions from "../assets/images/projectImages/predictions.png";
import rehoboth from "../assets/images/projectImages/rehoboth.png";

export const projects = [
  {
    title: "Iowa Eateries",
    ongoing: false,
    description:
      "A comprehensive hotel website with an integrated hotel management system. It comes with user-friendly features that allow customers to explore and book hotel rooms, browse amenities, and make reservations effortlessly.",
    technology_stack: ["Node JS", "React JS", "Firebase"],
    githubLink: null,
    liveLink: "https://iowa-eateries.vercel.app/",
    imageUrl: iowa,
  },
  {
    title: "M-Duka E-commerce Website",
    ongoing: false,
    description:
      "A full stack e-commerce project that has authentication funtionalities, add to cart funtionalities, admin panel for product management funtionalities. It has Local payment method intergrated too.",
    technology_stack: ["Node JS", "Mongo DB", "Express JS", "Vue JS"],
    githubLink: "https://github.com/vskidevelopers/e-commerce_by_munene-m",
    liveLink: "https://m-duka-by-munene.vercel.app/",
    imageUrl: mduka,
  },

  {
    title: "Malikale Safaris Kenya",
    ongoing: false,
    description:
      "Embark on an unforgettable adventure with Malikale Safaris, a premier tourism and safari website dedicated to showcasing the beauty and wonders of the natural world. Immerse yourself in breathtaking landscapes, encounter diverse wildlife, and experience authentic cultural encounters.",
    technology_stack: ["HTML5", "CSS3", "ES6"],
    githubLink: "https://github.com/vskidevelopers/safari",
    liveLink: "https://malikale.co.ke/",
    imageUrl: safari,
  },
  {
    title: "Sporty Prediction Site",
    ongoing: false,
    description:
      "A sport prediction site that enhances user experience by providing reliable predictions, analysis, and statistics to help you make informed decisions when it comes to betting or simply enjoying the game. It harnesses the power of advanced algorithms and data analysis techniques, combined with expert football knowledge, to deliver precise match predictions.",
    technology_stack: ["Node JS", "Mongo DB", "Express JS", "Vue JS"],
    githubLink: "https://github.com/vskidevelopers/Predictions-server",
    liveLink: "https://predictionsite.vercel.app/",
    imageUrl: predictions,
  },
  {
    title: "Rehoboth Open Door Website",
    ongoing: true,
    description:
      "Discover a haven of spiritual growth, connect with a loving community, and embark on a journey of faith and purpose. Rehoboth Open Doors is an ongoing project where users will come to discover a diverse range of spiritual resources, including inspirational sermons, thought-provoking articles, and engaging multimedia content.",
    technology_stack: ["Node JS", "PostgreSQL", "Django", "Next JS"],
    githubLink: "https://github.com/vskidevelopers/rehoboth",
    liveLink: "https://rehoboth.vercel.app/",
    imageUrl: rehoboth,
  },
];
