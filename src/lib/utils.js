// ==========================================
// CAMPUS CONCIERGE - UTILS
// ==========================================

// ==========================================
// CLASS NAME HELPER
// ==========================================

export const cn = (...classes) => {
  return classes
    .filter(Boolean)
    .join(" ");
};

// ==========================================
// CURRENCY
// ==========================================

export const formatCurrency = (amount) => {
  const value = Number(amount) || 0;

  return `₹${value.toLocaleString("en-IN")}`;
};

// ==========================================
// DATE
// ==========================================

export const formatDate = (date) => {
  if (!date) return "-";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );
};

// ==========================================
// TIME
// ==========================================

export const formatTime = (time) => {
  if (!time) return "-";

  const [hours, minutes] =
    time.split(":");

  if (!hours || !minutes) {
    return time;
  }

  const date = new Date();

  date.setHours(
    Number(hours),
    Number(minutes)
  );

  return date.toLocaleTimeString(
    "en-IN",
    {
      hour: "numeric",
      minute: "2-digit",
    }
  );
};

// ==========================================
// SEARCH
// ==========================================

export const searchItems = (
  items = [],
  query = "",
  fields = ["name"]
) => {
  const search = query
    .trim()
    .toLowerCase();

  if (!search) {
    return items;
  }

  return items.filter((item) =>
    fields.some((field) => {
      const value = item?.[field];

      if (!value) return false;

      return String(value)
        .toLowerCase()
        .includes(search);
    })
  );
};

// ==========================================
// FILTER
// ==========================================

export const filterByType = (
  items = [],
  type
) => {
  if (!type || type === "All") {
    return items;
  }

  return items.filter(
    (item) =>
      item?.type?.toLowerCase() ===
      type.toLowerCase()
  );
};

// ==========================================
// SORT BY RATING
// ==========================================

export const sortByRating = (
  items = [],
  descending = true
) => {
  return [...items].sort((a, b) => {
    const ratingA =
      Number(a?.rating) || 0;

    const ratingB =
      Number(b?.rating) || 0;

    return descending
      ? ratingB - ratingA
      : ratingA - ratingB;
  });
};

// ==========================================
// SORT BY PRICE
// ==========================================

export const sortByPrice = (
  items = [],
  descending = false
) => {
  return [...items].sort((a, b) => {
    const priceA =
      Number(a?.price) || 0;

    const priceB =
      Number(b?.price) || 0;

    return descending
      ? priceB - priceA
      : priceA - priceB;
  });
};

// ==========================================
// 4 DIGIT PIN
// ==========================================

export const generatePin = () => {
  return Math.floor(
    1000 + Math.random() * 9000
  ).toString();
};

// ==========================================
// ID GENERATOR
// ==========================================

export const generateId = (
  prefix = "ID"
) => {
  return `${prefix}-${Date.now()}-${Math.floor(
    Math.random() * 1000
  )}`;
};

// ==========================================
// DISCOUNT
// ==========================================

export const calculateDiscount = (
  price,
  percentage
) => {
  const amount = Number(price) || 0;
  const discount =
    Number(percentage) || 0;

  return Math.round(
    amount - (amount * discount) / 100
  );
};

// ==========================================
// DISCOUNT AMOUNT
// ==========================================

export const getDiscountAmount = (
  price,
  percentage
) => {
  const amount = Number(price) || 0;
  const discount =
    Number(percentage) || 0;

  return Math.round(
    (amount * discount) / 100
  );
};

// ==========================================
// COMPATIBILITY SCORE
// ==========================================

export const calculateCompatibility = (
  student = {},
  roommate = {}
) => {
  const fields = [
    "sleepSchedule",
    "cleanliness",
    "noise",
    "food",
    "lifestyle",
  ];

  let matches = 0;
  let availableFields = 0;

  fields.forEach((field) => {
    if (
      student[field] &&
      roommate[field]
    ) {
      availableFields += 1;

      if (
        student[field] ===
        roommate[field]
      ) {
        matches += 1;
      }
    }
  });

  if (availableFields === 0) {
    return 0;
  }

  return Math.round(
    (matches / availableFields) * 100
  );
};

// ==========================================
// GET MATCH LABEL
// ==========================================

export const getMatchLabel = (score) => {
  if (score >= 90) {
    return "Excellent match";
  }

  if (score >= 80) {
    return "Great match";
  }

  if (score >= 70) {
    return "Good match";
  }

  if (score >= 50) {
    return "Possible match";
  }

  return "Low compatibility";
};

// ==========================================
// VALIDATE EMAIL
// ==========================================

export const isValidEmail = (email) => {
  if (!email) return false;

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
};

// ==========================================
// VALIDATE PHONE
// ==========================================

export const isValidPhone = (phone) => {
  if (!phone) return false;

  const cleaned = String(phone).replace(
    /\D/g,
    ""
  );

  return cleaned.length >= 10;
};

// ==========================================
// CAPITALIZE
// ==========================================

export const capitalize = (text = "") => {
  if (!text) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
};

// ==========================================
// TRUNCATE TEXT
// ==========================================

export const truncate = (
  text = "",
  maxLength = 100
) => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(
    0,
    maxLength
  )}...`;
};

// ==========================================
// GET INITIALS
// ==========================================

export const getInitials = (
  name = ""
) => {
  return name
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) =>
      word.charAt(0).toUpperCase()
    )
    .join("");
};

// ==========================================
// CHECK EMPTY VALUE
// ==========================================

export const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim() === "";
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return false;
};