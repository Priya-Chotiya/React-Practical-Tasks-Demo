import { useState } from "react";

let tempData = [
  {
    id: 1,
    value: "Fix an ability to display all tasks",
  },
  {
    id: 2,
    value: "Fix an ability to add new task",
  },
  {
    id: 3,
    value: "Fix an ability to toggle task",
  },
  {
    id: 4,
    value: "Fix an ability to delete task",
  },
  {
    id: 5,
    value: "Fix an ability to count completed tasks",
  },
];
const TodoList = () => {
  const [data, setData] = useState(tempData);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setData((pre) => [...pre, { id: Math.random(), value: inputValue }]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    let newArr = data.filter((e) => e.id != id);
    setData(newArr);
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        name="task"
      />
      <button type="button" onClick={handleSubmit}>
        Add Task
      </button>
      <ul>
        {data.map((e) => {
          return (
            <li key={e.id}>
              <span>{e.value}</span>
              <button onClick={() => handleDelete(e.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
