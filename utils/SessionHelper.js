const isBrowser = () => typeof window !== "undefined";

export const session = {
  set: (key, value) => {
    if (!isBrowser()) return;
    try {
      const serialized = JSON.stringify(value);
      sessionStorage.setItem(key, serialized);
    } catch (error) {
      console.error("Error setting sessionStorage:", error);
    }
  },

  get: (key) => {
    if (!isBrowser()) return null;
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error getting sessionStorage:", error);
      return null;
    }
  },

  remove: (key) => {
    if (!isBrowser()) return;
    sessionStorage.removeItem(key);
  },

  clear: () => {
    if (!isBrowser()) return;
    sessionStorage.clear();
  },
};
