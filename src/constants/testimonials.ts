export interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  achievement: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mr. Sharad Mishra",
    position: "Owner",
    company: "Maa Katyaini Dhaam",
    image: "#",
    content:
      "Takshya eSolutions built a complete hotel management and booking platform for us, combining CRM, reservations, and operations into one system. It has streamlined workflows, enhanced staff efficiency, improved guest satisfaction, and provided us with clear insights for smarter business decisions.",
    rating: 5,
    achievement: "Boosted occupancy & streamlined operations"
  },
  {
    name: "Mr. Ayush Tandon",
    position: "Founder & CEO",
    company: "Sparklus Lamps",
    image: "#",
    content: "Partnering with Takshya eSolutions was a game changer for Sparklus Lamps. They built a modern, user-friendly eCommerce website that expanded our online presence and designed a custom billing software that streamlined our daily operations. Their professionalism, technical expertise, and attention to detail made the entire process seamless.",
    rating: 5,
    achievement: "Increased online sales & automated billing"
  },
  {
    name: "Mr. Devesh Dubey",
    position: "Chief Executive Officer",
    company: "Beautiful Planet.AI",
    image: "#",
    content:
      "Takshya eSolutions built a GenAI assistant and agentic workflow for us that automates content creation, customer replies, and routine tasks, freeing our team to focus on strategic priorities and accelerating response times significantly, while also improving accuracy, personalization, and overall customer satisfaction.",
    rating: 5,
    achievement: "Automated customer interactions"
  }
];

export const testimonialStats = {
  averageRating: "4.9/5",
  averageRatingLabel: "Average Rating",
  happyClients: "10+",
  happyClientsLabel: "Happy Clients",
  retentionRate: "97%",
  retentionRateLabel: "Retention Rate"
};
