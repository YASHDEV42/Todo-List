import React from "react";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form
      action=""
      className=" flex flex-row justify-center items-center w-screen"
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      <input
        type="input"
        placeholder="Add a task"
        className=" w-2/3 sm:w-1/3 h-12 p-4 text-lg font-bold"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className=" bg-yellow-500 sm:w-28 w-14 h-12 font-bold"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default InputFeild;
