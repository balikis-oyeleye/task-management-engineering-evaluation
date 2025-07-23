import styles from "./task-item.module.css";
import { TbGripVertical } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoPencilSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import type { TaskType } from "../service/type";
import Button from "../../../components/ui/button/button";
import useModalStore from "../store/modal-store";
import useTaskStore from "../store/task-store";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { formatDate } from "../service/utils";

const TaskItem = (task: TaskType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const toggleModal = useModalStore((state) => state.toggleModal);
  const { setSelectedTask, deleteTask, updateTask } = useTaskStore(
    (state) => state
  );

  const handleEdit = () => {
    toggleModal();
    setSelectedTask?.(task);
  };

  const handleStatusChange = () => {
    const newStatus = task.status === "completed" ? "pending" : "completed";
    updateTask?.(task.id, { ...task, status: newStatus });
  };

  return (
    <div ref={setNodeRef} style={style} className={styles.taskItem}>
      <TbGripVertical
        className={styles.dragHandle}
        {...attributes}
        {...listeners}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      />

      <div className={styles.content}>
        <Button variant="text" onClick={handleStatusChange}>
          {task.status === "completed" ? (
            <IoIosCheckmarkCircle color="#90EE90" />
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
        <Button variant="text" onClick={handleEdit}>
          <IoPencilSharp />
        </Button>
        <Button variant="text" onClick={() => deleteTask?.(task.id)}>
          <MdDelete />
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
