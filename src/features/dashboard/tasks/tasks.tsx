import { FiPlus } from "react-icons/fi";
import TaskItem from "./task-item";
import styles from "./tasks.module.css";
import { PiEmpty } from "react-icons/pi";
import Button from "../../../components/ui/button/button";

const Tasks = () => {
  const tasks = [
    {
      id: "unique-id",
      title: "Task title",
      description: "Task description",
      status: "pending" as "pending" | "completed" | "canceled",
      dueDate: "2025-07-25",
      createdAt: "2025-07-20T10:00:00Z",
      priority: "low" as "low" | "medium" | "high",
    },
    {
      id: "uniqua-id",
      title: "Task title",
      description: "Task description",
      status: "pending" as "pending" | "completed" | "canceled",
      dueDate: "2025-07-25",
      createdAt: "2025-07-20T10:00:00Z",
      priority: "low" as "low" | "medium" | "high",
    },
  ];

  return (
    <div>
      <div className={styles.header}>
        <h2>Tasks (2)</h2>
        {tasks.length !== 0 && <p>Drag to reorder tasks</p>}
      </div>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}

        {tasks.length === 0 && (
          <div className={styles.emptyState}>
            <PiEmpty size={48} />
            <h3>No tasks found</h3>
            <p>You don't have any tasks yet.Create a new task!</p>
            <Button>
              <FiPlus size={16} />
              <span>New New Task</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
