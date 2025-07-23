import Button from "../../components/ui/button/button";
import Modal from "../../components/ui/modal/modal";
import Select from "../../components/ui/select/select";
import useModalStore from "./store/modal-store";
import styles from "./task-modal.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskDataSchema, type TaskDataType } from "./service/schema";
import { v4 as uuidv4 } from "uuid";
import useTaskStore from "./store/task-store";
import { useEffect } from "react";
import { today } from "./service/utils";
import { toast } from "sonner";

const TaskModal = () => {
  const { isOpen, toggleModal } = useModalStore((state) => state);
  const { addTask, selectedTask, updateTask, clearSelectedTask } = useTaskStore(
    (state) => state
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
    reset,
  } = useForm<TaskDataType>({
    resolver: zodResolver(taskDataSchema),
    defaultValues: {
      status: "pending",
    },
  });

  const priority = watch("priority");

  const onSubmit = handleSubmit((data) => {
    if (selectedTask) {
      updateTask(selectedTask.id, {
        ...data,
        id: selectedTask.id,
        createdAt: selectedTask.createdAt,
      });
      toast.success("Task updated successfully");
    } else {
      addTask({
        ...data,
        createdAt: new Date().toISOString(),
        id: uuidv4(),
      });

      toast.success("Task Created successfully");
    }

    clearSelectedTask?.();
    toggleModal();
    reset();
  });

  const onModalClose = () => {
    clearSelectedTask?.();
    toggleModal();
    reset();
  };

  useEffect(() => {
    if (selectedTask) {
      reset({
        title: selectedTask.title,
        description: selectedTask.description || "",
        dueDate: selectedTask.dueDate,
        priority: selectedTask.priority,
        status: selectedTask.status,
      });
    } else {
      reset({
        title: "",
        description: "",
        dueDate: today(),
        status: "pending",
      });
    }
  }, [selectedTask, reset]);

  return (
    <Modal
      open={isOpen}
      onOpenChange={onModalClose}
      title={selectedTask ? "Edit Task" : "Create Task"}
    >
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="title">
          Title*
          <input type="text" id="title" {...register("title")} />
        </label>
        {errors.title && <p className="error-text">{errors.title.message}</p>}
        <label htmlFor="description">
          Description:
          <textarea id="description" {...register("description")} />
        </label>
        <div className={styles.date}>
          <label htmlFor="dueDate">
            Due Date*
            <input
              type="date"
              id="dueDate"
              min={today()}
              {...register("dueDate")}
            />
          </label>
          <Select
            label="Priority"
            options={[
              { label: "High", value: "high" },
              { label: "Medium", value: "medium" },
              { label: "Low", value: "low" },
            ]}
            value={priority}
            placeholder="Select Priority"
            onChange={(value) => {
              if (!value) {
                setError("priority", {
                  message: "Priority is required",
                });
              }
              setValue("priority", value, {
                shouldValidate: true,
              });
            }}
          />
        </div>
        {errors.dueDate && (
          <p className="error-text">{errors.dueDate.message}</p>
        )}
        {errors.priority && (
          <p className="error-text">{errors.priority.message}</p>
        )}
        <Button type="submit" fullWidth>
          {selectedTask ? "Update Task" : "Create Task"}
        </Button>
      </form>
    </Modal>
  );
};

export default TaskModal;
