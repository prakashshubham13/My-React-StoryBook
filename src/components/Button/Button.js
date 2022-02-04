import React from 'react';
import styles from './Button.module.scss';

const Button = ({variant='primary', children, ...rest}) => {
  return <button className={`${styles.button} ${styles[variant]}`} {...rest}> {children} </button>;
};

export default Button;
