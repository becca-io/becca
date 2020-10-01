import { TextField } from '@becca/ui';
import React, { useRef, useState } from 'react';

export const Test = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const getValidationState = () => {
    if (value === '') return undefined;

    if (value === 'error') return 'invalid';

    return 'valid';
  };
  return (
    <>
      <h2>Controlled TextField - Validation</h2>
      <TextField
        label="test input"
        validationState={getValidationState()}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <h2>Controlled TextField - No Validation</h2>
      <TextField onChange={(e) => setValue(e.target.value)} value={value} />
      <h2>UnControlled TextField</h2>
      <TextField ref={inputRef} isError={inputRef.current?.value !== 'error'} />
    </>
  );
};

export default Test;
