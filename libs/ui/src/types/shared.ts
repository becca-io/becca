export type ValidationState = 'valid' | 'invalid';

export interface Validation {
  validationState?: ValidationState;
  isRequired?: boolean;
}
