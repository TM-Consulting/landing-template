export {};
const siteData = {
  header: {
    navLinks: [
      {
        url: "home",
        text: "Home",
        show: true,
      },
      {
        url: "about",
        text: "About",
        show: true,
      },
      {
        url: "service",
        text: "Service",
        show: true,
      },
      {
        url: "contactus",
        text: "Contact",
        show: true,
      },
    ],
    phoneNumber: "+21266677898",
    phoneBgColor: "bg-secondary",
    companyName: { fPart: "hello", lPart: "blabla" },
  },
  footer: {
    pagelinks: [
      {
        title: "Quick Links",
        linksTitles: [
        {
          linkTitle: "Home",
          linkRef: "/Home",
        },
        {
          linkTitle: "About Us",
          linkRef: "/About",
        },
        {
          linkTitle: "Contact Us",
          linkRef: "/Contact",
        },
        {
          linkTitle: "Our Services",
          linkRef: "/Services",
        }
        ]
      },
      {
        title: "Popular Links",
        linksTitles: [
        {
          linkTitle: "Home",
          linkRef: "/Home",
        },
        {
          linkTitle: "About Us",
          linkRef: "/About",
        },
        {
          linkTitle: "Contact Us",
          linkRef: "/Contact",
        },
        {
          linkTitle: "Our Services",
          linkRef: "/Services",
        }
        ]
      },
    ],    
    contactinfo:
    {
      title: "Get In Touch",
      companyAddress: "63 rue du lieutenant colonel prudhon, Argenteuil 95100",
      phoneNumber: "+33 7 58 59 75 95",
      emailAddress: "mikou.mouad.mail@gmail.com",
    },
    socialmedialinks:
    {
      title: "Follow Us",
      twitterLink: "",
      facebookLink: "https://www.facebook.com/",
      linkedinLink: "https://www.linkedin.com/in/mouad-mikou-a33008130/",
      instagramLink: ""
    }
  },
  copyright: {
    companyName: "MIT Consulting",
    producerName: "Tounissi Edition",
    producerLink: "https://www.linkedin.com/in/monaim-touinssi/",
    mention: ". All Rights Reserved.",
    designedby: "Designed by"
  },
  pages: {
    home: {
      containers: {
        carousel: {
          items: [
            {
              image: "carousel-1.jpg",
              title: "Safe & Secure Home 1",
              subTitle: "BEST SECURITY SERVICES",
              buttons: [
                { url: "services", text: "Services" },
                { url: "contactus", text: "Contact Us" },
              ],
            },
            {
              image: "carousel-2.jpg",
              title: "Safe & Secure Home 2",
              subTitle: "BEST SECURITY SERVICES",
              buttons: [
                { url: "services", text: "Services" },
                { url: "contactus", text: "Contact Us" },
              ],
            },
            {
              image: "carousel-3.jpg",
              title: "Safe & Secure Home 3",
              subTitle: "BEST SECURITY SERVICES",
              buttons: [
                { url: "services", text: "Services" },
                { url: "about", text: "About Us" },
              ],
            },
            {
              image: "carousel-1.jpg",
              title: "Safe & Secure Home 4",
              subTitle: "BEST SECURITY SERVICES",
              buttons: [
                { url: "services", text: "Services" },
                { url: "about", text: "About Us" },
              ],
            },
            {
              image: "carousel-3.jpg",
              title: "Safe & Secure Home 5",
              subTitle: "BEST SECURITY SERVICES",
              buttons: [
                { url: "services", text: "Services" },
                { url: "about", text: "About Us" },
              ],
            },
          ],
        },
        services: {
          title: "Services",
          description: "Our Excellent Cloud consultancy services",
          items:[
            {
              icon: "flaticon-cctv",
              group: "Group1",
              service: "Service1",
              description: "This is the first service served by the company on the groupo group1",
              readmore: "Read More",
            },
            {
              icon: "flaticon-cctv",
              group: "Group2",
              service: "Service2",
              description: "This is the first service served by the company on the groupo group1",
              readmore: "Read More",
            },
            {
              icon: "flaticon-cctv",
              group: "Group3",
              service: "Service3",
              description: "This is the first service served by the company on the groupo group1",
              readmore: "Read More",
            }
          ]
        },
        about: {
          title: "About US",
          titleOffer: "We Offers Quality CCTV Systems & Services",
          description:
            "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet et magna",
          yearsOfExp: "15 Years Experience",
          certificates: "10 Certificates",
        },
        tesmonial: {
          header: "Testmonial",
          title: " What People Say About Our Services",
          items: [
            {
              image: "testimonial-1.jpg",
              description:
                "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stetamet eirmod eos labore diam",
              clientName: "ATJ",
              profession: "Product Owner",
            },
          ],
        },
      },
    },
    contact: {
      containers:{
        header:{

        },
        contact:{

        }
      }
    }
  },
};

export { siteData };
