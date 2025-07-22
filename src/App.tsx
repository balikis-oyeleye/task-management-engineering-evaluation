import styles from "./styles/app.module.css";
import Header from "./components/layout/header/header";
import { useState } from "react";
import Search from "./components/ui/search/search";
import Filters from "./components/general/filters/filters";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <div className={styles.searchAndFilters}>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          <Filters active="all" onChange={() => {}} />
        </div>
      </main>
    </div>
  );
};

export default App;
