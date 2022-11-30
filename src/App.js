import React, { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import View from "./component/View";
import Overlay from "./component/Overlay";
import Note from "./component/Note";
import axios from "axios";

const Gap = () => {
  const [overlay, setOverlay] = useState(false);
  const [notes, setNotes] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: " ",
    role: "",
  });

  const onsubmit = (e) => {
    e.preventDefault();
    setOverlay(true);

    e.target.reset();
  };

  const inputhandeler = (event) => {
    setNotes({ ...notes, [event.target.name]: event.target.value });
  };

  const remOverlay = () => {
    setOverlay(false);
  };

  const sentMessage = () => {
    setOverlay(false);

    axios.post("http://localhost:3001/notes", { ...notes });
  };

  return (
    <div className="container">
      {" "}
      <div className="App">
        <Form onsubmit={onsubmit} inputhandeler={inputhandeler} />
        <View {...notes} />
        {overlay && (
          <Overlay
            {...notes}
            remOverlay={remOverlay}
            sentMessage={sentMessage}
          />
        )}
      </div>{" "}
      <Note {...notes} />
    </div>
  );
};

export default Gap;
