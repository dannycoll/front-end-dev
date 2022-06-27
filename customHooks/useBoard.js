import { useContext } from 'react';
import { BoardContext } from '../components/2048Game/Board/BoardContext';

export const useBoard = () => {
  const { containerWidth, tileCount } = useContext(BoardContext);

  return [containerWidth, tileCount];
};
