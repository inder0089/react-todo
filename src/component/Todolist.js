import React, { useState } from "react";

const Todolist = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [itemedit, setEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("please enter item");
    } else {
      setItems([...items, inputData]);
      console.log(items);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updateditems = items.filter((elem, indx) => {
      return indx !== id;
    });
    setItems(updateditems);
    console.log(updateditems);
  };

  const editItem = (indx, elemet) => {
    // console.log(indx, elemet);
    setInputData(elemet);
    setEditItem(indx);
  };

  const removeAll = () => {
    setItems([]);
  };

  const updateItem = () => {
    const indexValue = itemedit;
    let newItems = [...items];
    newItems[indexValue] = inputData;
    setItems(newItems);
    setInputData("");
  };
  // eplanation of update fun

  //   const indexValue = 1;
  //   let newItems = [1, 1234, 3, 4];
  //   newItems[indexValue] = 12345;
  //   console.log("arr index", newItems[1]);

  //   let arr = [
  //     {
  //       name: "number",
  //       value: 1,
  //     },
  //     {
  //       name: "float",
  //       value: 2,
  //     },
  //   ];
  //   console.log(arr.length, arr);

  return (
    <div>
      <>
        <h1>Todo list</h1>

        <input
          type="text"
          placeholder="add item.."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button className="btn" onClick={addItem}>
          Add item
        </button>
        <button className="btn" onClick={updateItem}>
          update
        </button>

        <div>
          <button className="btn" onClick={removeAll}>
            Remove all
          </button>
        </div>

        <ul>
          {items.map((name, indx) => {
            return (
              <li key={indx}>
                {name}
                <button className="btn" onClick={() => deleteItem(indx)}>
                  Delete
                </button>
                <button className="btn" onClick={() => editItem(indx, name)}>
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      </>
    </div>
  );
};

export default Todolist;
