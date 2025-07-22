import styles from "./styles/app.module.css";
import Header from "./components/layout/header/header";
import { useState } from "react";
import Search from "./components/ui/search/search";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      </main>
    </div>
  );
};

export default App;
