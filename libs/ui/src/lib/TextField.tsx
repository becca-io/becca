import styled from '@emotion/styled';
import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  Ref,
  useState,
} from 'react';
import { ThemeProps } from '../color';

export type ValidationState = 'valid' | 'invalid';

export interface Validation {
  validationState?: ValidationState;
  isRequired?: boolean;
}

interface Props extends InputHTMLAttributes<HTMLInputElement>, Validation {
  label?: ReactNode;
  isError?: boolean;
  type?: string;
}

const ControlledTextField = forwardRef(
  ({ type = 'text', ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <Wrapper>
        <StyledInput
          {...rest}
          ref={ref}
          isFocused={isFocused}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
        />
        <StatusBar />
        <Label>{rest.label}</Label>
      </Wrapper>
    );
  }
);

const UnControlledTextField = forwardRef(
  (props: Props, ref: Ref<HTMLInputElement>) => {
    const [value, setValue] = useState('');

    return (
      <ControlledTextField
        {...props}
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
);

export const TextField = forwardRef(
  ({ value, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    if (value == null) {
      return <UnControlledTextField {...rest} ref={ref} />;
    }
    return <ControlledTextField {...rest} value={value} />;
  }
);

const Wrapper = styled.div`
  position: relative;
`;
const Label = styled.label`
  position: absolute;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
`;

const StatusBar = styled.span<ThemeProps & Props>`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.1s linear, opacity 0.1s linear;
  position: absolute;
  bottom: 0;
  left: 2px;
  background-color: ${({ theme }) => {
    return theme.colors.primary.violet7;
  }};
  display: inline-block;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  width: calc(100% - 4px);
  height: 3px;
`;

const StyledInput = styled.input<ThemeProps & Props & { isFocused: boolean }>`
  border-radius: 8px;
  border: 1px solid;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.primary.gray2};

  & + span {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear, opacity 0.1s linear;
    background-color: ${({ theme, validationState, isFocused }) => {
      if (validationState === 'invalid') {
        return theme.colors.primary.red3;
      }
      if (validationState === 'valid') {
        return theme.colors.primary.green3;
      }
      if (!isFocused) {
        return 'transparent';
      }
      if (validationState === undefined) {
        return theme.colors.primary.violet3;
      }
    }};
  }

  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
  }
`;

export default TextField;
