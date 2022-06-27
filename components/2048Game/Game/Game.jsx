import React, { useEffect } from 'react';
import { useThrottledCallback } from 'use-debounce';

import { useGame } from '../../../customHooks/useGame';
import { Board, animationDuration, tileCount } from '../Board/index';

export const Game = () => {
  const [tiles, moveLeft, moveRight, moveUp, moveDown] = useGame();

  const handleKeyDown = e => {
    e.preventDefault();

    switch (e.code) {
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowRight':
        moveRight();
        break;
      case 'ArrowUp':
        moveUp();
        break;
      case 'ArrowDown':
        moveDown();
        break;
    }
  };

  const throttledHandleKeyDown = useThrottledCallback(handleKeyDown, animationDuration, {
    leading: true,
    trailing: false,
  });

  useEffect(() => {
    window.addEventListener('keydown', throttledHandleKeyDown);

    return () => {
      window.removeEventListener('keydown', throttledHandleKeyDown);
    };
  }, [throttledHandleKeyDown]);

  return <Board tiles={tiles} tileCountPerRow={tileCount} />;
};
