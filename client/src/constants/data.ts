import illustrations from "./illustrations";

export const NAV_LINKS = [
  { href: "#", label: "Events" },
  { href: "#", label: "Courses" },
  { href: "/business/overview", label: "Bowtify Business" },
];

export const SUBSCRIBE_TO_EMAIL = {
  individual: "Send me special offers and personalized tips.",
  business:
    "I want to get the most out of my expereince by receiving insider tips.",
};

export const SIGN_IN_FORM = {
  heading: "Sign in to your Bowtify Account",
};

export const apiBaseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;

export const authError = "Something went wrong, please try again.";

export const CATEGORIES = [
  {
    label: "Design",
    illustration: illustrations.categorydevelopment,
    href: "",
  },
  {
    label: "Development",
    illustration: illustrations.categorydevelopment,
    href: "",
  },
  {
    label: "Marketing",
    illustration: illustrations.categorydevelopment,
    href: "",
  },
  {
    label: "IT and Software",
    illustration: illustrations.categorydevelopment,
    href: "",
  },
  {
    label: "Business",
    illustration: illustrations.categorydevelopment,
    href: "",
  },
  {
    label: "Photography",
    illustration: illustrations.categorydevelopment,
    href: "",
  },
  {
    label: "Music",
    illustration: illustrations.categorydevelopment,
    href: "",
  },
  {
    label: "Personal Development",
    illustration: illustrations.categorydevelopment,
    href: "",
  },
];

export const INDIVIDUAL_ACCOUNT_AUTHENTICATED_LINKS = [
  {
    href: "",
    label: "My learning",
  },
  {
    href: "",
    label: "My cart",
  },
  {
    href: "",
    label: "Wishlist",
  },
  {
    href: "",
    label: "Bowtify business",
  },
  {
    href: "",
    label: "Notifications",
  },
  {
    href: "",
    label: "Account settings",
  },
  {
    href: "",
    label: "Transaction history",
  },
];

export const footerLinks = [
  {
    href: "",
    label: "Bowtify business",
  },
  {
    href: "",
    label: "About us",
  },
  {
    href: "",
    label: "Contact us",
  },
  {
    href: "",
    label: "Careers",
  },
  {
    href: "",
    label: "Blog",
  },
  {
    href: "",
    label: "Help and support",
  },
  {
    href: "",
    label: "Terms",
  },
  {
    href: "",
    label: "Privacy policy",
  },
  {
    href: "",
    label: "Cookie policy",
  },
  {
    href: "",
    label: "Investors",
  },
  {
    href: "",
    label: "Accessibility",
  },
  {
    href: "",
    label: "Community",
  },
];
