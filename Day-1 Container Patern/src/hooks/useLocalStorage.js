import { useState, useEffect } from "react";

/**
 * Custom hook to manage localStorage with React state
 * @param {string} key - The localStorage key
 * @param {*} initialValue - The default value if nothing is found
 */
export default function useLocalStorage(key, initialValue) {
  // ✅ Initialize state with value from localStorage or fallback
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  });

  // ✅ Sync localStorage whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [key, value]);

  return [value, setValue];
}
