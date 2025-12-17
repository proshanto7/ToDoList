import { useEffect, useState } from "react";

function LocalTime() {
  const [todoTime, setTodoTime] = useState("");
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

  return (
    <>
      <div>
        <h1 className="font-bold text-4xl mb-4 text-center">ToDo List</h1>
        <h2 className="text-center font-semibold text-lg mb-4 text-white">
          {todoTime}
        </h2>
      </div>
    </>
  );
}

export default LocalTime;
