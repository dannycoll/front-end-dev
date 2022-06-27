import React from 'react';
import { BoardProvider } from './BoardContext';
import { Grid } from '../Grid';
import { tileTotalWidth, Tile } from '../Tile';
import styles from '../../../styles/2048/board.module.css';
import PropTypes from 'prop-types';

Board.propTypes = {
  tileCountPerRow: PropTypes.number,
  tiles: PropTypes.arrayOf(Tile).isRequired,
};
export const Board = ({ tiles, tileCountPerRow = 4 }) => {
  const pixelSize = 8;

  const boardMargin = 2 * pixelSize;
  const containerWidth = tileTotalWidth * tileCountPerRow;
  const boardWidth = containerWidth + boardMargin;

  const tileList = tiles.map(({ id, ...restProps }) => <Tile key={`tile-${id}`} {...restProps} zIndex={id} />);

  return (
    <div className={styles.board} style={{ width: boardWidth }}>
      <BoardProvider containerWidth={containerWidth} tileCount={tileCountPerRow}>
        <div className={styles.tileContainer}>{tileList}</div>
        <Grid />
      </BoardProvider>
    </div>
  );
};
