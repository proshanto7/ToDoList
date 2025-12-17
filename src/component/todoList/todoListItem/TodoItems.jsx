import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function TodoItems({ item, number, handleDelete }) {
  return (
    <>
      <li
        key={number}
        className="flex justify-between items-center bg-white w-[95%] md:w-[60%]  mx-auto py-2 px-4 mb-4 rounded-xl  "
      >
        <span className="font-semibold text-lg capitalize ">
          {number}. {item}
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
    </>
  );
}

export default TodoItems;
