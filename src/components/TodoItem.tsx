import { FC } from "react";

interface Todo {
  id: string;
  text: string;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({ key, todo, onDelete }) => {
  return (
    <li key={key}>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
