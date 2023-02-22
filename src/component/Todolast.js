import React, { useState } from "react";

function Todolast() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, seteditIndex] = useState(null);
  // add item
  const addItem = () => {
    setItems([...items, inputData]);
    setInputData("");
  };
  //  remove all items
  const removeAll = () => {
    setItems([]);
  };
  // delete item

  const deleteItem = (id) => {
    const deleteitem = items.filter((name, idx) => {
      return id !== idx;
    });
    setItems(deleteitem);
  };
  // edit item

  const edit = (idx, item) => {
    setInputData(item);
    seteditIndex(idx);
  };
  // update edit item

  const updateItem = () => {
    const newupdateItems = [...items];
    newupdateItems[editIndex] = inputData;
    setItems(newupdateItems);
  };

  return (
    <div>
      <h1>Todo list</h1>

      <div>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
        <button onClick={updateItem}>Update</button>
      </div>
      <div>
        <button onClick={removeAll}>Remove All</button>
      </div>

      <ul>
        {items.map((value, index) => {
          return (
            <li key={index}>
              {value}
              <button onClick={() => deleteItem(index)}>delete</button>
              <button onClick={() => edit(index, value)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolast;
