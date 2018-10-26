import { useState, useEffect } from 'react';

export const useDebouncedState = (init, debounce, cb) => {
  const [value, setValue] = useState(init);
  let timeout;

  useEffect(
    () => {
      if (cb) cb(value);
    },
    [value],
  );

  const setDebounced = (v, _debounce) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setValue(v);
    }, _debounce || debounce);
    return () => clearTimeout(timeout);
  };

  return [value, setDebounced];
};
