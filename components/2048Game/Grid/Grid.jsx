import styles from '../../../styles/2048/grid.module.css';
import React from 'react';
import { useBoard } from '../Board';

export const Grid = () => {
  const [, tileCount] = useBoard();

  const renderGrid = () => {
    const length = tileCount * tileCount;
    const cells = [];

    for (let index = 0; index < length; index += 1) {
      cells.push(<div key={`${index}`} className={styles.gridCell} />);
    }

    return cells;
  };

  return <div className={styles.grid}>{renderGrid()}</div>;
};
