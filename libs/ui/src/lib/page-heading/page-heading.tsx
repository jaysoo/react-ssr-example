import React from 'react';

import styles from './page-heading.module.css';

export interface PageHeadingProps {
  children?: React.ReactNode;
}

export const PageHeading = (props: PageHeadingProps) => {
  return (
    <div>
      <h1 className={styles.heading}>{props.children}</h1>
    </div>
  );
};

export default PageHeading;
