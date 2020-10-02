import { InputHTMLAttributes, ReactNode } from 'react';
import { Validation } from './shared';

export interface InputBase
  extends InputHTMLAttributes<HTMLInputElement>,
    Validation {
  label?: ReactNode;
  type?: string;
}
