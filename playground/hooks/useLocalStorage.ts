import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      setValue(stored);
    }
  }, [key]);

  const save = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  return { value, save };
}
