import { useState } from "react";
import ToDoFrom from "./todoFrom/ToDoFrom";
import TodoItems from "./todoListItem/TodoItems";
import LocalTime from "./localTime/LocalTime";

function ToDoList() {
  const [todoList, setTodoList] = useState([]);

  // !form submit function
  const handleSubmitFrom = (data) => {
    if (todoList.includes(data)) return;

    // setTodoList function
    setTodoList((prevList) => [...prevList, data]);
  };

  // Todo list delete function
  const handleDelete = (value) => {
    const filteredList = todoList.filter((Listitem) => Listitem !== value);
    setTodoList(filteredList);
  };

  return (
    <section className="mx-2">
      <div className=" max-w-140 mx-auto bg-gray-500 mt-10 rounded-2xl p-0 py-5">
        <LocalTime />

        <div className="text-center">
          <ToDoFrom onToDoList={handleSubmitFrom} />
        </div>

        <div className="mt-4 text-center">
          <ul>
            {todoList.map((item, index) => {
              return (
                <TodoItems
                  key={index}
                  number={index + 1}
                  item={item}
                  handleDelete={handleDelete}
                />
              );
            })}
          </ul>

          <button
            onClick={() => setTodoList([])}
            className="sm:text-lg text-white bg-red-700 py-2 px-4 sm:px-5 font-semibold rounded-2xl hover:bg-teal-600 duration-500 cursor-pointer"
          >
            Clear All
          </button>
        </div>
      </div>
    </section>
  );
}

export default ToDoList;
