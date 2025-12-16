import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoTime, setTodoTime] = useState("");
  // !input value function
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // !toUpperCase function
  const upperCase = inputValue.toLowerCase();
  // !autoFocus function
  const autoFocus = () => {
    document.querySelector("input").focus();
  };
  // !useEffect for autoFocus
  useEffect(() => {
    autoFocus();
  }, [inputValue]);

  // !form submit function
  const handleSubmitFrom = (event) => {
    event.preventDefault();
    if (!upperCase) return;
    if (todoList.includes(upperCase)) {
      setInputValue("");
      return;
    }
    // setTodoList function
    setTodoList((prevList) => [...prevList, upperCase]);
    setInputValue("");
  };


  //ToDo List time and date

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date();
      const localDate = current.toLocaleDateString();
      const localTime = current.toLocaleTimeString();

      setTodoTime(`${localDate} - ${localTime} `);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // Todo list delete function
  const handleDelete = (value) => {
    const filteredList = todoList.filter((item) => item !== value);
    setTodoList(filteredList);
  };

  return (
    <section className="mx-2">
      <div className=" max-w-140 mx-auto bg-gray-500 mt-10 rounded-2xl p-5">
        <h1 className="font-bold text-4xl mb-4 text-center">ToDo List</h1>

        <div>
          <h2 className="text-center font-semibold text-lg mb-4 text-white">
            {todoTime}
          </h2>
        </div>

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
              
            />
            <button className="bg-teal-500 font-bold cursor-pointer hover:bg-green-500 duration-500 py-3 px-4 rounded-e-full">
              Add Task
            </button>
          </form>
        </div>

        <div className="mt-4 text-center">
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
                    <button onClick={() => handleDelete(item)}>
                      <MdDeleteForever className="text-2xl hover:text-red-600 cursor-pointer duration-500 " />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setTodoList([])}
            className="text-lg text-white bg-red-700 py-2 px-5 font-semibold rounded-2xl hover:bg-teal-600 duration-500 cursor-pointer"
          >
            Clear All
          </button>
        </div>
      </div>
    </section>
  );
}

export default ToDoList;
