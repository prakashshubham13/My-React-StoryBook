import React from 'react';
import './Input.scss';

const Input = ({size='small', ...rest}) => {
  return <input className={`input ${size} `} {...rest}/>;
};

export default Input;
