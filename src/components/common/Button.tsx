import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
  const className = `${styles.button} ${styles[variant]}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
