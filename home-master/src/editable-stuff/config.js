// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#0066cc, #00cc99, #3399ff, #2ecc71, #66d9e8, #00796b",
  firstName: "Botka",
  middleName: "",
  lastName: "László",

  icons: [
    {
      image: "fa-github",
      url: "https://github.com/botkal",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/laszlo.botka.1",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/laszlo.botka/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lbotka/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,

  imageLink: require("../editable-stuff/Photo.png"),
  imageSize: 375,
 
  resume_hu: "https://drive.google.com/file/d/1487dolD5r678YCSaRXmZ4FTlIZtsTAJA/view?usp=sharing",
  resume_en: "https://drive.google.com/file/d/1MCZzl-x8TGdkd9gAhMdnpLdtgXZ1sV5Y/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]

const repos = {
  show: true,

  gitHubUsername: "Botkal", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION

const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  images: [
    { 
      img: require("../editable-stuff/Photo.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Photo.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};


// SKILLS SECTION

//add key to translations

const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { key: "python", value: 75 },
    { key: "sql", value: 75 },
    { key: "data_structures", value: 85 },
    { key: "c_cpp", value: 65 },
    { key: "javascript", value: 75 },
    { key: "angular", value: 65 },
    { key: "html_css", value: 90 },
    { key: "java", value: 50 },
  ],
  softSkills: [
    { key: "goal_oriented", value: 80 },
    { key: "collaboration", value: 90 },
    { key: "positivity", value: 75 },
    { key: "adaptability", value: 85 },
    { key: "problem_solving", value: 75 },
    { key: "empathy", value: 90 },
    { key: "organization", value: 70 },
    { key: "creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,

  email: "laszlo.botka@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: '2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: '2017 – 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
