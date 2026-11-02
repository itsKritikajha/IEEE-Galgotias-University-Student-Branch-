export interface ChapterItem {
  id: string;
  name: string;
  shortName: string;
  desc: string;
  logo: string;
  externalUrl: string;
  category: "Society" | "Affinity Group";
  color: string;
}

export const IEEE_CHAPTERS: ChapterItem[] = [
  {
    id: "cs",
    name: "IEEE Computer Society",
    shortName: "IEEE CS GU",
    desc: "Computing, Software Architecture & AI Systems",
    logo: "/societies/cs.png",
    externalUrl: "https://www.computer.org/",
    category: "Society",
    color: "#00629B",
  },
  {
    id: "cis",
    name: "IEEE Computational Intelligence Society",
    shortName: "IEEE CIS GU",
    desc: "Neural Networks, Deep Learning & Evolutionary Systems",
    logo: "/societies/cis-dark.png",
    externalUrl: "https://cis.ieee.org/",
    category: "Society",
    color: "#0284C7",
  },
  {
    id: "wie",
    name: "IEEE Women in Engineering",
    shortName: "IEEE WIE GU",
    desc: "Empowering Women in STEM, Leadership & Mentorship",
    logo: "/societies/wie-dark.png",
    externalUrl: "https://wie.ieee.org/",
    category: "Affinity Group",
    color: "#9333EA",
  },
  {
    id: "tems",
    name: "IEEE Tech & Engg Management Society",
    shortName: "IEEE TEMS GU",
    desc: "Technology Leadership, Entrepreneurship & Innovation",
    logo: "/societies/tems.png",
    externalUrl: "https://www.ieee-tems.org/",
    category: "Society",
    color: "#E11D48",
  },
  {
    id: "ias",
    name: "IEEE Industry Applications Society",
    shortName: "IEEE IAS GU",
    desc: "Industrial Systems, Smart Automation & Energy Grids",
    logo: "/societies/ias-dark.png",
    externalUrl: "https://ias.ieee.org/",
    category: "Society",
    color: "#059669",
  },
  {
    id: "photonics",
    name: "IEEE Photonics Society",
    shortName: "IEEE Photonics GU",
    desc: "Optics, Lasers, Quantum Systems & Light Technology",
    logo: "/societies/photonics.png",
    externalUrl: "https://photons.ieee.org/",
    category: "Society",
    color: "#EA580C",
  },
  {
    id: "entrepreneurship",
    name: "IEEE Entrepreneurship",
    shortName: "IEEE Entrepreneurship GU",
    desc: "Venture Creation, Startup Mentorship & Tech Commercialization",
    logo: "/societies/entrepreneurship.svg",
    externalUrl: "https://entrepreneurship.ieee.org/",
    category: "Affinity Group",
    color: "#F59E0B",
  },
  {
    id: "mtts",
    name: "IEEE Microwave Theory and Technology Society (MTT-S)",
    shortName: "IEEE MTT-S GU",
    desc: "RF, Microwave Engineering, Radar Systems & Wireless THz",
    logo: "/societies/mtts.svg",
    externalUrl: "https://mtt.org/",
    category: "Society",
    color: "#0EA5E9",
  },
  {
    id: "embs",
    name: "IEEE Engineering in Medicine and Biology Society (EMBS)",
    shortName: "IEEE EMBS GU",
    desc: "Biomedical Engineering, Neural Interfaces & Healthcare Tech",
    logo: "/societies/embs.svg",
    externalUrl: "https://www.embs.org/",
    category: "Society",
    color: "#10B981",
  },
];

