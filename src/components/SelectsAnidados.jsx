import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  return (
    <>
      <h3>Select anidado</h3>
      <h3>Mexico</h3>
      <SelectList
        title="estado"
        url=""
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipio"
          url=""
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colonias"
          url=""
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state}-{town}-{suburb}
        </code>
      </pre>
    </>
  );
};

export default SelectsAnidados;
