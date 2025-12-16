import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitFrom(e);
    }
  };

  const upperCase = inputValue.toLowerCase();

  const autoFocus = () => {
    document.querySelector("input").focus();
  };

  useEffect(() => {
    autoFocus();
  }, [inputValue]);

  const handleSubmitFrom = (event) => {
    event.preventDefault();
    if (!upperCase) return;
    if (todoList.includes(upperCase)) {
      setInputValue("");
      return;
    }

    setTodoList((prevList) => [...prevList, upperCase]);
    setInputValue("");
  };

  return (
    <section className="mx-2">
      <div className=" max-w-140 mx-auto bg-gray-500 mt-10 rounded-2xl p-5">
        <h1 className="font-bold text-4xl mb-4 text-center">ToDo List</h1>

        <div className="text-center">
          <form onSubmit={handleSubmitFrom}>
            <input
              type="text"
              placeholder="Enter Your Task"
              onChange={handleInputValue}
              autoComplete="off"
              value={inputValue}
              className="outline-none px-4 py-3 rounded-s-full bg-white"
              onFocus={autoFocus}
              onKeyDown={handleKeyDown}
            />
            <button className="bg-teal-500 font-bold cursor-pointer hover:bg-green-500 duration-500 py-3 px-4 rounded-e-full">
              Add Task
            </button>
          </form>
        </div>

        <div className="mt-4">
          <ul>
            {todoList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white w-[95%] md:w-[60%]  mx-auto py-2 px-4 mb-4 rounded-xl  "
                >
                  <span className="font-semibold text-lg capitalize ">
                    {index + 1}. {item}
                  </span>

                  <div className="flex gap-4">
                    <button>
                      <FaCheckDouble className="text-[16px] hover:text-green-600 cursor-pointer duration-500 " />
                    </button>
                    <button>
                      <MdDeleteForever className="text-2xl hover:text-red-600 cursor-pointer duration-500 " />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ToDoList;
