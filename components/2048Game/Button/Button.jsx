import React from 'react';
import styles from '../../../styles/2048/Button.module.css';
export const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
