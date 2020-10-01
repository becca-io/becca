import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';
import { ThemeProps } from '../color';

type Props = HTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<ThemeProps>`
  border-radius: 8px;
  border: 1px solid;
  padding: 10px 20px;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.primary.blue1};
`;

export const TextField = ({ defaultValue, ...rest }: Props) => {
  return <StyledInput defaultValue={defaultValue} {...rest} />;
};

export default TextField;
