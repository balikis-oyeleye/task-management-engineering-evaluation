import styles from "./styles/app.module.css";
import Header from "./components/layout/header";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default App;
