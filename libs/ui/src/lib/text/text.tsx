import React from 'react';
import cx from 'classnames';

import styles from './text.module.css';

export interface TextProps {
  size?: 'large' | 'medium' | 'small';
  children?: React.ReactNode;
}

export const Text = (props: TextProps) => {
  const size = props.size || 'medium';
  return <p className={cx(styles.text, styles[size])}>{props.children}</p>;
};

export default Text;
