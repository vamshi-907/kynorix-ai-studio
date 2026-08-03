export const CONTACT = {
  email: "venkatasaivamshi23@gmail.com",
  phone: "+91 86392 43604",
  phoneHref: "tel:+918639243604",
  whatsapp: "https://wa.me/918639243604",
  location: "Hyderabad, India — serving clients worldwide",
} as const;

export const mailto = (subject: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;
