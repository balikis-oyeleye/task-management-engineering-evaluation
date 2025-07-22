import { FiPlus } from "react-icons/fi";
import TaskItem from "./task-item";
import styles from "./tasks.module.css";
import { PiEmpty } from "react-icons/pi";
import Button from "../../../components/ui/button/button";
import useModalStore from "../store/modal-store";
import useTaskStore from "../store/task-store";
import { today } from "../service/utils";

interface TaskProps {
  filter: string;
}

const Tasks = ({ filter }: TaskProps) => {
  const toggleModal = useModalStore((state) => state.toggleModal);
  const tasks = useTaskStore((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "pending") return task.status === "pending";
    if (filter === "completed") return task.status === "completed";
    if (filter === "overdue") {
      return task.status === "pending" && task.dueDate < today();
    }
    return true;
  });

  return (
    <div>
      <div className={styles.header}>
        <h2>Tasks ({tasks.length})</h2>
        {tasks.length !== 0 && <p>Drag to reorder tasks</p>}
      </div>
      <div className={styles.taskList}>
        {filteredTasks?.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}

        {filteredTasks?.length === 0 && (
          <div className={styles.emptyState}>
            <PiEmpty size={48} />
            <h3>No tasks found</h3>
            <p>You don't have any tasks yet.Create a new task!</p>
            <Button onClick={toggleModal}>
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
