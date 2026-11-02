export type TeamMember = {
  id: string;
  name: string;
  surname: string;
  role: string;
  roleShort?: string;
  photo: string;
  linkedin?: string;
  email?: string;
  featured?: boolean;
  committee?: string;
};

export const FACULTY_ADVISOR: TeamMember = {
  id: "branch-counsellor",
  name: "Dr. Avadhesh",
  surname: "Kumar",
  role: "IEEE GU SB Branch Counsellor & Pro Vice-Chancellor",
  photo: "/images/team/avadhesh-kumar.jpg",
  linkedin: "https://www.linkedin.com/",
  email: "avadhesh.kumar@galgotiasuniversity.edu.in",
  featured: true,
};

export const CORE_TEAM: TeamMember[] = [
  {
    id: "atharva-singh",
    name: "Atharva",
    surname: "Singh",
    role: "Treasurer",
    photo: "/images/team/atharav-singh.jpg",
    linkedin: "https://www.linkedin.com/in/atharva-singh",
    email: "atharva.singh@ieee.org",
  },
  {
    id: "mohammad-rahil",
    name: "Mohammad",
    surname: "Rahil",
    role: "Secretary",
    photo: "/images/team/mohammad-rahil.jpg",
    linkedin: "https://www.linkedin.com/in/mohammad-rahil",
    email: "mohammad.rahil@ieee.org",
  },
  {
    id: "ansh-vashisth",
    name: "Ansh",
    surname: "Vashisth",
    role: "Chairperson",
    photo: "/images/team/ansh-vashisth.jpg",
    linkedin: "https://www.linkedin.com/in/ansh-vashisth",
    email: "ansh.vashisth@ieee.org",
    featured: true,
  },
  {
    id: "kritika-jha",
    name: "Kritika",
    surname: "Jha",
    role: "Vice Chairperson",
    photo: "/images/team/kritika-jha.jpg",
    linkedin: "https://www.linkedin.com/in/kritika-jha-60a1752b4/",
    email: "kritika.jha@ieee.org",
  },
  {
    id: "tarun-kushwaha",
    name: "Tarun",
    surname: "Kushwaha",
    role: "Tech Lead",
    photo: "/images/team/tarun-kushwaha.jpg",
    linkedin: "https://www.linkedin.com/in/tarun-kushwaha",
    email: "tarun.kushwaha@ieee.org",
  },
];

export const COMMITTEE_TEAMS = [
  "Web & Design",
  "Public Relations",
  "Event Management",
  "Content",
  "Social Media",
  "Technical",
  "Research",
  "Photography",
  "Sponsorship",
];
