import { TaskList } from "./ui/TaskList"; 
import { Button } from "./ui/Button"; 
import { PlusCircle } from "lucide-react"; 
import { useEffect, useState } from "react"; 
import TaskInput from "./ui/TaskInput"; 
import Search from "./ui/Search";
import Filter from "./ui/Filter";

export function Main() {
  const [isOpenRegistrationForm, setIsOpenRegistrationForm] = useState(false);

  const [search, setSearch] = useState<string>("");

  const [filter, setFilter] = useState('All');

  function openRegistrationForm() {
    setIsOpenRegistrationForm(true);
  }

  function closeRegistrationForm() {
    setIsOpenRegistrationForm(false);
  }

  const [todos, setTodos] = useState<any[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); 

  const addTodo = (titulo: string, descricao: string) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000), 
        titulo, 
        descricao, 
        isCompleted: false, 
      },
    ];

    setTodos(newTodos); 

    closeRegistrationForm(); 
  };

  const removerTodo = (id: number) => {
    const listTodos = [...todos]; 

    const filterTaskList = listTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );

    setTodos(filterTaskList); 
  };

  const completarTask = (id: number) => {
    const listTodos = [...todos]; 

    listTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );

    setTodos(listTodos);
  };

  const editarTask = (id: number, newTitle: string, newDescription: string) => {
    const listTodos = [...todos]; 

    listTodos.map((todo) =>
      todo.id === id
        ? ((todo.titulo = newTitle), (todo.descricao = newDescription))
        : todo
    );

    setTodos(listTodos);
  };

  {
  }
  return (
    <main className="flex flex-col gap-3 justify-center items-center mb-8 md:mb-32">
      <div className="flex flex-col items-center gap-1 text-zinc-50 w-[90%] md:w-[80%] lg:w-[60%] px-2">
        <Search search={search} setSearch={setSearch} />

        <Filter filter={filter} setFilter={setFilter} />
      </div>

      {}
      <div className="w-[90%] md:w-[80%] lg:w-[60%] bg-zinc-300 p-3 rounded-md flex flex-col gap-3 items-center">
        {}
        <TaskList
          todos={todos}
          removerTodo={removerTodo}
          completarTask={completarTask}
          editarTask={editarTask}
          search={search}
          filter={filter}
        />

        {!isOpenRegistrationForm && (
          <Button
            variant="primary"
            size="padding"
            onClick={openRegistrationForm}
          >
            Nova atividade
            <PlusCircle className="size-6" />
          </Button>
        )}

        {}

        {isOpenRegistrationForm && (
          <TaskInput
            closeRegistrationForm={closeRegistrationForm}
            addTodo={addTodo}
          />
        )}
      </div>
    </main>
  );
}
