export interface KeyDate {
  event: string;
  date: string;
  highlight?: boolean;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  iconName: string;
  topics: string[];
}

export interface CommitteePerson {
  name: string;
  designation: string;
  institution: string;
  role: "Chief Patron" | "Patron" | "General Chair" | "Organizing Chair" | "Technical Chair" | "Steering Committee";
  image?: string;
}

export interface TourismSpot {
  name: string;
  location: string;
  distance: string;
  image: string;
  description: string;
}

export const ICCSAI_INFO = {
  title: "ICCSAI 2026",
  fullTitle: "2026 IEEE 4th International Conference on Communication, Security, and Artificial Intelligence",
  dates: "November 28–30, 2026",
  isoStartDate: "2026-11-28T09:00:00+05:30",
  venue: {
    name: "Galgotias University Campus",
    address: "Plot No. 2, Yamuna Expressway, Opposite Buddha International Circuit, Sector 17A, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh 203201, India",
    city: "Greater Noida (NCR Delhi)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.682664531804!2d77.53856137637854!3d28.36830767581079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc76735e5d169%3A0x6b47c0b8b80e8e4e!2sGalgotias%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  cmtSubmitUrl: "https://cmt3.research.microsoft.com/",
  ieeeXploreNotice: "All accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE's scope and quality requirements.",
};

export const ICCSAI_IMPORTANT_DATES: KeyDate[] = [
  { event: "Abstract Submission Deadline", date: "July 14, 2026" },
  { event: "Full Paper Submission Deadline", date: "September 15, 2026", highlight: true },
  { event: "Notification of Acceptance", date: "October 6, 2026" },
  { event: "Camera-Ready Paper Submission", date: "October 13, 2026" },
  { event: "Conference Dates", date: "November 28–30, 2026", highlight: true },
];

export const ICCSAI_TRACKS: Track[] = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Deep learning architectures, LLMs, computer vision, NLP, explainable AI, autonomous robotics.",
    iconName: "BrainCircuit",
    topics: ["Deep Learning Algorithms", "Computer Vision & Pattern Recognition", "Natural Language Processing", "Generative AI & LLMs", "Ethical & Explainable AI"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Privacy",
    description: "Network security, threat intelligence, cloud security, zero-trust architectures, cryptography.",
    iconName: "ShieldCheck",
    topics: ["Intrusion Detection Systems", "Quantum Cryptography", "Cloud & Edge Security", "Privacy-Preserving Computation", "Threat Intelligence"],
  },
  {
    id: "networking",
    title: "Networking & Communication",
    description: "5G/6G wireless networks, IoT systems, satellite communications, optical networks, SDNs.",
    iconName: "Wifi",
    topics: ["Next-Gen Wireless Systems (6G)", "IoT & Edge Networks", "Satellite Communication", "Software-Defined Networking", "Optical Communication"],
  },
  {
    id: "computing",
    title: "Data & High Performance Computing",
    description: "Big data analytics, distributed systems, quantum computing, cloud architecture.",
    iconName: "Database",
    topics: ["Parallel & Distributed Computing", "Big Data Engineering", "Quantum Information Processing", "Cloud Native Architectures"],
  },
  {
    id: "hardware",
    title: "Electronics & Hardware Systems",
    description: "VLSI design, embedded systems, microelectronics, RF circuits, wearable tech.",
    iconName: "Cpu",
    topics: ["VLSI & Low-Power Design", "Embedded Systems & Firmware", "RF & Microwave Engineering", "Sensors & Actuators"],
  },
  {
    id: "blockchain",
    title: "Blockchain & Cryptography",
    description: "DeFi protocols, smart contract audit, decentralized consensus, Web3 security.",
    iconName: "Blocks",
    topics: ["Decentralized Finance (DeFi)", "Smart Contract Verification", "Consensus Algorithms", "Web3 Infrastructures"],
  },
];

export const ICCSAI_COMMITTEE: CommitteePerson[] = [
  { name: "Shri Suneel Galgotia", designation: "Hon'ble Chancellor", institution: "Galgotias University", role: "Chief Patron" },
  { name: "Dr. Dhruv Galgotia", designation: "Chief Executive Officer (CEO)", institution: "Galgotias University", role: "Patron" },
  { name: "Ms. Aradhana Galgotia", designation: "Director Operations", institution: "Galgotias University", role: "Patron" },
  { name: "Prof. Dr. K.M. Babu", designation: "Vice-Chancellor", institution: "Galgotias University", role: "Patron" },
  { name: "Prof. Dr. Avadhesh Kumar", designation: "Pro Vice-Chancellor", institution: "Galgotias University / Vice Chair, IEEE UP Section", role: "General Chair" },
  { name: "Prof. Dr. Yogesh S. Chauhan", designation: "Professor, IIT Kanpur", institution: "Chair, IEEE UP Section", role: "General Chair" },
  { name: "Dr. Aanjey M. Tripathi", designation: "Professor & Head", institution: "Galgotias University", role: "Organizing Chair" },
  { name: "Dr. Kuldeep S. Kaswan", designation: "Professor, Computer Science", institution: "Galgotias University", role: "Organizing Chair" },
  { name: "Dr. Shraddha Sagar", designation: "Associate Professor", institution: "Galgotias University", role: "Technical Chair" },
  { name: "Dr. Sonia Setia", designation: "Associate Professor", institution: "Galgotias University", role: "Technical Chair" },
  { name: "Dr. Trapti Shrivastava", designation: "Assistant Professor", institution: "Galgotias University", role: "Steering Committee" },
  { name: "Dr. Arpesh Singh", designation: "Assistant Professor", institution: "Galgotias University", role: "Steering Committee" },
];

export const REGISTRATION_FEES = [
  { category: "IEEE Student / Research Scholar", indian: "₹ 6,000", foreign: "$150" },
  { category: "Non-IEEE Student / Research Scholar", indian: "₹ 7,500", foreign: "$200" },
  { category: "IEEE Faculty / Academician", indian: "₹ 8,000", foreign: "$250" },
  { category: "Non-IEEE Academician", indian: "₹ 9,500", foreign: "$300" },
  { category: "Industry Delegates", indian: "₹ 11,000", foreign: "$350" },
  { category: "Attendee / Listener", indian: "₹ 3,000", foreign: "$100" },
];

export const NEARBY_ATTRACTIONS: TourismSpot[] = [
  {
    name: "Red Fort (Lal Qila)",
    location: "Old Delhi",
    distance: "48 km from Campus",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    description: "Historic 17th-century Mughal fort constructed of red sandstone, symbolic heart of India's capital.",
  },
  {
    name: "Qutub Minar",
    location: "South Delhi",
    distance: "42 km from Campus",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    description: "UNESCO World Heritage Site standing 73 meters tall, world's tallest brick minaret.",
  },
  {
    name: "India Gate",
    location: "New Delhi",
    distance: "40 km from Campus",
    image: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?auto=format&fit=crop&w=800&q=80",
    description: "Majestic war memorial archway dedicated to soldiers, surrounded by lush lawns and fountains.",
  },
  {
    name: "Taj Mahal",
    location: "Agra",
    distance: "165 km via Yamuna Expressway",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    description: "Wonder of the World! Directly connected via Yamuna Expressway right outside Galgotias University campus.",
  },
  {
    name: "Rishikesh & Haridwar",
    location: "Uttarakhand",
    distance: "230 km from Campus",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80",
    description: "Spiritual yoga capital along the sacred Ganges river with mountain vistas and Ganga Aarti.",
  },
];
