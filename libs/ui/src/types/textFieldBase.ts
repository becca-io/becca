import { InputHTMLAttributes, ReactNode } from 'react';
import { Validation } from './shared';

export interface TextFieldBaseInterface
  extends InputHTMLAttributes<Partial<HTMLInputElement & HTMLTextAreaElement>>,
    Validation {
  label?: ReactNode;
  type?: string;
}
