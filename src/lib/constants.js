// ==========================================
// CAMPUS CONCIERGE - CONSTANTS
// ==========================================

// Brand
export const APP_NAME = "Campus Concierge";

export const APP_TAGLINE = "Your campus life, sorted.";

// ==========================================
// SERVICE CATEGORIES
// ==========================================

export const SERVICE_CATEGORIES = [
  {
    id: "mess",
    name: "Mess",
    description: "Affordable meals and mess services",
    href: "/student/mess",
  },
  {
    id: "laundry",
    name: "Laundry",
    description: "Laundry and dry-cleaning services",
    href: "/student/laundry",
  },
  {
    id: "cleaning",
    name: "Cleaning",
    description: "Room cleaning and housekeeping",
    href: "/student/cleaning",
  },
  {
    id: "pg",
    name: "PG & Hostels",
    description: "Find accommodation near campus",
    href: "/student/pg",
  },
  {
    id: "cafes",
    name: "Cafes",
    description: "Cafes, food and campus deals",
    href: "/student/cafes",
  },
  {
    id: "roomate",
    name: "Roommate Finder",
    description: "Find a compatible roommate",
    href: "/student/roomate",
  },
];

// ==========================================
// USER ROLES
// ==========================================

export const USER_ROLES = {
  STUDENT: "student",
  VENDOR: "vendor",
};

// ==========================================
// BOOKING STATUS
// ==========================================

export const BOOKING_STATUS = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  ACCEPTED: "Accepted",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
  REJECTED: "Rejected",
};

// ==========================================
// VENDOR STATUS
// ==========================================

export const VENDOR_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  BUSY: "Busy",
  PENDING_VERIFICATION: "Pending Verification",
};

// ==========================================
// FRESHER PASS PLANS
// ==========================================
// These are frontend/demo plan values.
// They can be replaced when final pricing is decided.

export const FRESHER_PASS_PLANS = [
  {
    id: "starter",
    name: "Fresher Starter",
    price: 199,
    period: "month",
    description: "A simple start for campus life.",
    popular: false,
    features: [
      "Access to campus services",
      "Basic Fresher Pass offers",
      "Service discovery",
    ],
  },

  {
    id: "pro",
    name: "Campus Pro",
    price: 399,
    period: "month",
    description: "More savings and more campus perks.",
    popular: true,
    features: [
      "Everything in Starter",
      "Exclusive vendor discounts",
      "Priority booking access",
      "Special campus deals",
    ],
  },

  {
    id: "elite",
    name: "Elite Campus Club",
    price: 699,
    period: "month",
    description: "The complete fresher experience.",
    popular: false,
    features: [
      "Everything in Pro",
      "Premium campus offers",
      "Extra service benefits",
      "Priority support",
    ],
  },
];

// ==========================================
// STORAGE KEYS
// ==========================================

export const STORAGE_KEYS = {
  USER: "campus_concierge_user",
  STUDENT: "campus_concierge_student",
  VENDOR: "campus_concierge_vendor",
  BOOKINGS: "campus_concierge_bookings",
  ORDERS: "campus_concierge_orders",
  SERVICES: "campus_concierge_services",
  AVAILABILITY: "campus_concierge_availability",
  ROOMMATE_PROFILE: "campus_concierge_roommate_profile",
  FRESHER_PASS: "campus_concierge_fresher_pass",
};

// ==========================================
// DEFAULT VALUES
// ==========================================

export const DEFAULT_BOOKING_STATUS = "Pending";

export const DEFAULT_VENDOR_STATUS = "Active";

export const DEFAULT_MATCH_SCORE = 85;

// ==========================================
// ROOMMATE OPTIONS
// ==========================================

export const ROOMMATE_OPTIONS = {
  SLEEP_SCHEDULE: [
    "Early bird",
    "Night owl",
    "Flexible",
  ],

  CLEANLINESS: [
    "Very clean",
    "Moderately clean",
    "Relaxed",
  ],

  NOISE: [
    "Quiet",
    "Moderate",
    "Social",
  ],

  FOOD: [
    "Vegetarian",
    "Non-vegetarian",
    "Anything works",
  ],

  LIFESTYLE: [
    "Social",
    "Balanced",
    "Private",
  ],
};

// ==========================================
// NAVIGATION
// ==========================================

export const STUDENT_NAVIGATION = [
  {
    label: "Dashboard",
    href: "/student",
  },
  {
    label: "Mess",
    href: "/student/mess",
  },
  {
    label: "Laundry",
    href: "/student/laundry",
  },
  {
    label: "Cleaning",
    href: "/student/cleaning",
  },
  {
    label: "PG & Hostels",
    href: "/student/pg",
  },
  {
    label: "Cafes",
    href: "/student/cafes",
  },
  {
    label: "Roommate Finder",
    href: "/student/roomate",
  },
  {
    label: "My Bookings",
    href: "/bookings",
  },
  {
    label: "Fresher Pass",
    href: "/pass",
  },
  {
    label: "Profile",
    href: "/student/profile",
  },
];

export const VENDOR_NAVIGATION = [
  {
    label: "Dashboard",
    href: "/vendor",
  },
  {
    label: "Orders",
    href: "/vendor/orders",
  },
  {
    label: "Availability",
    href: "/vendor/availability",
  },
  {
    label: "Services",
    href: "/vendor/services",
  },
  {
    label: "Earnings",
    href: "/vendor/earnings",
  },
  {
    label: "Profile",
    href: "/vendor/profile",
  },
];