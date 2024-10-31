import ProjectPlanSvg from "../assets/svgs/project-plan.svg";
import CustomerSatisfaction from "../assets/svgs/customer-satisfaction.svg";
import ServiceOffered from "../assets/svgs/service-offered.svg";
import YearInBusiness from "../assets/svgs/year-in-business.svg";
import TeamAri from "../assets/images/team-ari.png";
import TeamTatia from "../assets/images/team-tatia.png";
import TeamRaam from "../assets/images/team-raam.png";
import TeamEnrico from "../assets/images/team-enrico.png";
import TeamSatria from "../assets/images/team-satria.png";
import Service1 from "../assets/images/service1.png";
import Service2 from "../assets/images/service2.png";
import Service3 from "../assets/images/service3.png";
import Portfolio1 from "../assets/images/portfolio1.png";
import Portfolio2 from "../assets/images/portfolio2.png";
import Portfolio3 from "../assets/images/portfolio3.png";
import Portfolio4 from "../assets/images/portfolio4.png";
import Testimonial1 from "../assets/images/testimonial1.png";
import Testimonial2 from "../assets/images/testimonial2.jpeg";
import Testimonial3 from "../assets/images/testimonial3.png";

export const navbarData = [
  {
    id: 1,
    name: "Home",
    link: "home",
  },
  {
    id: 2,
    name: "About Us",
    link: "about-us",
  },
  {
    id: 4,
    name: "Service",
    link: "service",
  },
  {
    id: 5,
    name: "Portfolio",
    link: "portfolio",
  },
  {
    id: 6,
    name: "Testimonial",
    link: "testimonial",
  },
];

export const aboutData = [
  {
    id: 1,
    icon: ProjectPlanSvg,
    title: "Completed Projects",
    count: 5,
    nth: "+",
  },
  {
    id: 2,
    icon: CustomerSatisfaction,
    title: "Customer Satisfaction",
    count: 99,
    nth: "%",
  },
  {
    id: 3,
    icon: ServiceOffered,
    title: "Service Offered",
    count: 15,
    nth: "+",
  },
  {
    id: 4,
    icon: YearInBusiness,
    title: "Year in Business",
    count: 2,
    nth: "yrs",
  },
];

export const teamData = [
  {
    id: 1,
    name: "Ari Putra",
    position: "Chief Technology Officer",
    image: TeamAri,
    link: "",
  },
  {
    id: 2,
    name: "Deborah Huda",
    position: "Chief Executive Officer",
    image: TeamTatia,
    link: "https://www.linkedin.com/in/tatiatech/",
  },
  {
    id: 3,
    name: "Raam",
    position: "Senior Product Designer",
    image: TeamRaam,
    link: "",
  },
  {
    id: 4,
    name: "Enrico",
    position: "Senior Wordpress Developer",
    image: TeamEnrico,
    link: "",
  },
  {
    id: 5,
    name: "Satria",
    position: "Award Winning UI/UX Designer",
    image: TeamSatria,
    link: "",
  },
];

export const serviceData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Designing interfaces and conducting user experience through user research was part of the thing in achieving best results in creative projects",
    image: Service1,
    features: [
      "User Interface Design",
      "User Experience Design",
      "UX Audit",
      "UX Research",
    ],
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Transforming designs into real live websites is a valid indicator that beautiful designs can be created and implemented. QA Testing is very important to reduce any errors and issues",
    image: Service2,
    features: [
      "Web 3",
      "Artificial Intelegence",
      "Front-End",
      "Back-End",
      "QA Testing",
    ],
  },
  {
    id: 3,
    title: "Mobile Development",
    description:
      "It is through branding to identify a company to define the culture and how particular companies foreseen the future.",
    image: Service3,
    features: [
      "Application Development",
      "Testing & Debugging",
      "API Integrations",
      "Android Mobile Application",
      "Ios Mobile Application",
    ],
  },
];

export const portfolioData = [
  {
    id: 1,
    name: "Deborah Design Agency",
    description: "Design Agency subscription based",
    image: Portfolio1,
  },
  {
    id: 2,
    name: "Temantrip",
    description: "Mobile and Web app for people selling their open trip.",
    image: Portfolio2,
  },
  {
    id: 3,
    name: "Career Coaching Website",
    description:
      "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand",
    image: Portfolio3,
  },
  {
    id: 4,
    name: "Blue Studio Project",
    description:
      "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand",
    image: Portfolio4,
  },
];

export const testimonialData = [
  {
    id: 1,
    desc: "They're really professional in designing a good website. Take account of our concerns and brainstroming idea was fun experience for me.Fast and responsive. Thank you and the team. God bless you.😄",
    user: {
      name: "Rasidah Johar",
      position: "Digital Artist & Webcomic Artist",
      image: Testimonial1,
      link: "https://www.linkedin.com/in/rashidah-johar-ab14a8277/",
    },
  },
  {
    id: 2,
    desc: (
      <>
        <p>
          I highly recommend Deborah Tatia, a dynamic team of young
          entrepreneurs specializing in mobile application and website
          development. Their swift, efficient, and customized approach to
          digital solutions has proven to be a game-changer for my client, and I
          am confident they can bring the same value to your business.
          <br />
          <br />
          Through remarkable speed and efficiency. They are able to deliver well
          within the agreed-upon timelines, showcasing not only technical
          capability but a genuine commitment to client satisfaction.
          <br />
          <br />
          What really sets them apart is their ability to tailor solutions to
          specific business needs. They took the time to understand my
          client&rsquo;s goals, ensuring a personalized development approach.
          This flexibility turns the project into a strategic partnership
          focused on achieving tangible outcomes. Their transparent and
          reasonable fees also offers a clear understanding of the value
          receive, contributing significantly to a positive return on
          investment.
          <br />
          <br />
          I recently introduced Deborah Tatia to our partners, and the results
          have exceeded expectations. The application they developed not only
          met but surpassed our initial expectations. I am also equally
          impressed with their professionalism and dedication. Clear and
          consistent communication, coupled with a proactive approach to address
          concerns, has fostered a collaborative and transparent working
          relationship crucial for the client&rsquo;s successful project
          outcome.
          <br />
          <br />
          If you are in search of a team that can deliver fast, efficient, and
          customized digital solutions at reasonable (inexpensive) fees, Deborah
          Tatia is the ideal choice. They have consistently provided exceptional
          value for money, and I believe they will continue to elevate
          businesses through their innovative approach.
          <br />
          <br />
          In conclusion, if you ever need services for website & mobile app
          development, Deborah Tatia & team should be in your shortlist for
          consideration! Highly recommended!
          <br />
          <br />
          Best regards, Andrew
        </p>
      </>
    ),
    user: {
      name: "Andrew Lo",
      position:
        "Entrepreneurial Management Consultant, Practitioner & Trainer in Retail, Food Services and Franchising.",
      image: Testimonial2,
      link: "https://www.linkedin.com/in/andrewlau-my/",
    },
  },
  {
    id: 3,
    desc: "I've engaged Deborah for a website redesign consultation, and found her responsive, competent and proactive during the short process. It was a pleasure dealing with Deborah. 7/5.",
    user: {
      name: "Benjamin Sern",
      position: "Financial Services  Counsel",
      image: Testimonial3,
      link: "https://www.linkedin.com/in/il-w4c/",
    },
  },
];
