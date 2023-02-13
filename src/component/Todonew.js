import React, { useState } from "react";

const Todonew = () => {
  const [inputData, setInputData] = useState("");
  //   const myNewState = useState("hello");
  //   const MyStte = myNewState[0];
  //   const Updatter = myNewState[1];
  //   console.log(myNewState);
  //   console.log(MyStte);
  //   console.log(Updatter);
  const [items, setItems] = useState([]);
  const [itemedit, setEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      //   const todosCopy = [...items];
      //   todosCopy[itemedit] = inputData;
      //   setItems(todosCopy);
      alert("enter input data");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const deleteitem = (id) => {
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updateditems);
  };
  const edititem = (item, id) => {
    // console.log(item);
    setInputData(item);
    setEditItem(id);
  };
  return (
    <div>
      <h1>Add a List</h1>
      <input
        type="text"
        placeholder="add items..."
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button className="btn" onClick={addItem}>
        Add item
      </button>

      <div className="showitem">
        <ul>
          {items.map((elem, indx) => {
            return (
              <li key={indx}>
                {elem}
                {/* {console.log({ elem })} */}
                <button className="btn" onClick={() => deleteitem(indx)}>
                  delete
                </button>
                <button className="btn" onClick={() => edititem(elem, indx)}>
                  edit
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn">remove all</button>
      </div>
    </div>
  );
};

export default Todonew;
