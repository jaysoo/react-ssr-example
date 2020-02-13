import React from 'react';
import { PageHeading, Text } from '@react-ssr-example/ui';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { ReactComponent as Logo } from './logo.svg';

const Container = styled.div`
  background-color: #000000;
  text-align: center;
  color: white;
  padding: 10vh;
  width: 100vw;
  min-height: 100vh;
`;

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Hello World!</title>
      </Helmet>
      <Container>
        <Logo width="500" />
        <PageHeading>Hello World!</PageHeading>
        <Text size="large">
          This is a demo app that uses React + express to do SSR.
        </Text>
      </Container>
    </>
  );
};

export default App;
