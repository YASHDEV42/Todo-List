import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className="w-screen flex flex-col items-center"
    >
      <div className=" flex flex-row items-center justify-between bg-yellow-500 w-2/3 md:w-1/2 sm:w-1/3 h-14 px-6 py-6 my-4 font-bold text-lg">
        {edit ? (
          <>
            <input
              className=" w-1/2"
              ref={inputRef}
              type="input"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            />
            <button onSubmit={(e) => handleEdit(e, todo.id)}>Save</button>
          </>
        ) : todo.isDone ? (
          <>
            <s>{todo.todo}</s>
            <div className="flex flex-row gap-2">
              <AiFillDelete
                onClick={() => handleDelete(todo.id)}
                className=""
              />
              <AiFillEdit
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  } else {
                    setEdit(!edit);
                  }
                }}
              />
              <MdDone onClick={() => handleDone(todo.id)} />
            </div>
          </>
        ) : (
          <>
            <h3>{todo.todo}</h3>
            <div className="flex flex-row gap-2">
              <AiFillDelete
                onClick={() => handleDelete(todo.id)}
                className=""
              />
              <AiFillEdit
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  } else {
                    setEdit(!edit);
                  }
                }}
              />
              <MdDone onClick={() => handleDone(todo.id)} />
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default SingleTodo;
