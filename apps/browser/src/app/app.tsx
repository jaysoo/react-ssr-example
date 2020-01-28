import React from 'react';
import { PageHeading, Text } from '@react-ssr-example/ui';
import { Helmet } from 'react-helmet-async';

import styles from './app.module.css';
import { ReactComponent as Logo } from './logo.svg';

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Hello World!</title>
      </Helmet>
      <div className={styles.app}>
        <Logo width="500" />
        <PageHeading>Hello World!</PageHeading>
        <Text size="large">
          This is a demo app that uses React + express to do SSR.
        </Text>
      </div>
    </>
  );
};

export default App;
