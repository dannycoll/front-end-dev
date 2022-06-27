import styles from '../../../styles/2048/tile.module.css';
import React, { useEffect, useState } from 'react';
import invariant from 'tiny-invariant';
import { usePreviousProps } from '../../../customHooks/usePreviousProps';
import { useBoard } from '../Board';
import PropTypes from 'prop-types';

Tile.propTypes = {
  value: PropTypes.number.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string,
  zIndex: PropTypes.number,
};
export const Tile = ({ value, position, zIndex }) => {
  const [containerWidth, tileCount] = useBoard();
  const [scale, setScale] = useState(1);

  const previousValue = usePreviousProps(value);

  const withinBoardBoundaries = position[0] < tileCount && position[1] < tileCount;
  invariant(withinBoardBoundaries, 'Tile out of bound');

  const isNew = previousValue === undefined;
  const hasChanged = previousValue !== value;
  const shallHighlight = isNew || hasChanged;

  useEffect(() => {
    if (shallHighlight) {
      setScale(1.1);
      setTimeout(() => setScale(1), 100);
    }
  }, [shallHighlight, scale]);

  const positionToPixels = position => {
    return (position / tileCount) * containerWidth;
  };

  const style = {
    top: positionToPixels(position[1]),
    left: positionToPixels(position[0]),
    transform: `scale(${scale})`,
    zIndex,
  };

  return (
    <div className={`${styles.tile} ${styles[`tile-${value}`]}`} style={style}>
      {value}
    </div>
  );
};
