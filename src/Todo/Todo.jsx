import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {
  const [list, setList] = useState([]);
  const [showComplete, setShowComplete] = useState(false);

  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: list.length + 1,
      title: title,
      description: description,
      status: list.length % 2 === 0 ? true : false
    };
    setList([...list, payload]);
  };
  console.log(list);
  return (
    <>
      <h1>List </h1>

      <TodoInput onSubmit={handleSubmit} />
      <TodoList data={list.filter((item) => !item.status)} />

      <button onClick={() => setShowComplete(!showComplete)}>Toggle</button>

      {showComplete && <TodoList data={list.filter((item) => item.status)} />}
    </>
  );
}
