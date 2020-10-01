import styled from '@emotion/styled';
import React, { forwardRef, InputHTMLAttributes, Ref, useState } from 'react';
import { ThemeProps } from '../color';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const ControlledTextField = forwardRef(
  ({ value, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <Wrapper>
        <StyledInput ref={ref} {...rest} />
        <StatusBar />
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
      return <UnControlledTextField ref={ref} {...rest} />;
    }
    return <ControlledTextField value={value} {...rest} />;
  }
);

// TODO: Change to label
const Wrapper = styled.div`
  position: relative;
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

const StyledInput = styled.input<ThemeProps & Props>`
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
    background-color: ${({ theme, isError }) => {
      return isError ? theme.colors.primary.red3 : theme.colors.primary.green3;
    }};
  }

  &:focus + span {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear, opacity 0.1s linear;
    background-color: ${({ theme }) => {
      return theme.colors.primary.violet3;
    }};
  }
`;

export default TextField;
