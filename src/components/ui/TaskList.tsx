import { useState } from "react";
import { TaskItem } from "./TaskItem";

interface taskListProps {
  todos: any[];
  removerTodo: (id: number) => void;
  completarTask: (id: number) => void;
  editarTask: (id: number, newTitle: string, newDescription: string) => void;
  search: string;
  filter: string;
}
export function TaskList({
  todos,
  removerTodo,
  completarTask,
  editarTask,
  search,
  filter,
}: taskListProps) {
  const [order, setOrder] = useState("Asc");

  return (
    <div className="w-full space-y-3">
      {todos
        .filter((todo) =>
          filter === "All"
            ? true
            : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
        )
        .filter((todo) =>
          todo.titulo.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
          if (a.isCompleted === b.isCompleted) {
            order === "Asc"
              ? a.titulo.localeCompare(b.titulo)
              : b.titulo.localeCompare(a.titulo);
          }
          return a.isCompleted ? 1 : -1;
        })
        .map((todo) => (
          <TaskItem
            todo={todo}
            key={todo.id}
            removerTodo={removerTodo}
            completarTask={completarTask}
            editarTask={editarTask}
          />
        ))}

      {/* Div divisoria */}
      <div className="w-full h-px bg-zinc-100"></div>
    </div>
  );
}
