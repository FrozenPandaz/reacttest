import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MyButtonProps {}

const StyledMyButton = styled.div`
  color: pink;
`;

export const MyButton = (props: MyButtonProps) => {
  return (
    <StyledMyButton>
      <h1>Welcome to my-button!</h1>
    </StyledMyButton>
  );
};

export default MyButton;
