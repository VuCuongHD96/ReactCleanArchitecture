import type { TodoItem } from "@/Domain/TodoItem";

interface TodoListViewProps {
  todoList: TodoItem[];
}

export default function TodoListView({ todoList }: TodoListViewProps) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
}
