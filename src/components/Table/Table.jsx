import React, { useState } from "react";
import { Button } from "../Button";
import { Box } from "../Box";

export const Table = () => {
  const [ textInput, setTextInput] = useState("");
  const [newData, setNewData] = useState([]);
  const [item, setItem] = useState({
    value: "",
    id: 0
  });

  const handleDelete = (id) => {
    const newList = newData.filter((element) => {
      return element.id !== id;
    });
    setNewData(newList);
    console.log(id);
    console.log(newList);
  };

  const handleChange = ({value, id, name}) => {
    setItem((prev) => ({...prev, [name]: value, id}));
    setTextInput(value);
    
  };

  const handleAdd = () => {
      setNewData((prev) => [...prev, item]);
      setTextInput("");
  };

  return (
    <>
      <input
        id={Math.random()}
        name="value"
        value={textInput}
        type="text"
        onChange={({ target: {  value, id, name} }) => {
          handleChange({ value, id, name });
        }}
      />{" "}
      <button onClick={handleAdd}> Salvar</button>
      <div>
        {newData.map((element, key) => {
          return (
            <div key={key}>
              <input type="text"
              id={element.id}
               value={element.value}
               />
              <Button tag={"Delete"} handle={() => handleDelete(element.id)} />
            </div>
          );
        })}
      </div>
    </>
  );
};
