import React from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin: 1rem 0;
`;

export interface PageHeadingProps {
  children?: React.ReactNode;
}

export const PageHeading = (props: PageHeadingProps) => {
  return <Container>{props.children}</Container>;
};

export default PageHeading;
