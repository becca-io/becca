import React, { forwardRef, Ref } from 'react';
import { TextFieldBaseInterface } from '../types/textFieldBase';
import { TextFieldBase } from './TextBase';

type Props = TextFieldBaseInterface;

export const TextField = forwardRef(
  (props: Props, ref: Ref<HTMLInputElement>) => {
    return <TextFieldBase {...props} ref={ref} />;
  }
);

export default TextField;
