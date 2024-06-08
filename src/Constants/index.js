import web from "../assets/web.png";
import react from "../assets/react.png";
import ux from "../assets/ux.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import postman from "../assets/postman.png";
import tailwindcss from "../assets/tailwindcss.png";
import bootstrap from "../assets/bootstrap.png";
import jquery from "../assets/jquery.png";
import python from "../assets/python.png";
import django from "../assets/django.png";
import vscode from "../assets/vscode.png";
import pycharm from "../assets/pycharm.png";
import inshorts from "../assets/inshorts.png";
import imdb from "../assets/imdb.jpg";
import note from "../assets/note.png";

const services = [
  {
    title: "Web Developer",
    icon: web
  },
  {
    title: "React Developer",
    icon: react
  },
  {
    title: "UI/UX Designer",
    icon: ux
  }
];

const technologies = [
  {
    name: "HTML",
    icon: html
  },
  {
    name: "CSS",
    icon: css
  },
  {
    name: "Javascript",
    icon: javascript
  },
  {
    name: "ReactJs",
    icon: reactjs
  },
  {
    name: "Redux",
    icon: redux
  },
  {
    name: "NodeJs",
    icon: nodejs
  },
  {
    name: "ExpressJs",
    icon: expressjs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "Git",
    icon: git
  },
  {
    name: "TailwindCss",
    icon: tailwindcss
  },
  {
    name: "Postman",
    icon: postman
  },
  {
    name: "Bootstrap",
    icon: bootstrap
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "Django",
    icon: django
  },
  {
    name: "VsCode",
    icon: vscode
  },
  {
    name: "PyCharm",
    icon: pycharm
  },
  {
    name: "jQuery",
    icon: jquery
  }
];

const projects = [
  {
    name: "Inshorts New App",
    description:
      "Developed a responsive news app using React.js and Material-UI, with a Node.js and Express.js backend integrated with MongoDB for efficient API-based content management, ensuring optimal user experience.",

    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient"
      },
      {
        name: "ReactJs",
        color: "green-text-gradient"
      }
    ],
    image: inshorts,
    source_code_link: "https://github.com/vishalverma1273/Inshorts-clone",
    source_deploy_link:
      "https://6663eff300616e83ba3c5273--inspiring-capybara-304419.netlify.app/"
  },
  {
    name: "IMDb Clone",
    description:
      "Developed an IMDb clone with React.js and dynamic routing, styled with Material-UI for a modern, responsive interface, and integrated TMDB API to display upcoming, trending, and top-rated movies.",

    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient"
      },
      {
        name: "ReactJs",
        color: "green-text-gradient"
      }
    ],
    image: imdb,
    source_code_link: "https://github.com/vishalverma1273/IMDb-clone-",
    source_deploy_link:
      " https://665ef6d1e69d420078fa645c--celebrated-bonbon-c68c1a.netlify.app/imdb"
  },
  {
    name: "Note Keeper",
    description:
      "Developed a web app with ReactJS and Tailwind CSS for CRUD operations on work or daily task notes, stored in local storage. Users can create, view, update, delete, and sort notes by date.",

    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient"
      },
      {
        name: "ReactJs",
        color: "green-text-gradient"
      }
    ],
    image: note,
    source_code_link: "",
    source_deploy_link: "https://notes-maker-react-app.netlify.app/"
  }
];
export { services, technologies, projects };
