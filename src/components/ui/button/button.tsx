import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import styles from "./button.module.css";
import { FaSpinner } from "react-icons/fa";
import clsx from "clsx";

type Variant = "primary" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      isLoading = false,
      fullWidth = false,
      disabled,
      ...rest
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const isDisabled = isLoading || disabled;

    return (
      <button
        ref={ref}
        className={clsx(
          styles.button,
          styles[variant],
          fullWidth && styles.fullWidth,
          isDisabled && styles.disabled
        )}
        disabled={isDisabled}
        {...rest}
      >
        {isLoading ? (
          <FaSpinner className={clsx(styles.icon, styles.spinner)} />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
