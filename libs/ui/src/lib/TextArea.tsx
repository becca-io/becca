import React, { forwardRef, Ref } from 'react';
import { TextFieldBaseInterface } from '../types/textFieldBase';
import { TextFieldBase } from './TextBase';

type Props = TextFieldBaseInterface;

export const TextArea = forwardRef(
  (props: Props, ref: Ref<HTMLTextAreaElement>) => {
    return <TextFieldBase {...props} ref={ref} multiLine />;
  }
);

export default TextArea;
