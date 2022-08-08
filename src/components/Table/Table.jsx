import React, { useState } from "react";
import { Button } from "../Button";
import { Box } from "../Box";

export const Table = () => {
  const [addForm, setAddForm] = useState(false);
  const [newData, setNewData] = useState([]);
  const [text, setText] = useState("");

  const handleAddForm = () => {
    setAddForm(true);
  };

  const handleChange = ({ target: { value } }) => {
    setText(value);
  };

  const handleAdd = () => {
    newData.push(text);
    setText("");
    setAddForm(false);
  };

  const handleCreate = () => {
    if (addForm === true) {
      return (
        <>
          <input type="text" value={text} onChange={handleChange} />{" "}
          <button onClick={handleAdd}> Salvar</button>
        </>
      );
    }
  };
  return (
    <>
      <Box>
        <table>
          <thead>
            <p>Descrição</p>
          </thead>
          <tbody>{newData}</tbody>
        </table>
        <Button handle={handleAddForm} tag={"Adicionar"} />
      </Box>
      <Box>{handleCreate()}</Box>
    </>
  );
};
