/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hasibul Hasan Portfolio",
  description:
    // "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Hello This is Md. Hasibul Hasan, a skilled front-end developer with a strong proficiency in React.js, Next.js, Redux, and JavaScript. With a passion for creating interactive and user-friendly web applications, I am leveraging their expertise in these technologies to craft engaging and responsive user interfaces. Their dedication to staying updated with the latest trends and best practices in front-end development ensures that they deliver exceptional digital experiences. I am the go-to developer for turning complex ideas into elegant and functional web solutions.",
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
    "Software Engineer specializing in frontend development with 4 years of experience. Expert in building dynamic, high-performance web applications using React.js, Next.js, and TypeScript. Passionate about crafting responsive interfaces, clean code, and seamless user experiences.",
  resumeLink:
    "https://drive.google.com/file/d/1xAqNIc1gSQTsVBdxqmgrIDIoGxaxoghg/view?usp=sharing",
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
];
//Home Page Skill
const skills = {
  data: [
    {
      id: 1,
      title: "",
      fileName: "FullStackImg",
      categories: [
        {
          title: "Frontend",
          skills: [
            "⚡ Building responsive and user-friendly front ends using React.js, Next.js, and TypeScript",
            "⚡ Creating modular and reusable UI components for scalability",
            "⚡ Expertise in CSS frameworks like Tailwind CSS, SASS, and React Bootstrap",
            "⚡ Ensuring performance, accessibility (WCAG), and cross-browser compatibility",
          ],
          tools: [
            "React.js",
            "Next.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "SASS",
            "React Bootstrap",
          ],
        },
        {
          title: "Backend",
          skills: [
            "⚡ Designing and developing high-performance, scalable RESTful APIs using Node.js and Express.js",
            "⚡ Building and optimizing database schemas, writing complex queries, and ensuring data integrity with PostgreSQL",
            "⚡ Developing efficient document-based data models and operations with MongoDB",
            "⚡ Implementing robust authentication, authorization, and security best practices in APIs",
          ],
          tools: [
            "Node.js",
            "Express.js",
            "RESTful APIs",
            "PostgreSQL",
            "MongoDB",
          ],
        },
        {
          title: "State Management",
          skills: [
            "⚡ Managing complex application state using modern libraries like Redux (with Redux Toolkit) and Zustand",
            "⚡ Implementing predictable state containers with Redux, including middleware like Thunk for async logic",
            "⚡ Leveraging Zustand for a simpler, lightweight state management solution with minimal boilerplate",
            "⚡ Structuring global state for optimal performance, scalability, and developer experience",
          ],
          tools: ["Redux", "Redux Toolkit", "Zustand", "Context API"],
        },
        {
          title: "Testing",
          skills: [
            "⚡ Writing comprehensive unit tests with Jest and other testing frameworks",
            "⚡ Testing React components and user interactions with React Testing Library",
            "⚡ Ensuring code reliability and preventing regressions through test-driven development (TDD)",
          ],
          tools: ["Jest", "React Testing Library", "Testing Library"],
        },
        {
          title: "Version Control",
          skills: [
            "⚡ Using Git and GitHub for version control in collaborative development environments",
            "⚡ Managing feature branches, pull requests, and code reviews to maintain code quality",
            "⚡ Resolving merge conflicts and implementing rebase strategies for a linear history",
            "⚡ Automating workflows with GitHub Actions/GitLab CI for continuous integration",
          ],
          tools: ["Git", "GitHub", "GitLab", "GitHub Actions", "GitLab CI/CD"],
        },
        {
          title: "Tools & IDEs",
          skills: [
            "⚡ Proficient in using VSCode and IntelliJ IDEA for efficient development and debugging",
            "⚡ Utilizing Postman for API testing, documentation, and workflow automation",
            "⚡ Leveraging browser DevTools for performance profiling and debugging",
            "⚡ Using Sublime Text for quick edits and lightweight scripting tasks",
          ],
          tools: [
            "VSCode",
            "IntelliJ IDEA",
            "Postman",
            "Sublime Text",
            "Chrome DevTools",
          ],
        },
        {
          title: "Package Managers",
          skills: [
            "⚡ Managing project dependencies and scripts using npm and Yarn",
            "⚡ Implementing efficient dependency versioning and resolution strategies",
            "⚡ Configuring and optimizing package.json and yarn.lock files",
            "⚡ Creating and publishing packages to public and private registries",
          ],
          tools: ["npm", "yarn", "npx"],
        },
        {
          title: "Containerization",
          skills: ["⚡ Basic containerization with Docker"],
          tools: ["Docker"],
        },
        {
          title: "Development Methodologies",
          skills: [
            "⚡ Working in Agile/Scrum development methodologies with sprint planning and iterative delivery",
            "⚡ Utilizing project management tools like Jira for task tracking and backlog grooming",
            "⚡ Implementing CI/CD practices for automated testing and deployment pipelines",
            "⚡ Collaborating effectively in cross-functional teams using Git flow and trunk-based development",
          ],
          tools: ["Agile", "Scrum", "Jira", "CI/CD", "Git Flow"],
        },
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: { color: "#CC6699" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#06B6D4" },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: { color: "#764ABC" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: { color: "#C21325" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
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
      subtitle: "Bsc. in Computer Science and Engineering",
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
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Engineer I",
          company: "AKIJ iBOS Limited",
          role: "Frontend Developer",
          company_url: "https://ibos.io/",
          logo_path: "ibos.png",
          duration: "February 2026 - Present",
          location: "6/2 Kazi Nazrul Islam Rd, Lalmatia, Dhaka-1207",
          description:
            "AKIJ iBOS started with one goal: to make business management easier with technology that everyone can rely on. We saw that many companies were working hard, but their systems slowed them down, so we built tools that stay reliable and grow with the business. Today, organisations choose AKIJ iBOS because they want premium but affordable solutions that remove extra hassle. With a team that understands real business challenges, we create solutions that help companies work faster, stay organised, and prepare for the future.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "BABL [Business Accelerate BD Ltd]",
          role: "Frontend Developer",
          company_url: "https://businessaccelerate.com.bd/",
          logo_path: "babl.jpeg",
          duration: "February 2023 - January 2026",
          location:
            "Sand Stone GA 9/3 Level: 03, Progoti Shoroni Shoroni Shajadpur, Dhaka-1212, Bangladesh",
          description:
            "Business Accelerate BD Ltd. operates as a Technology Business Entity with the vision of helping people (B2C) and Businesses (B2B) with cutting-edge technologies and its derivatives to improve our life (B2C) and realization of the value of automation (B2B).BABL aims to help Businesses in different types of sectors to reach their optimum level through implementation of smart software’s which help Businesses in achieving process automation and will also help to streamline the relationship between consumer and service providers in respective Business sectors.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "NAJJ Technologies Ltd",
          role: "Full-Stack Developer",
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
    "My projects leverage a wide range of cutting-edge technology tools. I excel in developing robust web applications and deploying them on cloud infrastructure for enhanced scalability and performance.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hasibul.png",
    description:
      "Feel free to connect with me on any social media platform—I'm active on almost all of them! If you send me a message, I’ll make sure to reply within 24 hours. Whether it’s for work, networking, or a quick chat, I’m just a message away.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Progoti Shoroni, Shajadpur, Dhaka-1212, Bangladesh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/fNZH3EjhmVgLjEm17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
