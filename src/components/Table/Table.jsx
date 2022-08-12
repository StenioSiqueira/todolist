import React, { useState } from "react";
import { Button } from "../Button";
import { Box } from "../Box";

export const Table = () => {
  const [newData, setNewData] = useState([]);
  const [item, setItem] = useState({});

  const handleDelete = (id) => {
    const newList = newData.filter((element) => {
      return element.id !== id;
    });
    setNewData(newList);
    console.log(id);
    console.log(newList);
  };

  const handleChange = (value, id) => {
    setItem((prev) => value, id);
  };

  const handleAdd = () => {
      setNewData((prev) => [...prev, item]);
      console.log(item);
  };

  return (
    <>
      <input
        id={Math.random()}
        type="text"
        onChange={({ target: { value, id } }) => {
          handleChange({ value, id });
        }}
      />{" "}
      <button onClick={handleAdd}> Salvar</button>
      <div>
        {newData.map((element, key) => {
          return (
            <div key={key}>
              {element.value}
              <Button tag={"Delete"} handle={() => handleDelete(element.id)} />
            </div>
          );
        })}
      </div>
    </>
  );
};
