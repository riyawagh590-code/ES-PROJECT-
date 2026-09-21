// ==========================================
// CAMPUS CONCIERGE - STORAGE
// ==========================================

import { STORAGE_KEYS } from "./constants";

// Check whether code is running in browser
const isBrowser = () => {
  return typeof window !== "undefined";
};

// ==========================================
// GENERIC STORAGE FUNCTIONS
// ==========================================

export const setItem = (key, value) => {
  if (!isBrowser()) return;

  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  } catch (error) {
    console.error(
      "Unable to save data:",
      error
    );
  }
};

export const getItem = (key, fallback = null) => {
  if (!isBrowser()) return fallback;

  try {
    const item = localStorage.getItem(key);

    if (!item) {
      return fallback;
    }

    return JSON.parse(item);
  } catch (error) {
    console.error(
      "Unable to read data:",
      error
    );

    return fallback;
  }
};

export const removeItem = (key) => {
  if (!isBrowser()) return;

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(
      "Unable to remove data:",
      error
    );
  }
};

export const clearStorage = () => {
  if (!isBrowser()) return;

  try {
    localStorage.clear();
  } catch (error) {
    console.error(
      "Unable to clear storage:",
      error
    );
  }
};

// ==========================================
// USER
// ==========================================

export const saveUser = (user) => {
  setItem(STORAGE_KEYS.USER, user);
};

export const getUser = () => {
  return getItem(STORAGE_KEYS.USER, null);
};

export const removeUser = () => {
  removeItem(STORAGE_KEYS.USER);
};

// ==========================================
// STUDENT
// ==========================================

export const saveStudent = (student) => {
  setItem(STORAGE_KEYS.STUDENT, student);
};

export const getStudent = () => {
  return getItem(STORAGE_KEYS.STUDENT, null);
};

export const removeStudent = () => {
  removeItem(STORAGE_KEYS.STUDENT);
};

// ==========================================
// VENDOR
// ==========================================

export const saveVendor = (vendor) => {
  setItem(STORAGE_KEYS.VENDOR, vendor);
};

export const getVendor = () => {
  return getItem(STORAGE_KEYS.VENDOR, null);
};

export const removeVendor = () => {
  removeItem(STORAGE_KEYS.VENDOR);
};

// ==========================================
// BOOKINGS
// ==========================================

export const saveBookings = (bookings) => {
  setItem(STORAGE_KEYS.BOOKINGS, bookings);
};

export const getBookings = () => {
  return getItem(STORAGE_KEYS.BOOKINGS, []);
};

export const addBooking = (booking) => {
  const bookings = getBookings();

  const newBooking = {
    ...booking,
    id:
      booking.id ||
      `BOOK-${Date.now()}`,
    createdAt:
      booking.createdAt ||
      new Date().toISOString(),
  };

  const updatedBookings = [
    newBooking,
    ...bookings,
  ];

  saveBookings(updatedBookings);

  return newBooking;
};

export const updateBooking = (
  bookingId,
  updates
) => {
  const bookings = getBookings();

  const updatedBookings = bookings.map(
    (booking) =>
      booking.id === bookingId
        ? {
            ...booking,
            ...updates,
          }
        : booking
  );

  saveBookings(updatedBookings);

  return updatedBookings;
};

// ==========================================
// VENDOR ORDERS
// ==========================================

export const saveOrders = (orders) => {
  setItem(STORAGE_KEYS.ORDERS, orders);
};

export const getOrders = () => {
  return getItem(STORAGE_KEYS.ORDERS, []);
};

export const addOrder = (order) => {
  const orders = getOrders();

  const newOrder = {
    ...order,
    id:
      order.id ||
      `ORDER-${Date.now()}`,
    createdAt:
      order.createdAt ||
      new Date().toISOString(),
  };

  const updatedOrders = [
    newOrder,
    ...orders,
  ];

  saveOrders(updatedOrders);

  return newOrder;
};

export const updateOrder = (
  orderId,
  updates
) => {
  const orders = getOrders();

  const updatedOrders = orders.map(
    (order) =>
      order.id === orderId
        ? {
            ...order,
            ...updates,
          }
        : order
  );

  saveOrders(updatedOrders);

  return updatedOrders;
};

// ==========================================
// VENDOR SERVICES
// ==========================================

export const saveServices = (services) => {
  setItem(STORAGE_KEYS.SERVICES, services);
};

export const getServices = () => {
  return getItem(STORAGE_KEYS.SERVICES, []);
};

// ==========================================
// VENDOR AVAILABILITY
// ==========================================

export const saveAvailability = (
  availability
) => {
  setItem(
    STORAGE_KEYS.AVAILABILITY,
    availability
  );
};

export const getAvailability = () => {
  return getItem(
    STORAGE_KEYS.AVAILABILITY,
    {}
  );
};

// ==========================================
// ROOMMATE PROFILE
// ==========================================

export const saveRoommateProfile = (
  profile
) => {
  setItem(
    STORAGE_KEYS.ROOMMATE_PROFILE,
    profile
  );
};

export const getRoommateProfile = () => {
  return getItem(
    STORAGE_KEYS.ROOMMATE_PROFILE,
    null
  );
};

// ==========================================
// FRESHER PASS
// ==========================================

export const saveFresherPass = (pass) => {
  setItem(
    STORAGE_KEYS.FRESHER_PASS,
    pass
  );
};

export const getFresherPass = () => {
  return getItem(
    STORAGE_KEYS.FRESHER_PASS,
    null
  );
};