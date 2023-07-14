import React, { useState } from "react";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList";
import { Todo } from "./components/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className=" bg-slate-700 h-screen w-screen flex items-center justify-center flex-col">
      <h1 className=" text-yellow-400 font-bold text-4xl text-center">
        Basic Todo List
      </h1>
      <br />
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <br />
      {todos.length === 0 ? (
        <h1 className="font-bold text-yellow-300 uppercase text-lg">
          There are no tasks!
        </h1>
      ) : (
        <TodoList todos={todos} setTodos={setTodos} />
      )}
    </div>
  );
};

export default App;
