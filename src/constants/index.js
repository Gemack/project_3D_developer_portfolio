import {
  creator,
  e_plan,
  reactjs,
shopping,
sentiment,
  asp,
  laravel,
  analysis,
  gems,
  admin,
  ecommerce
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer (API)",
    icon: asp,
  },
  {
    title: "Fullstack",
    icon: laravel,
  },
  {
    title: "Research and Data Analysis",
    icon: analysis,
  },
];

const experiences = [
  {
    title: "Web Developer Instructor",
    company_name: "Teen Coders",
    icon: creator,
    iconBg: "#383E56",
    date: "December 2021 - October 2022",
    points: [
      "Instruct both international and domestic students on creating a frontend web application with HTML and CSS.",
      "Provide guidance to foreign and local students on how to learn and use JavaScript and ReactJS.",
      "Establish an online class through Zoom and monitor the advancement of the students.",
      "Participating in code reviews with student and providing constructive feedback to supervisor.",
    ],
  },
  {
    title: "Data Analysis (voluntary)",
    company_name: "NYSC",
    icon: creator,
    iconBg: "#383E56",
    date: "October 2022 - November 2022",
    points: [
      "Examine and analyze data gathered from a survey to assess overall viewpoints on the advancement of camping sessions.",
      "identify any prejudices or tendencies among different groups of individuals at the NYSC Orientation camp.",
      "Assessing and offering constructive feedback to colleagues and supervisors.",
     
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Gems",
    icon: gems,
    iconBg: "#E6DEDD",
    date: "November 2022 - Present",
    points: [
      "Creating and sustaining Gemspay documentation website using Docasaurus with React.js and other relevant technologies.",
      "Build API using ASP.NET",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Construct a full-stack web portal utilizing Laravel and Tailwind CSS.",
      "Taking part in code reviews and offering constructive criticism to superiors.",
    ],
  },
];

const projects = [
  {
    name: "Ecommerce Admin Dashboard with Laravel and React",
    description:
      "This project is an admin dashboard for an ecommerce website, comprising features such as admin user management, CRUD operations on ecommerce products, and the ability to create trending products .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Context api",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/Gemack/Ecommerce-react-next-laravel",
  },
  {
    name: "Ecommerce web page with React(Next) and Laravel",
    description:
      "An Ecommerce website where user can shop for product, ",
    tags: [
      {
        name: "react and Next",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Gemack/Ecommerce-react-next-laravel",
  },
  {
    name: "Ecommerce shopping cart",
    description:
      "an ecommerce shopping cart system using React Reducers that enables users to filter, search, star, select and checkout products. The system  allow users to easily find and sort products based on their preferences, add them to their cart, and proceed to checkout.",
    tags: [
      {
        name: "React Reducer",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shopping,
    source_code_link: "https://github.com/Gemack/Online-Sore",
  },
  {
    name: "Sentiment Analysis Using Python",
    description:"using the Tfidfvectorizer in Sklearn this model classsify reviews in a book review into two category. Good or bad.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "sklearn",
        color: "green-text-gradient",
      },
      {
        name: "jupyter notebook",
        color: "pink-text-gradient",
      },
    ],
    image: sentiment,
    source_code_link: "https://github.com/Gemack/Sentiment-analysis-with-python-bag-of-words",
  },
  {
    name: "Frontend design using Jquery and AOS",
    description:"An event planner frontend web page. This web page is built using pure CSS and JavaScript.",
    tags: [
      {
        name: "html css",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "Animate on Scroll",
        color: "pink-text-gradient",
      },
    ],
    image: e_plan,
    source_code_link: "https://github.com/Gemack/Event-planner-website",
  },
];

export { services,  experiences,  projects };


