//https://www.youtube.com/watch?v=6ThXsUwLWvc see here for details
import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  //console.log('getSavedValue')
  const saved = JSON.parse(sessionStorage.getItem(key));
  if (saved) return saved;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    //console.log('useSessionStorage')
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
