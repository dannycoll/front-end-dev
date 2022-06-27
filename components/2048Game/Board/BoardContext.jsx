import React from 'react';
import { tileCount as defaultTileCount } from './index';

export const BoardContext = React.createContext({
  containerWidth: 0,
  tileCount: defaultTileCount,
});

export const BoardProvider = ({ children, containerWidth = 0, tileCount = defaultTileCount }) => {
  return <BoardContext.Provider value={{ containerWidth, tileCount }}>{children}</BoardContext.Provider>;
};
