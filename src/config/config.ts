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
        icon: "flaticon-cctv",
        group: "Multi-Cloud",
        service: "Environment Lifecycle",
        description:
          "Our teams provide a full cloud lifecycle services. From designing the environment, to setting up and creating resources, passing by designing target architecture for specific apps.",
        readmore: "Read More",
      },
      {
        icon: "flaticon-cctv",
        group: "Group2",
        service: "Service2",
        description:
          "This is the first service served by the company on the groupo group1",
        readmore: "Read More",
      },
      {
        icon: "flaticon-cctv",
        group: "Group3",
        service: "Service3",
        description:
          "This is the first service served by the company on the groupo group1",
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
          "MIT Consulting helped us migrate our workloads from on-premises to Azure Cloud environment.",
        clientName: "ATJ",
        profession: "Product Owner",
      },
      {
        image: "testimonial-2.jpg",
        description:
          "MIT Consulting assisted us on our first Cloud Native experiende. They assisted us on defining the target arhcitecture, the Azure services to be used, and also the standards and best practices for every service.",
        clientName: "ATJ",
        profession: "Product Owner",
      },
      {
        image: "testimonial-3.jpg",
        description:
          "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stetamet eirmod eos labore diam",
        clientName: "ATJ",
        profession: "Product Owner",
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

const companyName = "MIT Consulting"

const siteData = {
  header: {
    navLinks: [
      {
        url: "home",
        text: "Home",
        show: true,
        title: 'Home',
      },
      {
        url: "about",
        text: "About",
        show: true,
        title: 'About Us',
      },
      {
        url: "services",
        text: "Services",
        show: true,
        title: 'Services',
      },
      {
        url: "career",
        text: "Career",
        show: true,
        title: 'Career',
      },
      {
        url: "contact",
        text: "Contact",
        show: true,
        title: 'Contact Us',
      },
    ],
    phoneNumber: "+33758597595",
    phoneBgColor: "bg-secondary",
    companyName: { fPart: companyName.split(" ")[0], lPart: companyName.split(" ").slice(1).join(" ") },
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
              subTitle: "Strategic Design, Migration, FinOps, Maintenance & Monitoring",
              buttons: [
                { url: "services", text: "Services" },
                { url: "contact", text: "Contact Us" },
              ],
            },
            {
              image: "carousel-2.jpg",
              title: "Kubernetes/Compute",
              subTitle: "Cluster Design, Workloads Migration, Monitoring & Maintenance",
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
              subTitle: "Custom web development, Web design, WebApps maintenance & support",
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
          bgImage: "About-Us.jpg",
          description:
            "This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.This page is to describe about us in all possible ways in life.",
          color: "#ffffff",
        },
        about: { ...commonContainers.about },
        oldProjects: {
          header: "Old Project",
          title: "Please check our old projects",
          items: [
            {
              name: "Cloud Native Pricing Platform",
              image: "team-1.jpg",
              description: "Cloud native development of an online exposed pricing platform",
            },
            {
              name: "Moad",
              image: "team-4.jpg",
              description: " rojoula had khouna ajiw 3Ndu",
            },
            {
              name: "Moad",
              image: "testimonial-2.jpg",
              description: " rojoula had khouna ajiw 3Ndu",
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
          bgImage: "carousel-1.jpg",
          description:
            " Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.",
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
          bgImage: "contact.jpg",
          description:
            " Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.",
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
          bgImage: "carousel-3.jpg",
          description:
            " Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.",
          color: "#ffffff",
        },
        career: {
          header: "What excites you?",
          title: "Build your future with us",
          items: [
            {
              image: "testimonial-1.jpg",
              title: "Data engineer",
              description:
                "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stetamet eirmod eos labore diam",
            },
            {
              image: "testimonial-1.jpg",
              title: "Data engineer",
              description:
                "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stetamet eirmod eos labore diam",
            },
            {
              image: "testimonial-1.jpg",
              title: "Data engineer",
              description:
                "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stetamet eirmod eos labore diam",
            },
          ],
        },
        candidature: {
          header: "Candidature spontané",
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
