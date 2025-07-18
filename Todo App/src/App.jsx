import { useState } from "react";
import { Input } from "./Components/Input/Input";
import { Output } from "./Components/Output/Output";

function App() {
  const [todo, setTodo] = useState("");
  const [updatto, setUp] = useState([]);

  const addHandler = () => {
    setUp([...updatto, todo]);
    setTodo("");
  };

  const deletHandler = () => {
    setUp([]);
  };

  const editHandler = (index) => {
    const update = prompt("Edit Todo");
    const updatedTodo = [...updatto];

    updatedTodo[index] = update;
    setTodo(updatedTodo);
  };

  const deletHandlerTodo = (index) => {
    const updatedTodos = [
      ...updatto.slice(0, index),
      ...updatto.slice(index + 1),
    ];
    setUp(updatedTodos);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          gap: "50px",
        }}
      >
        <Input
          change={(e) => {
            setTodo(e.target.value);
          }}
          addTodo={addHandler}
          deletAll={deletHandler}
          value={todo}
        />
        <Output
          output={updatto}
          editTodo={editHandler}
          delet={deletHandlerTodo}
        />
      </div>
    </>
  );
}

export default App;
