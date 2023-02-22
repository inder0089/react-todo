import React, { useState } from "react";

function Todoinder() {
  const [inputData, setInputData] = useState("");
  const [items, setitems] = useState([]);

  const [name, setInputname] = useState("");
  const [nameitem, setnameItem] = useState("");

  // let intialstate = {
  //   inputData,
  //   name,
  // };
  // const [newData, setnewData] = useState([intialstate]);
  //   console.log("items", items,);

  // console.log("newData",newData);

  const [editdata, seteditdata] = useState(null);

  const additems = () => {
    if (!inputData) {
      alert("entera text");
    } else {
      setitems([...items, inputData]);
      setnameItem([...nameitem, name]);
      //   console.log("inder", items);
      setInputData("");
    }
  };

  const removeall = () => {
    setitems([]);
  };

  const deleteitem = (id) => {
    const updateItems = items.filter((name, idx) => {
      return id !== idx;
    });
    setitems(updateItems);
  };

  const editItem = (index, value) => {
    seteditdata(index);
    setInputData(value);
    // console.log(index);
    // console.log(value);
  };

  const updateData = () => {
    console.log("inder");
    // const indexvalue = editdata;
    // console.log(indexvalue);
    let newupdateitem = [...items];
    newupdateitem[editdata] = inputData;
    setitems(newupdateitem);
  };

  //   const sumdata = (name, ...args) => {
  //     const s = [...args, 5];
  //     console.log("sumdata", s, name, args);
  //   };

  //   sumdata("nvd", [1, 2, 3, 4], [6, 7, 8, 9]);

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        {/* <input
          type="text"
          value={name}
          onChange={(e) => setInputname(e.target.value)}
        /> */}
        <button onClick={additems}>Add</button>
        <button onClick={updateData}>Update</button>
      </div>
      <div>
        <button onClick={removeall}>remove all</button>
      </div>
      <div>
        <ul>
          {items.map((value, index) => {
            return (
              <li key={index}>
                {value}{" "}
                <button onClick={() => editItem(index, value)}>edit</button>
                <button onClick={() => deleteitem(index)}>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todoinder;
