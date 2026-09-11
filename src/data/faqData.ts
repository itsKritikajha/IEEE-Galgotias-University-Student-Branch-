export interface FAQItem {
  question: string;
  answer: string;
  category: "membership" | "benefits" | "iccsai" | "general";
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What is IEEE GU SB?",
    answer: "IEEE GU SB (Institute of Electrical and Electronics Engineers Galgotias University Student Branch) is the official student technical branch representing IEEE at Galgotias University, Greater Noida. We empower students with technical workshops, hackathons, research mentorship, and international conference hosting.",
    category: "general",
  },
  {
    question: "Why should I join IEEE GU SB?",
    answer: "Membership grants you access to IEEE Xplore digital library discounts, global student branch networking, leadership roles, travel grants for IEEE conferences, technical project mentorship, and access to IEEE Societies (Computer Society, IAS, WIE, Signal Processing, etc.).",
    category: "benefits",
  },
  {
    question: "How can Galgotias University students apply for Core Team or Volunteer roles?",
    answer: "IEEE GU SB opens annual recruitment drives for technical, PR, design, event management, and content teams. Active IEEE student members can apply via our Join Us page recruitment portal during open calls.",
    category: "membership",
  },
  {
    question: "Can non-IEEE members attend IEEE GU SB events and workshops?",
    answer: "Yes! Most of our open workshops, hackathons, and guest lectures are open to all university students, though registered IEEE members receive fee discounts, priority seating, and official certificates.",
    category: "general",
  },
  {
    question: "What is ICCSAI 2026?",
    answer: "ICCSAI 2026 is the 4th IEEE International Conference on Communication, Security, and Artificial Intelligence organized by IEEE GU SB at Galgotias University from November 28-30, 2026. Accepted and presented papers will be submitted for inclusion into IEEE Xplore.",
    category: "iccsai",
  },
];
