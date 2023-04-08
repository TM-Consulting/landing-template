import Header from "../layouts/Header";

const formMapper = [
  {
    id: "name",
    order: 1,
    type: "text",
    required: true,
    placeholder: "Enter your name",
    minlength: 2,
  },
  {
    id: "email",
    order: 2,
    type: "email",
    required: true,
    placeholder: "Enter your email",
  },

  {
    id: "message",
    order: 7,
    type: "textarea",
    required: false,
    placeholder: "Enter your message",
    minlength: 20,
  },
];
const contactFormMapper = [
  ...formMapper,
  {
    id: "subject",
    type: "text",
    order: 3,
    required: false,
    placeholder: "Enter the subject",
    fullWidth: true,
    minlength: 5,
  },
];

const candidatureFormMapper = [
  ...formMapper,

  {
    id: "city",
    order: 4,
    type: "text",
    required: false,
    placeholder: "Enter the city",
    minlength: 2,
  },
  {
    id: "phone",
    order: 5,
    type: "text",
    required: false,
    placeholder: "Enter your phone number",
    minlength: 9,
  },
  {
    id: "file",
    order: 6,
    type: "file",
    required: false,
    placeholder: "Enter your email",
    fullWidth: true,
  },
];
const commonContainers = {
  services: {
    title: "Services",
    description: "Our Excellent Cloud consultancy services",
    items: [
      {
        icon: "clouds",
        group: "Multi-Cloud",
        service: "Environment Lifecycle",
        description:
          "Seamlessly transition to the cloud with our Multi-Cloud Migration Service. Our team of experts will guide you through every step of the process, ensuring a smooth and efficient migration across various cloud platforms. We'll help you identify the best strategy, minimize downtime, and optimize costs while securing and enhancing your business operations. Embrace the power of multi-cloud with MIT Consulting.",
        readmore: "Read More",
      },
      {
        icon: "rocket-takeoff-fill",
        group: "Modern Compute Migrations",
        service: "Kubernetes & DevOps",
        description:
          "Unlock the full potential of your software with our comprehensive Kubernetes and DevOps services. We streamline deployments, automate infrastructure management, and optimize workflows to deliver high-quality, scalable applications with speed and efficiency. Trust our team of experts to elevate your business to new heights with cutting-edge, secure, and resilient solutions.",
        readmore: "Read More",
      },
      {
        icon: "code-square",
        group: "Web Development",
        service: "Dev & Maintenance",
        description:
          "Discover exceptional Web Development and Maintenance Services tailored for your business. Our experts design stunning, user-friendly websites that captivate and convert. We ensure seamless updates, top-tier security, and peak performance, propelling your online presence to new heights. Partner with us for a digital experience like no other. And secure the best design and maintenance for your applications.",
        readmore: "Read More",
      },
    ],
  },
  about: {
    title: "About US",
    titleOffer: "We Offer Cloud and K8S consultancy services",
    description:
      "Our consultants are experts in cloud computing platforms such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform, as well as container technologies like Kubernetes. They are able to provide customized solutions that help organizations leverage the benefits of cloud computing and containerization, such as improved scalability, flexibility, and cost savings.",
    yearsOfExp: "6 Years Experience",
    certificates: "10 Certificates",
  },
  testmonial: {
    header: "Testmonial",
    title: " What People Say About Our Services",
    items: [
      {
        image: "testimonial-1.jpg",
        description:
          "Crafted a stunning, user-friendly website that boosted our online presence. Exceptional design and functionality. Thanks MIT Consulting. Highly recommend!",
        clientName: "Sébastien Dufortier",
        profession: "Entrepreneur",
      },
      {
        image: "testimonial-2.jpg",
        description:
          "MIT Consulting's Multi-Cloud Service made our migration seamless, cost-effective, and secure. Expert guidance elevated our cloud strategy. Top choice!",
        clientName: "Fintella Whispershadow",
        profession: "Product Owner",
      },
      {
        image: "testimonial-3.jpg",
        description:
          "MIT Consulting's DevOps services boosted our app performance, streamlined deployments, and optimized workflows. Their expertise helped us excel. Highly recommend!",
        clientName: "Grégoire Marceuil",
        profession: "Program Manager",
      },
    ],
  },
};
const contactInfo = {
  companyAddress: "26 rue Bosquet 75007 Paris",
  phoneNumber: "+33 7 58 59 75 95",
  emailAddress: "mmikou@mitconsulting.fr",
  lang: "en",
};
const sweetMessages = {
  success: "L'email a bien été envoyé.",
  error: "L'email n'a pas bien envoyé, merci d'essayer à nouveau.",
};

const companyName = "MIT Consulting";

const siteData = {
  header: {
    navLinks: [
      {
        url: "home",
        text: "Home",
        show: true,
        title: "Home",
      },
      {
        url: "about",
        text: "About",
        show: true,
        title: "About Us",
      },
      {
        url: "services",
        text: "Services",
        show: true,
        title: "Services",
      },
      {
        url: "career",
        text: "Career",
        show: true,
        title: "Career",
      },
      {
        url: "contact",
        text: "Contact",
        show: true,
        title: "Contact Us",
      },
    ],
    phoneNumber: "+33758597595",
    phoneBgColor: "bg-secondary",
    companyName: {
      fPart: companyName.split(" ")[0],
      lPart: companyName.split(" ").slice(1).join(" "),
    },
  },
  footer: {
    pagelinks: [
      {
        title: "Quick Links",
        linksTitles: [
          {
            linkTitle: "Home",
            linkRef: "/home",
          },
          {
            linkTitle: "About Us",
            linkRef: "/about",
          },
          {
            linkTitle: "Contact Us",
            linkRef: "/contact",
          },
          {
            linkTitle: "Our Services",
            linkRef: "/services",
          },
        ],
      },
      {
        title: "Popular Links",
        linksTitles: [
          {
            linkTitle: "Home",
            linkRef: "/home",
          },
          {
            linkTitle: "About Us",
            linkRef: "/about",
          },
          {
            linkTitle: "Contact Us",
            linkRef: "/contact",
          },
          {
            linkTitle: "Our Services",
            linkRef: "/services",
          },
        ],
      },
    ],
    contactinfo: {
      title: "Get In Touch",
      ...contactInfo,
    },
    socialmedialinks: {
      title: "Follow Us",
      SocialMediaLinks: [
        {
          provider: "twitter",
          link: "",
        },
        {
          provider: "facebook",
          link: "",
        },
        {
          provider: "linkedin",
          link: "https://www.linkedin.com/in/mouad-mikou-a33008130/",
        },
        {
          provider: "instagram",
          link: "",
        },
      ],
    },
  },
  copyright: {
    companyName: companyName,
    producerName: "TM Hosting",
    producerLink: "https://www.linkedin.com/in/monaim-touinssi/",
    mention: ". All Rights Reserved.",
    designedby: "Designed by",
  },
  pages: {
    home: {
      pageTitle: "Home",
      containers: {
        carousel: {
          items: [
            {
              image: "carousel-1.jpg",
              title: "Multi-Cloud",
              subTitle:
                "Strategic Design, Migration, FinOps, Maintenance & Monitoring",
              buttons: [
                { url: "services", text: "Services" },
                { url: "contact", text: "Contact Us" },
              ],
            },
            {
              image: "carousel-2.jpg",
              title: "Kubernetes/Compute",
              subTitle:
                "Cluster Design, Workloads Migration, Monitoring & Maintenance",
              buttons: [
                { url: "services", text: "Services" },
                { url: "contact", text: "Contact Us" },
              ],
            },
            {
              image: "carousel-3.jpg",
              title: "DevOps",
              subTitle: "IaC Development, Pipelines, Deployment, Monitoring",
              buttons: [
                { url: "services", text: "Services" },
                { url: "about", text: "About Us" },
              ],
            },
            {
              image: "carousel-4.jpg",
              title: "WebDev",
              subTitle:
                "Custom web development, Web design, WebApps maintenance & support",
              buttons: [
                { url: "services", text: "Services" },
                { url: "about", text: "About Us" },
              ],
            },
          ],
        },
        ...commonContainers,
      },
    },
    about: {
      pageTitle: "About",
      containers: {
        hero: {
          title: "About Us",
          child: { text: "About", url: "about" },
          parent: { text: "Home", url: "home" },
          bgImage: "aboutus-bg.jpg",
          description:
            "Discover a team dedicated to empowering your business through cutting-edge digital solutions, personalized strategies, and industry expertise. We're committed to fostering growth, driving innovation, and ensuring long-term success for our valued clients.",
          color: "#ffffff",
        },
        about: { ...commonContainers.about },
        oldProjects: {
          header: "Old Project",
          title: "Please check our old projects",
          items: [
            {
              name: "Cloud Native Pricing Platform",
              image: "project-1.jpg",
              description:
                "Cloud native development of an online exposed pricing platform",
            },
            {
              name: "IaC template and pipelines for automation",
              image: "project-2.jpg",
              description:
                "Develop IaC template and DevOps pipelines for Blue-Green model",
            },
            {
              name: "Azure Migration & Architecture design",
              image: "project-3.jpg",
              description:
                "Define architeture standard for Azure services consumption",
            },
          ],
        },
      },
    },
    services: {
      pageTitle: "Services",
      containers: {
        hero: {
          title: "Services",
          child: { text: "Services", url: "services" },
          parent: { text: "Home", url: "home" },
          bgImage: "services-bg.jpg",
          description:
            "Experience a comprehensive suite of services tailored to your business needs. From web development and cloud migration to DevOps and beyond, we deliver exceptional solutions that drive growth, optimize workflows, and enhance your digital presence.",
          color: "#ffffff",
        },
        services: { ...commonContainers.services },
        testmonial: { ...commonContainers.testmonial },
      },
    },
    contact: {
      pageTitle: "Contact Us",
      containers: {
        hero: {
          title: "Contact Us",
          child: { text: "Contact", url: "contact" },
          parent: { text: "Home", url: "home" },
          bgImage: "contact-bg.jpg",
          description:
            "Get in touch with our team of experts to explore the perfect solutions for your business. We're eager to hear your story, understand your challenges, and collaborate on a path to success. Reach out today and let's embark on this journey together.",
          color: "#ffffff",
        },
        contact: {
          header: "Contact Us",
          title: "Please Feel Free To Contact Us",
          form: {
            fields: [...contactFormMapper],
            buttonTitle: "Send Message",
            errorMessage: "Please fill all the required fields correctly",
            sweetMessages: sweetMessages,
          },
          contactInfos: [
            {
              title: "Our Office",
              value: contactInfo.companyAddress,
              type: "geo-alt",
            },
            {
              title: "Email Us",
              value: contactInfo.emailAddress,
              type: "envelope-open",
            },
            {
              title: "Call Us",
              value: contactInfo.phoneNumber,
              type: "phone-vibrate",
            },
          ],
          // Please make sure u replace all special characters on the address with space.
          address: contactInfo.companyAddress,
        },
      },
    },
    career: {
      pageTitle: "Career",
      containers: {
        hero: {
          title: "Career",
          child: { text: "Career", url: "career" },
          parent: { text: "Home", url: "home" },
          bgImage: "career-bg.jpg",
          description:
            "Join our dynamic team and contribute to a culture of innovation, collaboration, and growth. We value talent, embrace diversity, and prioritize personal development. Explore exciting opportunities and shape the future of digital solutions with us.",
          color: "#ffffff",
        },
        career: {
          header: "What excites you?",
          title: "Build your future with us",
          items: [
            {
              image: "position-1.jpg",
              title: "DevOps Engineer",
              description:
                "Seeking a skilled DevOps Engineer! Join our team to enhance deployments, automate infrastructure, and optimize workflows.",
            },
            {
              image: "position-2.jpg",
              title: "Cloud Architect",
              description:
                "Join our team as a Cloud Architect and revolutionize multi-cloud solutions. Expertise in AWS and Azure preferred.",
            },
            {
              image: "position-3.jpg",
              title: "K8S consultant",
              description:
                "Kubernetes Consultant Wanted! Join our team to streamline deployments, optimize workflows, and enhance scalability.",
            },
          ],
        },
        candidature: {
          header: "Apply Spontaneously",
          title: "Apply to our upcoming offers",
          form: {
            fields: [...candidatureFormMapper],
            buttonTitle: "Send Message",
            errorMessage: "Please fill all the required fields correctly",
            sweetMessages: sweetMessages,
          },
        },
      },
    },
  },
};

export { siteData, contactInfo };
