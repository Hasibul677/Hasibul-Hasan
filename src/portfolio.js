/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hasibul Hasan Portfolio",
  description:
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  og: {
    title: "Hasibul Hasan Portfolio",
    type: "website",
    url: "https://hasibulhasan.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Md Hasibul Hasan",
  logo_name: "Hasibul Hasan",
  nickname: "",
  subTitle:
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  resumeLink:
    "https://drive.google.com/file/d/1o6ZNoCco9nQU6GE13_g4YR7Wrqse6iMt/view?usp=sharing",
  portfolio_repository: "https://github.com/Hasibul677",
  githubProfile: "https://github.com/Hasibul677",
};

//Social Media Link
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Hasibul677",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/md-hasibul-hasan-793407164/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:hhasibul677@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/hhasibul2",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
];
//Home Page Skill
const skills = {
  data: [
    {
      id: 1,
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux.",
        "⚡ For design I have experience on Adobe XD and Figma file.",
        "⚡ Creating application backend in Node, Express & MongoDB.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "International University of Business Agriculture and Technology",
      subtitle: "Bsc in Computer Engineering",
      logo_path: "iubat.png",
      alt_name: "IIITDM Kurnool",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ I have studied computer engineering subjects like DBMS, OS, Software Engineer, Algorithm etc.",
        "⚡ I have studied Programming Language's like C, C++, Java, JS etc.",
        "⚡ Apart from this, I have done courses on Web Development, Mobile Application Development and Full Stack Development.",
        "⚡ I was selected for Academic IT Mentor for consistently best performance in academics.",
      ],
      website_link: "https://iubat.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      id: 1,
      title: "Software Engineer",
      subtitle: "NAJJ Technologies Limited",
      logo_path: "najj-cerificate.png",
      certificate_link:
        "https://drive.google.com/file/d/1EzZ7f70kRkB0RPt7VRup35sITuY-vb1X/view?usp=sharing",
      alt_name: "Halcyon",
      color_code: "#8C151599",
    },
    {
      id: 1,
      title: "Web Development",
      subtitle: "Halcyon",
      logo_path: "intern.png",
      certificate_link:
        "https://drive.google.com/file/d/1ScLdQH4TE1ssNN82vfX1HJq9mWK9NZFC/view?usp=sharing",
      alt_name: "Halcyon",
      color_code: "#8C151599",
    },
    {
      id: 2,
      title: "Junior Web Developer",
      subtitle: "Programming Hero",
      logo_path: "ph.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZALR0m8tu-XkE6yplD9FP4sYM2SOCt-w/view?usp=sharing",
      alt_name: "Programming Hero",
      color_code: "#00000099",
    },
    {
      id: 3,
      title: "Hash Code 2020",
      subtitle: "Google",
      logo_path: "hash.png",
      certificate_link:
        "https://drive.google.com/file/d/1vbxy1cZlu_sv5-QQo_Gqj2Q3rPrxaSri/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am working on MERN Stack Development. I'm experience on this field.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "BABL [Business Accelerate BD Ltd]",
          company_url: "https://businessaccelerate.com.bd/",
          logo_path: "babl.jpeg",
          duration: "February 2023 - Present",
          location:
            "Sand Stone GA 9/3 Level: 03, Progoti Shoroni Shoroni Shajadpur, Dhaka-1212, Bangladesh",
          description:
            "Business Accelerate BD Ltd. operates as a Technology Business Entity with the vision of helping people (B2C) and Businesses (B2B) with cutting-edge technologies and its derivatives to improve our life (B2C) and realization of the value of automation (B2B).BABL aims to help Businesses in different types of sectors to reach their optimum level through implementation of smart software’s which help Businesses in achieving process automation and will also help to streamline the relationship between consumer and service providers in respective Business sectors.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "NAJJ Technologies Ltd",
          company_url: "https://najjtechnologies.com/",
          logo_path: "najj.jpg",
          duration: "November 2021 - January 2023",
          location:
            "House# GA, National Rose Valley, 39 Japan School Rd, Dhaka-1212, Bangladesh",
          description:
            "NAJJ Technologies Ltd. is a specialist software development company run by a dedicated and highly experienced IT management team, having all worked in technology and software solutions across globe. We combine this skill set with highly talented delivery specialists, ranging from project managers, business analysts to commercial software engineers. Based in Dhaka, Bangladesh we support clients throughout globe.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer (Intern)",
          company: "Halcyon",
          company_url: "https://halcyonbd.com/",
          logo_path: "halcyon.webp",
          duration: "October 2020 - January 2021",
          location: "Dhaka, Bangladesh",
          description:
            "Here I was a intern candidate. In appreciation for my successful work as a Web Developer intern at Halcyon",
          color: "#9b1578",
        },
        {
          title: "Junior Web Developer",
          company: "Programming Hero",
          company_url: "https://www.programming-hero.com/",
          logo_path: "programming.jpg",
          duration: "May 2021 - Dec 2021",
          location: "Online Learnig",
          description:
            "Here I was a Student. For build-up my career, I learn so many thing about web development.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Android Development",
          company: "IUBAT",
          company_url: "https://iubat.edu/",
          logo_path: "android.jpg",
          duration: "January 2019 - Dec 2019",
          location: "Dhaka, Bangladesh",
          description:
            "Here I was a android deveopment mentor. My role is helping student for build-up their career as a android developer.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create MERN projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hasibul.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Shajadpur, Gulshan, Dhaka 1212, Bangladesh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/GiJaLh9D5QqkQbQZ9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+88 01308554163",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
