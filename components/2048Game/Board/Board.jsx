import React from 'react';
import { BoardProvider } from './BoardContext';
import { boardMargin, tileCount as defaultTileCount } from './models';
import { Grid } from '../Grid';
import { tileTotalWidth, Tile } from '../Tile';
import styles from '../../../styles/2048/Board.module.css';
export const Board = ({ tiles, tileCountPerRow = defaultTileCount }) => {
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