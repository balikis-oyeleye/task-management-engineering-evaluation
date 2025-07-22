import { useState } from "react";

import styles from "./dashboard.module.css";
import Search from "../../components/ui/search/search";

import Header from "./header/header";
import Filters from "./filters/filters";
import Tasks from "./tasks/tasks";
import TaskModal from "./task-modal";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <div className={styles.searchAndFilters}>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          <Filters active={filter} onChange={(value) => setFilter(value)} />
        </div>

        <div className={styles.tasksWrapper}>
          <Tasks filter={filter} search={search} />
        </div>
      </main>
      <TaskModal />
    </div>
  );
};

export default Dashboard;
