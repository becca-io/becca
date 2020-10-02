import styled from '@emotion/styled';
import React, { forwardRef, Ref, RefObject, useState } from 'react';
import { ThemeProps } from '..';
import { useBoolean } from '../hooks/useBoolean';
import { TextFieldBaseInterface } from '../types/textFieldBase';

interface TextFieldBaseProps extends TextFieldBaseInterface {
  multiLine?: boolean;
}

const ControlledTextFieldBase = forwardRef(
  (
    { multiLine, ...rest }: Omit<TextFieldBaseProps, 'label'>,
    ref: RefObject<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const [focus, setFocus, _, setBlur] = useBoolean(false);

    return (
      <Wrapper>
        <StyledTextField
          {...rest}
          ref={
            multiLine
              ? (ref as Ref<HTMLTextAreaElement>)
              : (ref as Ref<HTMLInputElement>)
          }
          as={multiLine ? 'textarea' : 'input'}
          isFocused={focus}
          onFocus={setFocus}
          onBlur={setBlur}
          required
        />
        <StatusBar />
      </Wrapper>
    );
  }
);

const UnControlledTextFieldBase = forwardRef(
  (
    props: TextFieldBaseProps,
    ref: Ref<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const [value, setValue] = useState('');

    return (
      <ControlledTextFieldBase
        {...props}
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
);

export const TextFieldBase = forwardRef(
  (
    { value, ...rest }: TextFieldBaseProps,
    ref: Ref<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (value == null) {
      return <UnControlledTextFieldBase {...rest} ref={ref} />;
    }
    return <ControlledTextFieldBase {...rest} value={value} />;
  }
);

const Wrapper = styled.div`
  position: relative;
`;

const StatusBar = styled.span<ThemeProps>`
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

const Label = styled.label<ThemeProps>`
  pointer-events: none;
  font-size: 12px;
  position: absolute;
  left: 15px;
  top: 14px;
  color: ${({ theme }) => theme.colors.primary.gray6};
  transition: 0.2s ease transform;
`;

const StyledTextField = styled.input<
  ThemeProps & {
    ref: Ref<HTMLInputElement | HTMLTextAreaElement>;
  } & TextFieldBaseInterface & { isFocused: boolean } & {
      as?: React.ElementType;
    }
>`
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
    transform: translate3D(0, -35px, 0);
  }
`;
