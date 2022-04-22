import styles from '../styles/WaveCollapse.module.css';

export const tileDefs = [
  {
    color: styles.darkGreen,
    allowedBeside: [styles.lightGreen, styles.darkGreen],
  },
  {
    color: styles.lightGreen,
    allowedBeside: [styles.yellow, styles.darkGreen, styles.lightGreen],
  },
  {
    color: styles.yellow,
    allowedBeside: [styles.lightGreen, styles.lightBlue, styles.yellow],
  },
  {
    color: styles.darkBlue,
    allowedBeside: [styles.darkBlue, styles.lightBlue],
  },
  {
    color: styles.lightBlue,
    allowedBeside: [styles.darkBlue, styles.lightBlue, styles.yellow],
  },
  {
    color: styles.gray,
    allowedBeside: [styles.darkGreen, styles.darkBlue, styles.lightBlue, styles.lightGreen, styles.yellow, styles.gray],
  },
];
