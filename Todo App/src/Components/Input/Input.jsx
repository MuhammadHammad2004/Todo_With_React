import React from "react";
import styles from "./Input.module.css"
export const Input = ({ change, addTodo, value, deletAll }) => {
  return (
    <>
      <div className={styles.appContainer}>
        <h1>Todo App</h1>
        <br />
        <br />
        <div className={styles.inputContainer}>
          <label htmlFor="todo">Your Todo</label>
          <br />
          <input
            type="text"
            placeholder="Make Todo"
            onChange={change}
            value={value}
          />
          <br />
          <button onClick={addTodo}>Add Todo</button>
          <button onClick={deletAll}>Delet All Todo</button>
        </div>
      </div>
    </>
  );
};
