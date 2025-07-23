import { FiPlus } from "react-icons/fi";
import TaskItem from "./task-item";
import styles from "./tasks.module.css";
import { PiEmpty } from "react-icons/pi";
import Button from "../../../components/ui/button/button";
import useModalStore from "../store/modal-store";
import useTaskStore from "../store/task-store";
import { today } from "../service/utils";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface TaskProps {
  filter: string;
  search: string;
}

const Tasks = ({ filter, search }: TaskProps) => {
  const toggleModal = useModalStore((state) => state.toggleModal);
  const { tasks, reorderTasks } = useTaskStore((state) => state);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const filteredTasks = tasks.filter((task) => {
    let matchesFilter = true;

    switch (filter) {
      case "pending":
        matchesFilter = task.status === "pending";
        break;
      case "completed":
        matchesFilter = task.status === "completed";
        break;
      case "overdue":
        matchesFilter = task.status === "pending" && task.dueDate < today();
        break;
      case "all":
      default:
        matchesFilter = true;
        break;
    }

    const matchesSearch =
      task.title.toLowerCase().includes(search) ||
      task.description?.toLowerCase().includes(search);

    return matchesFilter && matchesSearch;
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = filteredTasks.findIndex((task) => task.id === active.id);
      const newIndex = filteredTasks.findIndex((task) => task.id === over.id);

      if (oldIndex === -1 || newIndex === -1) return;

      const newFilteredOrder = arrayMove(filteredTasks, oldIndex, newIndex);

      const newTaskOrder = [...tasks];

      const movedTaskIndex = newTaskOrder.findIndex(
        (task) => task.id === active.id
      );
      const [movedTask] = newTaskOrder.splice(movedTaskIndex, 1);

      const targetTaskId = newFilteredOrder[newIndex].id;
      const targetIndex = newTaskOrder.findIndex(
        (task) => task.id === targetTaskId
      );

      if (newIndex === 0) {
        newTaskOrder.unshift(movedTask);
      } else if (newIndex === newFilteredOrder.length - 1) {
        const insertIndex = targetIndex + (oldIndex > newIndex ? 0 : 1);
        newTaskOrder.splice(insertIndex, 0, movedTask);
      } else {
        newTaskOrder.splice(targetIndex, 0, movedTask);
      }

      reorderTasks(newTaskOrder);
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>Tasks ({filteredTasks.length})</h2>
        {tasks.length !== 0 && <p>Drag to reorder tasks</p>}
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className={styles.taskList}>
          <SortableContext
            items={filteredTasks.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            {filteredTasks?.map((task) => (
              <TaskItem key={task.id} {...task} />
            ))}
          </SortableContext>

          {filteredTasks?.length === 0 && (
            <div className={styles.emptyState}>
              <PiEmpty size={48} />
              <h3>No tasks found</h3>
              <p>You don't have any tasks yet. Create a new task!</p>
              <Button onClick={toggleModal}>
                <FiPlus size={16} />
                <span>New Task</span>
              </Button>
            </div>
          )}
        </div>
      </DndContext>
    </div>
  );
};

export default Tasks;
