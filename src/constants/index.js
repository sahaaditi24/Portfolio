import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    github,
  
    school,
    Higherseconadry,
    carrent,
    jobit,
    tripguide,
    threejs,
    College,
    dcrime,
    revive,
    Theatre1,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      id: 1,
      title: "ReactJs",
      icon: web,
    },
    {
      id: 2,
      title: "TailWindCSS",
      icon: mobile,
    },
    {
      id: 3,
      title: "HTML, CSS, JS",
      icon: backend,
    },
    {
      id:4,
      title: "Three js",
      icon: creator,
    },

    {
      id: 5,
      title: "JAVA",
      icon: web,
    },
    {
      id: 6,
      title: "MySQL",
      icon: mobile,
    },
    {
      id: 7,
      title: "DSA using Java",
      icon: backend,
    },
    {
      id:8,
      title: "DBMS",
      icon: creator,
    },
    
  ];



  
    

  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: github,
    },
  
    
  ];
  
  const experiences = [
    {
      title: "High School- ST. Paul Hr. Sec School",
      icon: school,
      iconBg: "#383E56",
      date: "2019",
      points: [
        "Secured 92.5% in Class 10 board examination.",
        "Completed under NBSE board.",
        "Studied in Dimapur, Nagaland.",
        "2019",
        
      ],
    },
    {
      title: "Higher Secondary- DAV School",
      icon: Higherseconadry,
      iconBg: "#E6DEDD",
      date: "2019 - 2021",
      points: [
        "Secured 90% in Class 12 board examination.",
        "Completed under CBSE board.",
        "Studied in Siliguri, West Bengal.",
        "2021",
      ],
    },
    {
      title: "B.Tech - University of Engineering & Management, Kolkata",
      icon: College,
      iconBg: "#383E56",
      date: "2021 - 2025",
      points: [
        "Achieved a CGPA of 8.66 till the 6th semester.",
        "Pursuing a degree in Computer Science Engineering (CSE).",
        "Specializing in IoT CS BT.",
        "Expected graduation: 2025.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "1st Position in Innofusion 1.0 Hackathon",
      
      designation: "with project D-Crime among 1200+ participants",
      
    },
    {
      testimonial:
        "2nd Runners Up in HackNIT, Rourkela - Hackathon",
      
      designation: "with project REVIVE among 270+ participants",
      
    },
    {
      testimonial:
        "Top-10 position in Hack4Bengal",
      
      designation: "among 400+ participants",
      
    },
  ];
  
  const projects = [
    {
      name: "REVIVE",
      description:
        "A waste management platform promoting sustainability through smart QR bins, van scheduling, and community engagement. It uses IoT sensors for real-time alerts and rewards, built with MERN Stack, Google Maps API, and sensors for efficient waste management.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
      ],
      image: revive,
      source_code_link: "https://github.com/sahaaditi24/Revive",
    },
    {
      name: "D-Crime",
      description:
        "D-Crime enhances urban safety by providing real-time assistance, SOS alerts, and safe routes, while streamlining crime reporting and investigations for faster responses. Built with React.js, Node.js, and Google Maps API, it ensures smoother, more efficient public safety measures.",
      tags: [
        {
          name: "MERN Stack",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Blockchain",
          color: "blue-text-gradient",
        },
        {
          name: "AIML",
          color: "green-text-gradient",
        },
        {
          name: "Solidity",
          color: "pink-text-gradient",
        },
      ],
      image: dcrime,
      source_code_link: "https://github.com/sahaaditi24/CrimeReport",
    },
    {
      name: "Theatre shows Booking System",
      description:
        "A Theatre booking platform that allows users to book Bengali Theatre shows, and offers curated recommendations for popular shows.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "Js",
          color: "pink-text-gradient",
        },
      ],
      image: Theatre1,
      source_code_link: "https://github.com/sahaaditi24/Theatreproject",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };