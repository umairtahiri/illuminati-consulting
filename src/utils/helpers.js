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

export const checkIfScreenIsWhite = (location) => {
  const { pathname } = location;
  return ["home, contact"].some((p) => !pathname.includes(p));
};
