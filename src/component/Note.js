import axios from "axios";
import React, { useEffect, useState } from "react";

const Note = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => setdata(res.data));
  }, []);

  return (
    <div className="Note">
      <h1> My Notes </h1>
      <ul>
        {data.map((note) => (
          <li key={note.id}>
            {note.firstname},{note.lastname},{note.phone},{note.role},
            {note.message}
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default Note;
