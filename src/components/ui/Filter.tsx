import React from "react";

interface filterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<filterProps> = ({ filter, setFilter }) => {
  return (
    <div className=" flex items-center gap-4 todo-filter">
      <h3>Buscar: </h3>
      <div className="flex items-center justify-around gap-3 flex-grow">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="all"
            name="filter"
            value="All"
            checked={filter === "All"}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <label htmlFor="all">Todas</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="completed"
            name="filter"
            value="Completed"
            checked={filter === "Completed"}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <label htmlFor="completed">Completas</label>
        </div>

        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="incompleted"
            name="filter"
            value="Incompleted"
            checked={filter === "Incompleted"}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <label htmlFor="incompleted">Abertas</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
