export interface ConferenceItem {
  id: "iccsai" | "iccca" | "ic2pct";
  name: string;
  edition: string;
  fullTitle: string;
  ieeeRecordNo?: string;
  badge: string;
  officialUrl: string;
  cmtUrl: string;
  dates: string;
  mode: string;
  host: string;
  sponsors: string[];
  description: string;
  highlights: string[];
  tags: string[];
  statValue: string;
  statLabel: string;
  statSubtitle: string;
  themeColor: "purple" | "cyan" | "emerald";
  gradient: string;
  accentGlow: string;
  previousProceedings?: { label: string; url: string }[];
}

export const FLAGSHIP_CONFERENCES: ConferenceItem[] = [
  {
    id: "iccsai",
    name: "ICCSAI 2026",
    edition: "4th Edition",
    fullTitle:
      "2026 IEEE 4th International Conference on Communication, Security, and Artificial Intelligence (ICCSAI-2026)",
    badge: "International Flagship • IEEE Xplore",
    officialUrl: "https://www.iccsai.in/",
    cmtUrl: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2026%2F",
    dates: "November 28–30, 2026",
    mode: "Hybrid (In-Person & Online)",
    host: "Galgotias University, Greater Noida (NCR New Delhi)",
    sponsors: ["IEEE Uttar Pradesh Section", "Galgotias University"],
    description:
      "Prestigious non-profit IEEE conference uniting global researchers, academicians, and industry leaders to discuss advancements in Communication Engineering, Cyber Security, and Artificial Intelligence. All accepted & presented papers are submitted to IEEE Xplore.",
    highlights: [
      "IEEE Xplore Proceedings & Scopus Indexing",
      "Keynotes by IEEE Fellows & IIT/IIIT Directors",
      "6 Specialized Technical Research Tracks",
      "Hybrid Presentation Modes (In-Person & Online)",
    ],
    tags: ["IEEE Xplore Indexed", "Scopus Indexed", "20+ Countries", "Hybrid Mode"],
    statValue: "300+",
    statLabel: "International Research Papers",
    statSubtitle: "Global Submissions & Delegation",
    themeColor: "purple",
    gradient: "from-[#200b3b]/95 via-[#130d2e]/95 to-[#060b18]",
    accentGlow: "rgba(168,85,247,0.3)",
    previousProceedings: [
      { label: "ICCSAI-2023 Proceedings", url: "https://ieeexplore.ieee.org/xpl/conhome/10420826/proceeding" },
      { label: "ICCSAI-2025 Proceedings", url: "https://ieeexplore.ieee.org/xpl/conhome/11063690/proceeding" },
    ],
  },
  {
    id: "iccca",
    name: "ICCCA 2027",
    edition: "8th Edition",
    fullTitle:
      "2027 IEEE 8th International Conference on Computing, Communication, and Automation (ICCCA-2027)",
    ieeeRecordNo: "IEEE Record #72457",
    badge: "8th Global Edition • IEEE IAS Sponsored",
    officialUrl: "https://www.iccca.co.in/",
    cmtUrl: "https://cmt3.research.microsoft.com/ICCCA2027/Submission/Manage",
    dates: "April 10–12, 2027",
    mode: "Hybrid (In-Person & 20% Online)",
    host: "Galgotias University, Greater Noida (NCR New Delhi)",
    sponsors: ["IEEE UP Section", "IEEE Industry Applications Society (IAS)"],
    description:
      "Financially and technically sponsored by IEEE UP Section & IEEE IAS Society. Organised since 2015 with 6 highly successful previous editions indexed in IEEE Xplore, advancing the boundaries of Computing, Automation, and Communication.",
    highlights: [
      "Financially & Technically Sponsored by IEEE IAS & UP Section",
      "6 Successful Past Editions Published in IEEE Xplore",
      "IEEE Conference Record #72457",
      "High-Impact Automation & Intelligent Systems Tracks",
    ],
    tags: ["IEEE Record #72457", "IEEE IAS Society", "8th Edition", "IEEE Xplore"],
    statValue: "500+",
    statLabel: "Papers in IEEE Xplore",
    statSubtitle: "Since Inception in 2015",
    themeColor: "cyan",
    gradient: "from-[#07243a]/95 via-[#0a1829]/95 to-[#040a12]",
    accentGlow: "rgba(6,182,212,0.3)",
    previousProceedings: [
      {
        label: "ICCCA IEEE Xplore Archive",
        url: "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=ICCCA%20Galgotias",
      },
    ],
  },
  {
    id: "ic2pct",
    name: "IC2PCT 2026",
    edition: "6th Edition",
    fullTitle:
      "2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026)",
    badge: "6th International Edition • Power & Computing",
    officialUrl: "https://www.ic2pct.co.in/",
    cmtUrl: "https://www.ic2pct.co.in/",
    dates: "May 15–17, 2026",
    mode: "Hybrid Mode",
    host: "Galgotias University, Greater Noida, India",
    sponsors: ["IEEE Uttar Pradesh Section", "Galgotias University"],
    description:
      "Premier international conference convening global researchers and academicians to present breakthrough advancements in Power Systems, Renewable Energy, Smart Grids, Machine Learning, IoT, and Telecommunication Technologies.",
    highlights: [
      "Power Systems, Smart Grids & Renewable Technologies",
      "AI, Edge Computing & Cyber-Physical Security",
      "IEEE UP Section Technical Co-Sponsorship",
      "Multidisciplinary Research & Industrial Collaborations",
    ],
    tags: ["6th Edition", "Power & Energy", "AI & IoT", "IEEE UP Section"],
    statValue: "6th",
    statLabel: "International Edition",
    statSubtitle: "Power, Computing & Comm Technologies",
    themeColor: "emerald",
    gradient: "from-[#04281f]/95 via-[#041a15]/95 to-[#020b08]",
    accentGlow: "rgba(16,185,129,0.3)",
  },
];
