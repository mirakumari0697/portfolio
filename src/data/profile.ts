// Centralized profile data — edit values here to update the whole site.
export const profile = {
  name: "Mira Kumari",
  role: "Network Security Engineer",
  tagline:
    "5.4+ years securing enterprise networks across Infosys, Accenture & LTIMindtree.",
  summary:
    "Results-oriented Network Security Engineer with over 5.4 years of experience across major MNCs like Infosys, Accenture, and LTIMindtree. Proven expertise in configuring and troubleshooting Palo Alto and Checkpoint Firewalls, Zscaler (ZIA), and Citrix Netscaler Load Balancers. Skilled in SSL certificate management, IOS upgrades, and handling critical security incidents. Strong background in Routing, Switching, and EIP management.",
  // TODO: Replace these placeholders with your real contact details.
  email: "your.email@example.com",
  phone: "+91 00000 00000",
  linkedin: "https://www.linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  location: "Pune / Bengaluru, India",
  resumeUrl: "/Mira_Kumari_Resume.pdf",
};

export const stats = [
  { value: "5.4+", label: "Years Experience" },
  { value: "3", label: "Global MNCs" },
  { value: "5,000+", label: "Users Migrated to Zscaler" },
  { value: "40%", label: "Fewer SSL Incidents" },
];

export const skillCategories = [
  {
    title: "Security & Firewalls",
    items: [
      "Palo Alto (GlobalProtect, Panorama)",
      "Checkpoint (SmartConsole)",
      "Cisco ASA",
      "Fortigate",
    ],
  },
  {
    title: "Cloud & Web Security",
    items: [
      "Zscaler ZIA Implementation",
      "URL / Cloud App Filtration",
      "Threat Protection",
    ],
  },
  {
    title: "Load Balancing",
    items: [
      "Citrix Netscaler ADC",
      "SSL Offloading",
      "Certificate Management",
      "GSLB",
    ],
  },
  {
    title: "Network Services",
    items: ["Efficient IP (EIP)", "Infoblox DNS / DHCP", "IPAM"],
  },
  {
    title: "Routing & Infrastructure",
    items: ["Cisco Routing & Switching", "IPSEC VPN", "SSL VPN", "BGP", "OSPF"],
  },
];

export const proficiencies = [
  { name: "Palo Alto Firewalls", level: 92 },
  { name: "Zscaler (ZIA)", level: 90 },
  { name: "Checkpoint Firewalls", level: 85 },
  { name: "Citrix Netscaler ADC", level: 82 },
  { name: "Cisco Routing & Switching", level: 80 },
];

export const experience = [
  {
    company: "Infosys",
    role: "Cyber Security Engineer",
    period: "Feb 2025 – Present",
    location: "Pune / Bengaluru",
    points: [
      "Managing enterprise-level security operations for global clients with focus on Palo Alto and Zscaler environments.",
      "Configuring security policies, threat prevention and high-availability (HA) clusters.",
      "Leading incident response for critical network security threats and firewall performance issues.",
    ],
  },
  {
    company: "Accenture",
    role: "Network Security Engineer",
    period: "Oct 2022 – Feb 2025",
    location: "Bengaluru",
    points: [
      "Spearheaded end-to-end Zscaler-ZIA implementation including URL / Cloud App filtration.",
      "Managed SSL certificate renewals across multiple firewalls and Citrix Netscaler load balancers.",
      "Executed critical Cisco IOS switch upgrades and firmware migrations for WLC and Netscaler.",
    ],
  },
  {
    company: "LTIMindtree",
    role: "Network Engineer",
    period: "Sep 2019 – Sep 2022",
    location: "Chennai",
    points: [
      "Administered Cisco ASA, Fortigate and Checkpoint firewalls for a major banking project.",
      "Assisted in large-scale firewall hardware refresh and SmartConsole management upgrades.",
      "Monitored network traffic and managed DNS / DHCP records via the Efficient IP (EIP) portal.",
    ],
  },
];

export const projects = [
  {
    title: "Zscaler Transformation",
    impact: "5,000+ users migrated",
    description:
      "Successfully migrated 5,000+ users to Zscaler ZIA, improving security posture and reducing latency across global offices.",
  },
  {
    title: "SSL Certificate Automation",
    impact: "40% fewer expired-cert incidents",
    description:
      "Streamlined SSL certificate tracking and renewal workflows, dramatically reducing outage-causing certificate expirations.",
  },
  {
    title: "ASA → Palo Alto Migration",
    impact: "Zero-downtime cutover",
    description:
      "Managed the seamless transition of legacy Cisco ASA policies to Palo Alto Next-Generation Firewalls with full policy parity.",
  },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Bengal College of Engineering & Technologies, Durgapur",
  period: "2015 – 2019",
};

export const certifications = [
  {
    name: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
  },
];
