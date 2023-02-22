import React, { useState } from "react";

function Todorahul() {
  const [inputData, setinputdata] = useState("");
  const [item, setItems] = useState([]);

  const addItem = () => {
    setItems([...item, inputData]);

    console.log(item);
  };
  return (
    <div>
      <h1>todo list</h1>

      <div>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setinputdata(e.target.value)}
        />
        <button onClick={addItem}>add</button>
        <button>update</button>
      </div>
      <div>
        <button>remove all</button>
      </div>

      <ul>
        {item.map((value, index) => {
          return (
            <li>
              {value}
              <button>delete</button>
              <button>edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todorahul;
