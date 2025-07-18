import React from "react";
import styles from "./Output.module.css";

export const Output = ({ output, editTodo, delet }) => {
  return (
    <div className={styles.outCon}>
      <ul className={styles.todoList}>
        {output.map((ele, index) => (
          <li key={index}>
            {ele}
            <div className={styles.actions}>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => delet(index)}>Dlete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
