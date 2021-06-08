import member1 from "../images/yulia.png";
import member2 from "../images/alexi.png";
import member3 from "../images/julia.png";
import member4 from "../images/viktor.png";
import member5 from "../images/vladimir.png";

export const ourWorksOptions = [
  {
    label: "Blockchain",
    path: "blockchain",
  },
  {
    label: "Artificial Intelligence",
    path: "artificial-intelligence",
  },
  {
    label: "Web development",
    path: "web-development",
  },
  {
    label: "Mobile development",
    path: "mobile-development",
  },
  {
    label: "connected devices (iot)",
    path: "connected-devices",
  },
];

export const servicesOptions = [
  {
    label: "Blockchain",
    path: "blockchain",
  },
  {
    label: "CognItive Computing(AI)",
    path: "cognItive-computing",
  },
  {
    label: "Connected Device (IOT)",
    path: "connected-device",
  },
  {
    label: "Web Development",
    path: "web-development",
  },
  {
    label: "Mobile App Development",
    path: "mobile-app-development",
  },
  {
    label: "Mobile App Development",
    path: "web-accessibility",
  },
];
export const BlogContent = [
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

export const MobileBlogContent = [
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    label: "Why do we use it?",
    date: "March 23, 2021",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

export const teamMembers = [
  {
    img: member1,
    name: "Yulia Gushchina",
    designation: "Head of Blockchain Business Development",
  },
  {
    img: member2,
    name: "Alexei Dulub",
    designation: "Founder and CEO",
  },
  {
    img: member3,
    name: "Viktor Pulyak",
    designation: "Chief Technology Officer",
  },
  {
    img: member4,
    name: "Vladimir Lebedevich",
    designation: "Head of Mobile Development",
  },
  {
    img: member4,
    name: "Vladimir Lebedevich",
    designation: "Head of Mobile Development",
  },
  {
    img: member5,
    name: "Yulia Gushchina",
    designation: "Head of Blockchain Business Development",
  },
  {
    img: member1,
    name: "Yulia Gushchina",
    designation: "Head of Blockchain Business Development",
  },
];

export const servicesInFocusList = [
  {
    title: "Enterprise blockchain development",
    detail:
      "Become resilient and take your enterprise to new heights with our carefully curated Enterprise Blockchain Development services. We manage the critical processes and optimization strategies. ",
  },
  {
    title: "Blockchain consulting",
    detail:
      "Looking to dominate the cryptocurrency industry in-house? We support it! Our consultants are proud to offer you streamlined and expert advice to help you overcome challenges.",
  },
  {
    title: "Non-fungible tokens development",
    detail:
      "Navigating non-fungible tokens can be a tricky slope at first. However, we’ve dedicated our careers to cryptocurrency, meaning that NFT is no stranger to us. We will help transform your business.",
  },
  {
    title: "Security token offering solutions",
    detail:
      "Looking to go global or get access to high-liquidity opportunities? With security tokens, your opportunities are endless, and we help you navigate those waters.",
  },
  {
    title: "Smart contract development & audit",
    detail:
      "We offer audits and optimizations of your cryptocurrency turnaround. Get another set of eyes on your investments to ensure that you’re making sound choices.",
  },
  {
    title: "Blockchain training",
    detail:
      "Do you want to get into blockchain? Look no further. We offer beginner to robust courses to take all of our valued customers to experts in no time.",
  },
  {
    title: "Hyperledger development",
    detail:
      "Tackle industry standards compliance and data-intensive tasks with our robust hyperledger development that will help streamline your processes.",
  },
];

export const checkIfScreenIsBlack = (location) => {
  const { pathname } = location;
  const isBlack = ["home", "contact", "/services/blockchain"].some((p) =>
    pathname.includes(p)
  );
  console.log({ isBlack });
  return isBlack;
};
