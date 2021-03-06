import React from 'react';
import Home from '../HomeContent/Home';
import styles from '../../styles/index.module.css';
import Experience from '../ExperienceContent/Experience';
import PropTypes from 'prop-types';

MainContent.propTypes = {
  show: PropTypes.string.isRequired,
};

const MainContent = props => {
  const { show } = props;
  switch (show) {
    case 'home':
      return (
        <div className={styles.MainContent}>
          <Home />
        </div>
      );
    case 'contact':
      return <>Contact Me</>;
    case 'experience':
      return (
        <div className={styles.MainContent}>
          <Experience />
        </div>
      );
    case 'projects':
      return <>Projects</>;
    case 'about':
      return <>About</>;
    default:
      return <>Home</>;
  }
};

export default MainContent;
