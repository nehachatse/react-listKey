import { useState } from "react";

export default function TodoInput({ onSubmit }) {
  const [state, setState] = useState({
    title: "",
    description: ""
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onAdd = () => {
    console.log("==", state);
    onSubmit(state);
  };
  return (
    <div>
      <div style={{ padding: 8 }}>
        <input
          placeholder="title"
          name="title"
          value={state.title}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          placeholder="description"
          name="description"
          value={state.description}
          onChange={handleInputChange}
        />
      </div>

      <button onClick={onAdd}> Add</button>
    </div>
  );
}
