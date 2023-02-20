import React, { useState } from "react";

function Todomonday() {
  const [inputData, setinputdata] = useState("");
  const [items, setItems] = useState([]);
  const [itemedit, setItemedit] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("enter any value");
    } else {
      setItems([...items, inputData]);
      setinputdata("");
      console.log(inputData);
    }
  };

  const deleteitem = (ind) => {
    console.log(ind);
    const updateditems = items.filter((ele, id) => {
      //   console.log(id);
      return id !== ind;
    });
    setItems(updateditems);
  };

  //   let arr = [1, 5, 3, 4, 5];

  //   const value = 5;

  //   console.log(
  //     "arr print",
  //     arr.filter((item, idx) => item !== value)
  //   );

  const edititem = (index, value) => {
    setinputdata(value);
    setItemedit(index);
  };

  const updateitem = () => {
    const indexValue = itemedit;

    const newedititem = [...items];
    newedititem[indexValue] = inputData;
    setItems(newedititem);
    setinputdata("");
  };
  const removeall = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <div className="block-1">
        <input
          type="test"
          value={inputData}
          onChange={(e) => setinputdata(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
        <button onClick={updateitem}>update</button>
      </div>
      <div className="block-2">
        <button onClick={removeall}>remove all</button>
      </div>

      <div className="block-3">
        <ul>
          {items.map((value, index) => {
            return (
              <li key={index}>
                {value}{" "}
                <button onClick={() => deleteitem(index)}>Delete</button>
                <button onClick={() => edititem(index, value)}>Edit</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todomonday;
