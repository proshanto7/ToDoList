import React, { useEffect, useState } from "react";

function ToDoFrom({ onToDoList }) {
  const [inputValue, setInputValue] = useState("");

  // !input value function
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // !toUpperCase function
  const LowerCase = inputValue.toLowerCase();
  const handleSubmitFrom = (event) => {
    event.preventDefault();

    if (!LowerCase) return;

    onToDoList(LowerCase);
    setInputValue("");
  };

  // !autoFocus function
  const autoFocus = () => {
    document.querySelector("input").focus();
  };

    // !useEffect for autoFocus
  useEffect(() => {
    autoFocus();
  }, [inputValue]);
  return (
    <>
      <form onSubmit={handleSubmitFrom} className="flex justify-center gap-0 " >
        <input
          type="text"
          placeholder="Enter Your Task"
          onChange={handleInputValue}
          autoComplete="off"
          value={inputValue}
          className="outline-none px-2 py-2 sm:px-4 sm:py-3 rounded-s-full bg-white"
          onFocus={autoFocus}
        />
        <button className="bg-teal-500 font-semibold sm:font-bold cursor-pointer hover:bg-green-500 duration-500 px-2 py-1 sm:py-3 sm:px-4 rounded-e-full">
          Add Task
        </button>
      </form>
    </>
  );
}

export default ToDoFrom;
