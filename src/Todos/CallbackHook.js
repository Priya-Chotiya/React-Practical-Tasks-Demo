import { useCallback, useState } from "react";
import Todo from "./Todo";

const CallbackHook = () => {
    const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, `new Entry`]);
  // };
  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default CallbackHook;
