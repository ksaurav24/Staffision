import rpo_services_image from "./assets/images/rpo_services_image.webp";
import permanent_staffing_image from "./assets/images/permanent_staffing_image.webp";
import contractual_staffing_image from "./assets/images/contractual_staffing_image.webp";
import hr_consulting_image from "./assets/images/hr_consulting_image.webp";
import manpower_planning_staffing_image from "./assets/images/manpower_planning_staffing_image.webp";
import bulk_staffing_image from "./assets/images/bulk_staffing_image.webp";
import it_non_it_staffing_image from "./assets/images/it_non_it_staffing_image.webp";
import bpo_staffing_image from "./assets/images/bpo_staffing_image.webp";

import Searchtalent from "./assets/coreServices/Searchtalent.png";
import Consultant from "./assets/coreServices/Consultant.png";
import Moneycheck from "./assets/coreServices/Moneycheck.png";
import Graduationcap from "./assets/coreServices/Graduationcap.png";
import Achievement from "./assets/coreServices/Achievement.png";
import Shield from "./assets/coreServices/Shield.png";
import Linechart from "./assets/coreServices/Linechart.png";
import Gift from "./assets/coreServices/Gift.png";
import Flowchart from "./assets/coreServices/Flowchart.png";
import Loginout from "./assets/coreServices/Loginout.png";
import Teamwork from "./assets/coreServices/Teamwork.png";
import Gearcomputer from "./assets/coreServices/Gearcomputer.png";

import user_1 from "./assets/users/user_1.webp";
import user_2 from "./assets/users/user_2.webp";
import user_3 from "./assets/users/user_3.webp";

export const services = [
  {
    id: "rpo-services",
    service: "RPO Services",
    shortDescription:
      "Our Recruitment Process Outsourcing (RPO) service manages your entire recruitment process, from talent sourcing to onboarding. We ensure high-quality hires while reducing your recruitment costs and time-to-fill.",
    description:
      "Let us take the hassle out of your recruitment process with our RPO services. From sourcing top talent to onboarding new hires, we handle every step with precision and care. Using advanced recruitment technologies and strategies, we ensure you get the best candidates who fit your needs. Partnering with us means reducing your recruitment costs and filling positions faster, allowing you to focus on what you do best: running your business.",
    image: rpo_services_image,
  },
  {
    id: "permanent-staffing",
    service: "Permanent Staffing",
    shortDescription:
      "Our Permanent Staffing service focuses on finding the right long-term talent for your organization. We handle the entire recruitment process, ensuring a perfect fit for your company culture and job requirements.",
    description:
      "Finding the right long-term talent is crucial for any organization. Our Permanent Staffing service takes a comprehensive approach to match candidates with your company’s culture and job requirements. From crafting detailed job descriptions to conducting thorough interviews, we ensure every candidate is a perfect fit. With our extensive network and industry expertise, we attract top talent who will contribute to your organization’s success and growth.",
    image: permanent_staffing_image,
  },
  {
    id: "contractual-staffing",
    service: "Contractual Staffing",
    shortDescription:
      "Our Contractual Staffing service provides flexible staffing solutions to meet your short-term or project-based needs. We supply skilled professionals on a contract basis to help you manage workload fluctuations.",
    description:
      "When you need flexibility, our Contractual Staffing service is here to help. Whether it’s for a specific project, seasonal work, or temporary replacement, we provide skilled professionals on a contract basis. We handle the entire process, from sourcing and screening to onboarding, so you can focus on your project goals. Our vast pool of candidates ensures we meet your specific needs quickly and efficiently, helping you manage workload fluctuations without long-term commitments.",
    image: contractual_staffing_image,
  },
  {
    id: "hr_consulting",
    service: "HR Consulting",
    shortDescription:
      "Our HR Consulting service offers expert advice and strategic guidance to optimize your human resources practices. We assist with policy development, compliance, and organizational design to align HR operations with your business goals.",
    description:
      "Optimize your HR practices with our expert HR Consulting service. We provide strategic guidance and practical solutions to align your HR operations with your business goals. From policy development and compliance management to organizational design and performance management, our consultants work closely with you to address your unique challenges. Let us help you create a more productive and engaged workforce that drives business success.",
    image: hr_consulting_image,
  },
  {
    id: "manpower-planning-staffing",
    service: "Manpower Planning & Staffing",
    shortDescription:
      "Our Manpower Planning & Staffing service helps you forecast your workforce needs and create effective staffing strategies to ensure your business is always adequately staffed with the right talent.",
    description:
      "Stay ahead of your workforce needs with our Manpower Planning & Staffing service. We help you forecast future staffing requirements and develop strategic plans to ensure you have the right talent when you need it. By considering factors like skill requirements, budget constraints, and organizational growth, we create comprehensive staffing strategies tailored to your business. Avoid talent shortages and ensure your business is always equipped with the skills and expertise needed to succeed.",
    image: manpower_planning_staffing_image,
  },
  {
    id: "bulk-staffing",
    service: "Bulk Staffing",
    shortDescription:
      "Our Bulk Staffing service is designed to handle large-scale recruitment drives efficiently. We provide a high volume of qualified candidates to meet the demands of large projects or rapid business expansion.",
    description:
      "Managing large-scale recruitment drives is our specialty. Our Bulk Staffing service is perfect for businesses undergoing rapid growth or handling significant projects. We attract and screen a high volume of candidates quickly and efficiently, ensuring you have a large pool of qualified candidates in no time. Whether you need hundreds of employees for a new facility or a large team for a special project, our Bulk Staffing service ensures you get the talent you need to meet your objectives.",
    image: bulk_staffing_image,
  },
  {
    id: "it-non-it-staffing",
    service: "IT/Non-IT Staffing",
    shortDescription:
      "Our IT/Non-IT Staffing service caters to both technical and non-technical staffing requirements. We provide specialized professionals across various domains to support your diverse staffing needs.",
    description:
      "Whether you need tech experts or non-technical professionals, our IT/Non-IT Staffing service has you covered. We provide specialized candidates for both technical and non-technical roles across various industries. Our rigorous screening process ensures you get professionals with the right skills and experience for your specific requirements. Build a versatile and skilled workforce that drives your business forward with our comprehensive staffing solutions.",
    image: it_non_it_staffing_image,
  },
  {
    id: "bpo-staffing",
    service: "BPO Staffing",
    shortDescription:
      "Our BPO Staffing service specializes in supplying skilled personnel for Business Process Outsourcing operations. We provide candidates with the right expertise to ensure your BPO processes run smoothly and efficiently.",
    description:
      "Ensure your Business Process Outsourcing (BPO) operations run smoothly with our specialized BPO Staffing service. We provide skilled personnel with the expertise needed for various BPO functions, including customer service, technical support, data entry, and back-office operations. Our extensive candidate pool ensures we deliver professionals who can quickly adapt to your processes and deliver high-quality performance. Partner with us to enhance operational efficiency and achieve your business goals more effectively.",
    image: bpo_staffing_image,
  },
];
export const coreServices = [
  {
    title: "Talent Acquisition",
    description:
      "We identify and recruit top talent tailored to your specific business needs.",
    icon: Searchtalent, // Only "s" capitalized
  },
  {
    title: "HR Consulting",
    description:
      "Our experts optimize your HR processes for maximum efficiency.",
    icon: Consultant, // Only "c" capitalized
  },
  {
    title: "Payroll Management",
    description:
      "We ensure timely and accurate payroll management for your workforce.",
    icon: Moneycheck, // Only "m" and "c" capitalized
  },
  {
    title: "Employee Training & Development",
    description:
      "Enhancing employee skills and productivity through targeted training.",
    icon: Graduationcap, // Only "g" and "c" capitalized
  },
  {
    title: "Performance Management",
    description:
      "Streamlining performance reviews to drive better business outcomes.",
    icon: Achievement, // Only "a" capitalized
  },
  {
    title: "Compliance & Risk Management",
    description: "Ensuring your business adheres to all relevant regulations.",
    icon: Shield, // Only "s" capitalized
  },
  {
    title: "Workforce Planning",
    description: "Strategic planning to meet your future workforce needs.",
    icon: Linechart, // Only "l" and "c" capitalized
  },
  {
    title: "Employee Benefits Administration",
    description: "Managing benefits to attract and retain top talent.",
    icon: Gift, // Only "g" capitalized
  },
  {
    title: "HR Technology Solutions",
    description:
      "Leveraging technology to streamline HR processes and drive efficiency.",
    icon: Flowchart, // Only "f" capitalized
  },
  {
    title: "Time & Attendance Management",
    description: "Automating time tracking to improve workforce efficiency.",
    icon: Loginout, // Only "l" capitalized
  },
  {
    title: "Team Building & Collaboration",
    description:
      "Fostering teamwork and collaboration to drive business success.",
    icon: Teamwork, // Only "t" capitalized
  },
  {
    title: "IT & HR Integration",
    description:
      "Integrating IT systems with HR processes for seamless operations.",
    icon: Gearcomputer, // Only "g" and "c" capitalized
  },
];

export const users = [
  {
    name: "John Davis",
    position: "HR Manager at GlobalTech Solutions",
    image: user_1,
    review:
      "Staffision has been a game-changer for our HR department. Their services have made our onboarding process smoother and their analytics tools have given us crucial insights into our workforce. Highly recommend their solutions!",
    rating: 4,
  },
  {
    name: "Christine Smith",
    position: "Director of Human Resources at InnovateCorp",
    image: user_2,
    review:
      "Staffision has simplified our international recruitment process tremendously. Their expertise in local hiring practices and access to a global talent pool have helped us find the perfect candidates. Exceptional service and support!",
    rating: 5,
  },
  {
    name: "David Johnson",
    position: "Head of Talent Acquisition at Future Enterprises",
    image: user_3,
    review:
      "Staffision's talent management solutions have greatly boosted our employee engagement and productivity. Their support team is always ready to assist, and we couldn't be happier with their services!",
    rating: 4,
  },
];
