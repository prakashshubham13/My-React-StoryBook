import React from 'react';
import styles from './Center.modules.scss';
const Center = ({children}) => {
  return <div className='center'>
      {children}
  </div>;
};

export default Center;
