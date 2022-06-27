import React, { useState } from 'react';
import { Button } from '../components/2048Game/Button/Button';
import { Game } from '../components/2048Game/Game/Game';

import styles from '../styles/index.module.css';

export default function Game2048() {
  const [date, setDate] = useState(new Date());

  const handleRestart = () => {
    setDate(new Date());
  };

  return (
    <div className={styles.MainContent}>
      <div className={styles.centered}>
        <Game key={date.toISOString()} />
      </div>
      <div>
        <Button onClick={handleRestart}>Restart</Button>
      </div>
    </div>
  );
}
