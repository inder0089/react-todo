import React, { useState } from "react";

function Booklist() {
  const [number, setnumber] = useState("");
  const [name, setName] = useState("");
  const [author, setauthor] = useState("");

  const data = {
    number,
    name,
    author,
  };
  const [bookList, setbookList] = useState([]);
  const addBok = () => {
    // 1) create obj of form data

    // 2) merge object with prevous book items
    setbookList([...bookList, data]);
    // const bookitemCopy = [...bookList];
    // bookitemCopy.push(data);
    // setbookitem(bookitemCopy);
  };
  //   console.log(bookitem);
  const deleteBook = (id) => {
    const updatebookList = bookList.filter((bname, indx) => {
      return id !== indx;
    });
    setbookList(updatebookList);
  };
  return (
    <div>
      <p>book list</p>
      <div>
        <label>book number</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setnumber(e.target.value)}
        />
      </div>
      <div>
        <label>book name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>book author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setauthor(e.target.value)}
        />
      </div>

      <div>
        <button onClick={addBok}>Add book</button>
      </div>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <td style={{ border: "1px solid black" }}>Book Number</td>
            <td style={{ border: "1px solid black" }}>Book Name</td>
            <td style={{ border: "1px solid black" }}>Book Author</td>
            <td style={{ border: "1px solid black" }}>Delete</td>
          </tr>
        </thead>
        <tbody style={{ border: "1px solid black" }}>
          {bookList.map((value, index) => {
            return (
              <tr key={index} style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>{value.number}</td>
                <td style={{ border: "1px solid black" }}>{value.name}</td>
                <td style={{ border: "1px solid black" }}>{value.author}</td>
                <td style={{ border: "1px solid black" }}>
                  <button onClick={() => deleteBook(index)}>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Booklist;
