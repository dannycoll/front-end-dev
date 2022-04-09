import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faGear,
  faHouse,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [indictatorPosition, setIndicatorPosition] = useState(0);

  const handleClick = (e) => {
    let anchor;
    if (e.target.matches("a")) {
      anchor = e.target;
    } else {
      anchor = e.target.closest("a");
    }
    if (anchor != null) {
      const allAnchors = [...document.querySelectorAll("a")];
      const index = allAnchors.indexOf(anchor);
      setIndicatorPosition(index);
    }
  };
  return (
    <nav className={styles.navbarContainer} onClick={(e) => handleClick(e)}>
      <ul className={styles.list}>
        <div
          style={{ "--position": indictatorPosition }}
          data-indicator
          className={styles.indicator}
        >
          <div className={styles.corners}></div>
        </div>
        <li>
          <a
            href="#"
            className={indictatorPosition === 0 ? styles.active : ""}
            onClick={(e) => handleClick(e)}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className={styles.text}>Home</div>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e)}
            className={indictatorPosition === 1 ? styles.active : ""}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={styles.text}>Account</div>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e)}
            className={indictatorPosition === 2 ? styles.active : ""}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faMessage} />
            </div>
            <div className={styles.text}>Messages</div>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e)}
            className={indictatorPosition === 3 ? styles.active : ""}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCamera} />
            </div>
            <div className={styles.text}>Photos</div>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e)}
            className={indictatorPosition === 4 ? styles.active : ""}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faGear} />
            </div>
            <div className={styles.text} onClick={(e) => handleClick(e)}>
              Settings
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
