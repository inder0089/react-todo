import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
      alert("please enter item");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });

    setItems(updateditems);
  };
  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <h1>Add a list</h1>
      <input
        type="text"
        placeholder="add items..."
        id=""
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button className="btn" onClick={addItem}>
        Add Item
      </button>
      <div className="showitem">
        <ul>
          {items.map((elem, ind) => {
            return (
              <li key={ind}>
                {elem}
                <button className="btn" onClick={() => deleteItem(ind)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="remove">
        <button className="btn" onClick={removeAll}>
          Remove All
        </button>
      </div>
    </>
  );
};

export default Todo;
