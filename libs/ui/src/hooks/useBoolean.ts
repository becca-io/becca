import { useState } from 'react';

export function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toFalse = () => setValue(false);
  const toTrue = () => setValue(true);
  const toggle = () => setValue((prev) => !prev);

  return [value, toTrue, toFalse, toggle] as const;
}
