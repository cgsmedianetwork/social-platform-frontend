// localStorage helper
const isBrowser = () => typeof window !== "undefined";

export const localStorage = {
  set: (key, value) => {
    if (!isBrowser()) return;
    try {
      const serialized = JSON.stringify(value);
      localStorage.set(key, serialized);
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  },
  get: (key) => {
    if (!isBrowser()) return null;
    try {
      const item = localStorage.get(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error getting localStorage:", error);
      return null;
    }
  },
  remove: (key) => {
    if (!isBrowser()) return;
    try {
      localStorage.remove(key);
    } catch (error) {
      console.error("Error removing localStorage:", error);
      return null;
    }
  },
  clear: () => {
    if (!isBrowser()) return null;
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
      return null;
    }
  },
};
