export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleShort: string;
  category: "counsellor" | "lead" | "committee";
  committeeName?: string;
  image: string;
  linkedin?: string;
  email?: string;
  bio?: string;
  badge?: string;
}

export const FACULTY_COUNSELLOR: TeamMember = {
  id: "branch-counsellor",
  name: "Dr. Avadhesh Kumar",
  role: "IEEE GU SB Branch Counsellor & Pro Vice-Chancellor",
  roleShort: "Branch Counsellor",
  category: "counsellor",
  image: "/images/team/avadhesh-kumar.jpg",
  linkedin: "https://www.linkedin.com/",
  email: "avadhesh.kumar@galgotiasuniversity.edu.in",
  bio: "Pro-VC at Galgotias University and Vice-Chair of IEEE UP Section. Guiding IEEE GU SB towards excellence in technical innovation, student empowerment, and global research standards.",
  badge: "Faculty Advisor",
};

export const CORE_POSTER_TEAM: TeamMember[] = [
  {
    id: "atharav-singh",
    name: "Atharav Singh",
    role: "Treasurer",
    roleShort: "Treasurer",
    category: "lead",
    image: "/images/team/atharav-singh.jpg",
    linkedin: "https://www.linkedin.com/in/atharav-singh",
    email: "atharav.singh@ieee.org",
    bio: "Managing financial operations, sponsorships, budget allocations, and fiscal planning for all IEEE GU SB initiatives and flagship conferences.",
  },
  {
    id: "mohammad-rahil",
    name: "Mohammad Rahil",
    role: "Secretary",
    roleShort: "Secretary",
    category: "lead",
    image: "/images/team/mohammad-rahil.jpg",
    linkedin: "https://www.linkedin.com/in/mohammad-rahil",
    email: "mohammad.rahil@ieee.org",
    bio: "Overseeing student branch communications, executive documentation, event compliance, and inter-departmental operations.",
  },
  {
    id: "ansh-vashisth",
    name: "Ansh Vashisth",
    role: "Chairperson",
    roleShort: "Chairperson",
    category: "lead",
    image: "/images/team/ansh-vashisth.jpg",
    linkedin: "https://www.linkedin.com/in/ansh-vashisth",
    email: "ansh.vashisth@ieee.org",
    bio: "Leading IEEE GU SB vision, strategy, partnership development, and representing the student branch at regional & global IEEE forums.",
  },
  {
    id: "kritika-jha",
    name: "Kritika Jha",
    role: "Vice Chairperson",
    roleShort: "Vice Chairperson",
    category: "lead",
    image: "/images/team/kritika-jha.jpg",
    linkedin: "https://www.linkedin.com/in/kritika-jha-60a1752b4/",
    email: "kritika.jha@ieee.org",
    bio: "Directing event execution, member development programs, diversity initiatives, and operational sync across student chapters.",
  },
  {
    id: "tarun-kushwaha",
    name: "Tarun Kushwaha",
    role: "Tech Lead",
    roleShort: "Tech Lead",
    category: "lead",
    image: "/images/team/tarun-kushwaha.jpg",
    linkedin: "https://www.linkedin.com/in/tarun-kushwaha",
    email: "tarun.kushwaha@ieee.org",
    bio: "Head of Technical Projects, Web Architecture, Hackathons, and Technical Skill Acceleration workshops.",
  },
];

export const EXTENDED_COMMITTEE_MEMBERS: TeamMember[] = [
  {
    id: "web-lead-1",
    name: "Aarav Sharma",
    role: "Web & Technical Head",
    roleShort: "Web Lead",
    category: "committee",
    committeeName: "Web & Design Team",
    image: "/images/team/aarav-sharma.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: "pr-lead-1",
    name: "Ananya Roy",
    role: "Public Relations Head",
    roleShort: "PR Lead",
    category: "committee",
    committeeName: "PR & Outreach",
    image: "/images/team/ananya-roy.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: "event-lead-1",
    name: "Rohan Verma",
    role: "Event Operations Head",
    roleShort: "Event Operations",
    category: "committee",
    committeeName: "Event Management",
    image: "/images/team/rohan-verma.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: "content-lead-1",
    name: "Diya Kapoor",
    role: "Content & Editorial Lead",
    roleShort: "Content Head",
    category: "committee",
    committeeName: "Content & Media",
    image: "/images/team/diya-kapoor.jpg",
    linkedin: "https://linkedin.com",
  },
];
