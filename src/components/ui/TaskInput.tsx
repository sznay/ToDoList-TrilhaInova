import { Save, X } from "lucide-react"; 
import { Button } from "./Button";  
import { FormEvent, useState } from "react"; 

interface taskInputProps {
  closeRegistrationForm: () => void; 
  addTodo: (titulo: string, descricao: string) => void; 
}

const TaskInput = ({ closeRegistrationForm, addTodo }: taskInputProps) => {
  const [tituloTask, setTituloTask] = useState(""); 
  const [descricaoTask, setDescricaoTask] = useState(""); 

  const [isErroMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!tituloTask || !descricaoTask){
      setErrorMessage("Por favor, preencha todos os campos."); 
      return; 
    }  

    addTodo(tituloTask, descricaoTask);

    setTituloTask(""); 
    setDescricaoTask("");
    setErrorMessage("");
  };

  return (
    <form className="w-full space-y-3" onSubmit={handleSubmit}>
      <h3 className="text-center font-medium text-zinc-800">Inserir nova atividade</h3>
      <div className="space-y-2">
        <input
        placeholder="Título da tarefa"
          type="text"
          value={tituloTask}
          className="text-zinc-600 bg-zinc-100 text-lg outline-none w-full rounded-sm p-2 resize-y"
          onChange={(e) => setTituloTask(e.target.value)} 
        />
        <textarea
          value={descricaoTask}
          onChange={(e) => {
            setDescricaoTask(e.target.value)
          }} 
          name="taskDescricao"
          placeholder="Descreva a tarefa"
          className="text-zinc-600 bg-zinc-100 text-lg outline-none w-full rounded-sm p-2 resize-y"
        />
      </div>

      {isErroMessage && (
        <div className="text-red-600">
          {isErroMessage}
        </div>
      )}

      <div className="btns flex justify-between gap-2">
        <Button variant="secondary" onClick={closeRegistrationForm}>
          <X />
          Fechar
        </Button>

        <Button type="submit" variant="primary">
          <Save />
          Salvar
        </Button>
      </div>
    </form>
  );
};

export default TaskInput; 
