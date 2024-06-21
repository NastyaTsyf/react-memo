import { useState } from "react";
import styles from "./Tooltip.module.css";
export function ToolTipComponent({ children, text, title }) {
  const [showToolTip, setShowToolTip] = useState(false);
  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };
  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };
  return (
    <div className={styles.container} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip && (
        <div className={styles.tooltip}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
