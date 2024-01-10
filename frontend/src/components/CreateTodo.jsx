import { useState } from "react";

/* eslint-disable no-undef */
export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [descripion, setdescription] = useState("");

  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>{" "}
      <br />
      <input
        id="desciption"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="decription"
        onChange={function (e) {
          const value = e.target.value;
          setdescription(value);
        }}
      ></input>{" "}
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              descripion: descripion,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
