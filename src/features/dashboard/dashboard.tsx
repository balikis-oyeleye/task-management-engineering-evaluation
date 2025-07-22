import { useState } from "react";

import styles from "./dashboard.module.css";
import Search from "../../components/ui/search/search";

import Header from "./header/header";
import Filters from "./filters/filters";
import Tasks from "./tasks/tasks";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <div className={styles.searchAndFilters}>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          <Filters active="all" onChange={() => {}} />
        </div>
        {/* <Modal
          trigger={<Button variant="primary">Open Modal</Button>}
          title="Edit Task"
          description="Update your task information below."
        >
          <form>
            <input type="text" placeholder="Task Title" />
            <br />
            <button type="submit">Save</button>
          </form>
        </Modal> */}
        <div className={styles.tasksWrapper}>
          <Tasks />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
