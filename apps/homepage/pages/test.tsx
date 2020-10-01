import { TextField } from '@becca/ui';
import React, { useRef, useState } from 'react';

export const Test = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const getValidationState = (value: string) => {
    if (value === '') return undefined;

    if (value === 'error') return 'invalid';

    return 'valid';
  };
  return (
    <>
      <h2>Controlled TextField - Validation</h2>
      <TextField
        label="test input"
        validationState={getValidationState(value)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <h2>Controlled TextField - No Validation</h2>
      <TextField onChange={(e) => setValue(e.target.value)} value={value} />
      <h2>UnControlled TextField</h2>
      <TextField ref={inputRef} validationState="invalid" />
    </>
  );
};

export default Test;
