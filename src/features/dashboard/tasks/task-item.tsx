import styles from "./task-item.module.css";
import { TbGripVertical } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../../ui/button/button";
import { IoPencilSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import type { TaskType } from "./type";

const TaskItem = (task: TaskType) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className={styles.taskItem}>
      <TbGripVertical className={styles.dragHandle} />

      <div className={styles.content}>
        <Button variant="text">
          {task.status === "completed" ? (
            <IoIosCheckmarkCircle />
          ) : (
            <FaRegCircle />
          )}
        </Button>

        <div className={styles.details}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <div className={styles.duration}>
            <span className={`${styles.priority} ${styles[task.priority]}`}>
              {task.priority.toUpperCase()} Priority
            </span>
            <span>Due: {formatDate(task.dueDate)}</span>
            <span>Created: {formatDate(task.createdAt)}</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Button variant="text">
          <IoPencilSharp />
        </Button>
        <Button variant="text">
          <MdDelete />
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
