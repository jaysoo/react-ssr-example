import React from 'react';
import { PageHeading, Text } from '@react-ssr-example/ui';
import { ReactComponent as Logo } from '../assets/logo.svg';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }
`;

const StyledApp = styled.div`
  background-color: #000000;
  text-align: center;
  color: white;
  padding: 10vh;
  width: 100vw;
  min-height: 100vh;
`;

export const Index = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Logo width="500" />
      <PageHeading>Hello World!</PageHeading>
      <Text size="large">
        This is a demo app that uses React + express to do SSR.
      </Text>
    </StyledApp>
  );
};

export default Index;
