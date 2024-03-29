import React, { useState, FC } from "react";
import TodoItem from "./components/TodoItem";

interface Todo {
  id: number;
  text: string;
}

const Todo: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      const newTodo: Todo = { id: todos.length + 1, text: todo };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo App</h2>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e: any) => setTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
