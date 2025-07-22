import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";
import styles from "./modal.module.css";
import type { ReactNode } from "react";

type ModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactNode;
  title?: string;
  children: ReactNode;
};

const Modal = ({
  open,
  onOpenChange,
  trigger,
  title,
  children,
}: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          {title && (
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          )}

          <div className={styles.body}>{children}</div>

          <Dialog.Close asChild>
            <button className={styles.iconClose} aria-label="Close">
              <IoClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
