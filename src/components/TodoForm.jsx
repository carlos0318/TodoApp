import { useState, useEffect, useRef } from "react";

const TodoForm = ({onSubmit}) => {
  const [input, setInput] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('')
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        name="text"
        id=""
        value={input}
        placeholder="Add a todo"
        onChange={handleChange}
        ref={inputRef}
      />
      <button onClick={handleSubmit} className="todo-button">Add todo</button>
    </form>
  );
};

export default TodoForm;
