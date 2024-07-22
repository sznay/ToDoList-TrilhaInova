import { CheckIcon, Pencil, X } from "lucide-react";

interface taskItenProps {
  todo: any;
  removerTodo: (id: number) => void;
  completarTask: (id: number) => void;
  editarTask: (id: number, newTitle: string, newDescription: string) => void;
}

export function TaskItem({ todo, removerTodo, completarTask, editarTask}: taskItenProps) {
  const status = todo.isCompleted;

  const bgColorClass = status ? "bg-green-200" : "bg-zinc-100";

  const handleEdit = () => {
    const newTitulo = prompt("Novo título:", todo.titulo);
    const newDescricao = prompt("Nova descrição:", todo.descricao);
    if (newTitulo !== null && newDescricao !== null) {
      editarTask(todo.id, newTitulo, newDescricao);
    }
  };

  return (
    <div
      className={`card-item-list-task flex justify-between items-center gap-1 ${bgColorClass} p-2 rounded`}
    >
      <div className="item-name flex items-center justify-between gap-2">
        <p className="flex-1 text-zinc-800 font-semibold">{todo.titulo}</p>
      </div>

      {!status && (
        <div className="flex items-center">
          <button className="mr-1" onClick={() => removerTodo(todo.id)}>
            <X className="text-red-600 font-bold size-5" />
          </button>

          <button className="mr-1" onClick={() => handleEdit()}>
            <Pencil className="text-blue-600 font-bold size-4" />
          </button>

          <button className="mr-1" onClick={() => completarTask(todo.id)}>
            <CheckIcon className="text-green-500 font-bold size-5" />
          </button>
        </div>
      )}

      {status && (
        <button className="mr-1" onClick={() => completarTask(todo.id)}>
          <CheckIcon className="text-green-500 font-bold size-5" />
        </button>
      )}
    </div>
  );
}
