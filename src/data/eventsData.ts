export interface EventItem {
  id: string;
  title: string;
  category: "Workshop" | "Hackathon" | "Conference" | "Webinar" | "Technical Talk" | "Competition";
  date: string;
  location: string;
  image: string;
  description: string;
  highlights?: string[];
  ieeeXploreUrl?: string;
  instaUrl?: string;
  isUpcoming?: boolean;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: "iccsai-2026",
    title: "ICCSAI 2026 - 4th IEEE International Conference on Communication, Security & AI",
    category: "Conference",
    date: "Nov 28 - Nov 30, 2026",
    location: "Galgotias University Campus",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    description: "Flagship international research conference organized by IEEE GU SB. All accepted papers will be submitted to IEEE Xplore.",
    instaUrl: "https://www.instagram.com/ieee_gusb/",
    isUpcoming: true,
  },
  {
    id: "ai-bootcamp-2025",
    title: "5-Day AI & Machine Learning Bootcamp (with NIELIT)",
    category: "Workshop",
    date: "March 24-28, 2025",
    location: "Auditorium Block C, Galgotias University",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    description: "Immersive 5-day hands-on bootcamp on Deep Learning, Model Fine-tuning, and Neural Networks conducted in collaboration with NIELIT Delhi.",
    highlights: ["NIELIT Certified", "Hands-on PyTorch", "150+ Attendees"],
    instaUrl: "https://www.instagram.com/ieee_gusb/",
    isUpcoming: false,
  },
  {
    id: "design-thinking-expo-2025",
    title: "IEEE IAS Design Thinking & Project Expo",
    category: "Competition",
    date: "December 14, 2025",
    location: "Innovation & Incubation Hub, Galgotias University",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    description: "National student innovation showcase displaying working hardware prototypes and software solutions aligned with UN Sustainable Development Goals.",
    highlights: ["SDG Solutions", "Hardware Models", "Industry Judges"],
    instaUrl: "https://www.instagram.com/ieee_gusb/",
    isUpcoming: false,
  },
  {
    id: "plc-automation-2024",
    title: "PLC & Industrial Automation Masterclass",
    category: "Workshop",
    date: "November 18, 2024",
    location: "Electrical & Automation Lab, Block A",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    description: "Practical training on Programmable Logic Controllers (PLC), SCADA systems, and industrial IoT automation.",
    highlights: ["Industrial IoT", "PLC Programming", "Live Hardware Kits"],
    instaUrl: "https://www.instagram.com/ieee_gusb/",
    isUpcoming: false,
  },
  {
    id: "robotics-line-follower-2025",
    title: "Follow the Line Robotics Challenge",
    category: "Competition",
    date: "April 12, 2025",
    location: "Central Pavilion, Galgotias University",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    description: "High-speed autonomous line-following robot race testing sensor calibration, PID loops, and chassis micro-engineering.",
    highlights: ["Autonomous Bots", "Cash Prizes", "30+ Bot Teams"],
    instaUrl: "https://www.instagram.com/ieee_gusb/",
    isUpcoming: false,
  },
  {
    id: "iccsai-2025",
    title: "ICCSAI 2025 - 3rd IEEE International Conference",
    category: "Conference",
    date: "November 21-23, 2025",
    location: "Galgotias University",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    description: "Over 350+ research paper submissions from 18 countries. Keynotes delivered by renowned IEEE Fellows.",
    ieeeXploreUrl: "https://ieeexplore.ieee.org/",
    instaUrl: "https://www.instagram.com/ieee_gusb/",
    isUpcoming: false,
  },
  {
    id: "hackoverflow-3",
    title: "HackOverflow 3.0 - 36-Hour National Hackathon",
    category: "Hackathon",
    date: "March 12-14, 2025",
    location: "Campus Innovation Hub",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    description: "National level hackathon bringing together 100+ finalist teams competing for cash prizes worth ₹2,00,000+.",
    highlights: ["100+ Teams", "₹2 Lakh Pool", "Mentors from Google & Amazon"],
    instaUrl: "https://www.instagram.com/ieee_gusb/",
    isUpcoming: false,
  },
  {
    id: "iccsai-2023",
    title: "ICCSAI 2023 - 2nd IEEE International Conference",
    category: "Conference",
    date: "November 17-18, 2023",
    location: "Galgotias University",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    description: "Successfully indexed in IEEE Xplore proceedings with over 200 published papers.",
    ieeeXploreUrl: "https://ieeexplore.ieee.org/",
    instaUrl: "https://www.instagram.com/ieee_gusb/",
    isUpcoming: false,
  },
];
