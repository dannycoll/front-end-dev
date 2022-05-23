import Home from "../HomeContent/Home";
import styles from "../../styles/index.module.css";

const MainContent = (props) => {
  const { show } = props;
  switch (show) {
    case "home":
      return (
        <div className={styles.MainContent}>
          <Home />
        </div>
      );
    case "contact":
      return <>Contact Me</>;
    case "experience":
      return <>Experience</>;
    case "projects":
      return <>Projects</>;
    case "about":
      return <>About</>;
    default:
      return <>Home</>;
  }
};

export default MainContent;
