import React, { useState, useEffect } from 'react';
import GridSquare from './Gridsquare';
import styles from '../../styles/WaveCollapse.module.css';
import { tileDefs } from '../../utils/waveCollapse';
import GridSettings from './GridSettings';

const GridBoard = props => {
  const defaultColor = tileDefs.find(x => x.color == styles.gray);
  const [grid, setGrid] = useState([<GridSquare key={`0`} color={defaultColor} />]);
  const [defaultGrid, setDefaultGrid] = useState([]);
  const [ticking, setTicking] = useState(true);
  const [count, setCount] = useState(0);
  const [gridSize, setGridSize] = useState(20);
  const [tileSize, setTileSize] = useState(20);
  const colourTile = async () => {
    const tile = grid.filter(x => x.props.color == defaultColor)[0];
    if (!tile) {
      setGrid([...defaultGrid]);
      return;
    }
    const indexOfTile = grid.indexOf(tile);
    let allowedColoursSide =
      indexOfTile != 0 ? grid[indexOfTile - 1].props.color.allowedBeside : tileDefs.map(x => x.color);
    if (indexOfTile % gridSize == 0 && indexOfTile > 0) allowedColoursSide = [];
    let allowedColoursTop = [];
    if (indexOfTile >= gridSize) {
      allowedColoursTop = grid[indexOfTile - gridSize].props.color.allowedBeside;
    }
    let allowedColours =
      allowedColoursTop.length > 0 ? allowedColoursTop.filter(x => allowedColoursSide.includes(x)) : allowedColoursSide;
    if (indexOfTile % gridSize == 0 && indexOfTile > 0) allowedColours = allowedColoursTop;
    let idx = Math.floor(Math.random() * allowedColours.length);
    let tileColor = tileDefs.find(x => x.color == allowedColours[idx]);
    const tiles = [...grid];
    tiles[tiles.indexOf(tile)] = <GridSquare key={`${tiles.indexOf(tile)}`} color={tileColor} />;
    await setGrid([...tiles]);
  };
  useEffect(() => {
    const timer = setTimeout(async () => ticking && (await colourTile()), 200);
    return () => clearTimeout(timer);
  });
  useEffect(async () => {
    let tiles = [];
    for (let col = 0; col < gridSize * gridSize; col++) {
      tiles.push(<GridSquare key={`${col}`} color={defaultColor} />);
    }
    setGrid([...tiles]);
    setDefaultGrid([...tiles]);
    setTileSize(483 / gridSize);
  }, [gridSize]);
  return (
    <>
      <GridSettings setGridSize={setGridSize} gridSize={gridSize} />
      <div className={styles.container}>
        <div className={styles.grid} style={{ ['--cols']: gridSize, ['--tile-size']: `${tileSize}px` }}>
          {grid}
        </div>
      </div>
    </>
  );
};
export default GridBoard;
