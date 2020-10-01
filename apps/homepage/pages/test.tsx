import { TextField } from '@becca/ui';
import React, { useState } from 'react';

export const Test = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <h2>Controlled TextField</h2>
      <TextField
        isError={value === 'error'}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </>
  );
};

export default Test;
