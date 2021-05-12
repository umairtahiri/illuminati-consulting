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
      "To help you become a game changer in your business segment, we deliver enterprise blockchain solutions that go beyond optimization of workflow and resources. Get a resilient ecosystem to privately communicate, accelerate critical processes, and continuously innovate.",
  },
  {
    title: "Blockchain consulting",
    detail:
      "We’ve got a rich pool of best practices to handle any kind of industry-specific calls. As soon as we analyze your case, we pinpoint inefficiencies if any, discover the growth triggers, and offer strategically and financially feasible solutions with your enterprise’s differentiators in mind.",
  },
  {
    title: "Non-fungible tokens (NFT) development",
    detail:
      "As an early adopter of blockchain tech power widths, PixelPlex has long been no stranger to NFT development. Our team can engineer unique unreplicable cryptographic tokens for any kind of real-world assets or domain-specific business undertakings. From DeFi to arts to real estate — we help transform industries at scale.",
  },
  {
    title: "Security token offering solutions",
    detail:
      "We build solutions that help digitize any asset for a successful security token offering campaign. Obtain a custom investment marketplace upon a P2P network and utilize a built-in exchange to access high liquidity opportunities or trade securities around the globe.",
  },
  {
    title: "Smart contract development & audit",
    detail:
      "With our smart contracts you can be confident of saving resources, streamlining cryptocurrency turnaround, and ruling out transaction fraud. On top of business-specific solution engineering upon Hyperledger, R3, Echo, EOS, and Ethereum smart contract frameworks, we handle a complete audit and optimization.",
  },
  {
    title: "Blockchain training",
    detail:
      "Focused on emerging DLT trends, our blockchain training sessions provide first-hand knowledge to business owners, tech industry insiders, and investors. Whatever your background or objectives, you’ll find many opportunities to apply our value-based know-how.",
  },
  {
    title: "Hyperledger development",
    detail:
      "Industry standards compliance is a harsh call, but you can nail it via Hyperledger apps. We build solutions that tackle data-intensive tasks and urgent transactions quickly and safely, while flawlessly executing liabilities. We also offer Hyperledger Fabric infrastructure deployment.",
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
