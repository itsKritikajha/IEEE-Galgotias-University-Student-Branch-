export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  category: "membership" | "beginners" | "volunteering" | "benefits" | "societies" | "general";
  featured?: boolean;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "01",
    question: "Do I need an IEEE membership to participate in IEEE GU SB activities?",
    answer: "Not necessarily. Participation depends on the individual activity. IEEE Student Branches involve both IEEE members and non-members in workshops, tutorials, guest lectures, and open programs. However, select flagship competitions, member-exclusive workshops, executive leadership roles, and global grants specifically require official IEEE membership. Always check the individual event announcement for eligibility.",
    category: "membership",
    featured: true,
  },
  {
    id: "02",
    question: "I'm a beginner. Can I join if I don't have strong technical skills yet?",
    answer: "Yes, absolutely! You don't have to be an expert before joining. IEEE GU's activities include workshops, seminars, hands-on learning, and project-based hackathons designed specifically to help students learn and develop skills from scratch. Our chapters (such as CIS, Computer Society, and IAS) focus on increasing awareness, practical hands-on development, peer mentorship, and foundational learning.",
    category: "beginners",
    featured: true,
  },
  {
    id: "03",
    question: "What's the difference between being an IEEE member and being an IEEE volunteer?",
    answer: "Membership and volunteering serve complementary purposes:\n\n• IEEE Member: You officially join IEEE global and receive IEEE membership benefits (IEEE Xplore discounts, conference travel grants, global scholarships, and society affiliations).\n• Volunteer / Core Team: You contribute your time, creativity, and leadership to help organize, design, and execute branch activities, hackathons, and conferences.\n\nA student can participate in branch activities without necessarily holding a volunteer position, while volunteer roles provide invaluable real-world experience in event operations, technical architecture, UI/UX design, outreach, and leadership.",
    category: "volunteering",
    featured: true,
  },
  {
    id: "04",
    question: "What do I actually get from joining IEEE—not just another certificate?",
    answer: "The value goes far beyond certificates. IEEE Student Membership provides tangible career and professional catalysts: access to 5M+ technical research documents on IEEE Xplore, direct networking with industry engineers (Microsoft, Amazon), subsidized conference registration (ICCSAI), eligibility for global travel grants and Richard E. Merwin scholarships, participation in 24-hour hackathons like IEEEXtreme, and hands-on experience running national-scale initiatives.",
    category: "benefits",
    featured: true,
  },
  {
    id: "05",
    question: "How can I become a volunteer or join the Core Team?",
    answer: "Volunteer and leadership opportunities are announced annually through the IEEE GU Student Branch and its individual society chapters. Depending on open positions, students can apply across Technical & Web Development, UI/UX Design, Event Management & Operations, Public Relations & Outreach, and Research. You can submit your application using the intake form on this page or connect during open calls.",
    category: "volunteering",
    featured: true,
  },
  {
    id: "06",
    question: "Is IEEE only for CSE, ECE or engineering students?",
    answer: "No single technical discipline defines IEEE. IEEE covers a wide range of technology, engineering, management, and scientific fields. GU's Student Branch includes diverse communities such as Computer Society, Computational Intelligence Society, Women in Engineering (WIE), Technology & Engineering Management Society (TEMS), and Industry Applications Society (IAS). Your best fit depends on your interests and curiosity.",
    category: "general",
  },
  {
    id: "07",
    question: "Will joining IEEE help me if I'm interested in research or higher studies?",
    answer: "Yes, significantly. IEEE is the world's leading publisher in electrical engineering, computer science, and electronics. Joining IEEE GU SB gives you access to technical literature on IEEE Xplore, guidance on authoring research papers for indexed conferences like ICCSAI, connections with faculty mentors and global researchers, and eligibility for international scholarships and travel grants that strengthen graduate applications.",
    category: "benefits",
  },
  {
    id: "08",
    question: "I don't know which IEEE society I should join. How do I choose?",
    answer: "Start with your passion, not just the society title:\n\n• Computer Science & Web Systems → IEEE Computer Society (CS)\n• AI, Neural Networks & Machine Learning → IEEE Computational Intelligence Society (CIS)\n• Women in STEM & Mentorship → IEEE Women in Engineering (WIE)\n• Tech Leadership, Startups & Ventures → IEEE TEMS & IEEE Entrepreneurship\n• Industrial Automation & Smart Energy → IEEE IAS\n• Optics, Quantum & Photonics → IEEE Photonics Society\n• RF, Wireless, Radar & Microwave → IEEE MTT-S\n• Biomedical Devices & Healthcare AI → IEEE EMBS",
    category: "societies",
  },
  {
    id: "09",
    question: "Will I have to spend a lot of time on IEEE activities?",
    answer: "Your level of involvement is completely flexible. You can choose to participate as an attendee in weekend workshops and hackathons that fit your schedule, or dive deeper by taking up volunteer, committee, or project leadership roles where you manage weekly initiatives alongside your studies.",
    category: "general",
  },
  {
    id: "10",
    question: "I'm already part of another college club. Why should I join IEEE too?",
    answer: "IEEE offers something fundamentally different from campus-only clubs: direct connection to a prestigious global technical and professional organization across 160+ countries. It gives you recognized international credentials, indexed conference participation, Region 10 student networks, global programming competitions like IEEEXtreme, and access to industry mentors beyond the university campus.",
    category: "general",
  },
];

