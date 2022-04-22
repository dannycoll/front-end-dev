import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMessage, faUser, faCodeBranch, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [indictatorPosition, setIndicatorPosition] = useState(2);

  const handleClick = e => {
    let anchor;
    if (e.target.matches('a')) {
      anchor = e.target;
    } else {
      anchor = e.target.closest('a');
    }
    if (anchor != null) {
      const allAnchors = [...document.querySelectorAll('a')];
      const index = allAnchors.indexOf(anchor);
      setIndicatorPosition(index);
    }
  };
  return (
    <nav className={styles.navbarContainer} onClick={e => handleClick(e)}>
      <ul className={styles.list}>
        <div style={{ '--position': indictatorPosition }} data-indicator className={styles.indicator}>
          <div className={styles.corners}></div>
        </div>
        <li>
          <a href="#" onClick={e => handleClick(e)} className={indictatorPosition === 0 ? styles.active : ''}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={styles.text}>About Me</div>
          </a>
        </li>
        <li>
          <a href="#" onClick={e => handleClick(e)} className={indictatorPosition === 1 ? styles.active : ''}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faMessage} />
            </div>
            <div className={styles.text}>Contact</div>
          </a>
        </li>
        <li>
          <a href="#" className={indictatorPosition === 2 ? styles.active : ''} onClick={e => handleClick(e)}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className={styles.text}>Home</div>
          </a>
        </li>
        <li>
          <a href="#" onClick={e => handleClick(e)} className={indictatorPosition === 3 ? styles.active : ''}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUserGraduate} />
            </div>
            <div className={styles.text}>Experience</div>
          </a>
        </li>
        <li>
          <a href="#" onClick={e => handleClick(e)} className={indictatorPosition === 4 ? styles.active : ''}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCodeBranch} />
            </div>
            <div className={styles.text} onClick={e => handleClick(e)}>
              Projects
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
