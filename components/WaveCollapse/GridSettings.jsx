import styles from './../../styles/WaveCollapse.module.css';
const GridSettings = ({ setGridSize, gridSize }) => {
  const handleChange = event => {
    setGridSize(event.target.value);
  };
  return (
    <div className={styles.formContainer}>
      <form>
        <label className={styles.formLabel}>Grid Size:</label>
        <input type="number" value={gridSize} onChange={handleChange} min="2" max="100" className={styles.formField} />
      </form>
    </div>
  );
};

export default GridSettings;
