import React from 'react';
import styles from '../../styles/WaveCollapse.module.css';
import PropTypes from 'prop-types';

GridSquare.propTypes = {
  color: {
    color: PropTypes.string,
  },
};
const GridSquare = props => {
  const classes = `${styles.cell} ${props.color?.color ?? 'gray'}`;
  return <div className={classes} />;
};

export default GridSquare;
