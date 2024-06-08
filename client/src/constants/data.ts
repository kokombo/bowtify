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

export const apiBaseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;

export const authError = "Something went wrong, please try again.";
