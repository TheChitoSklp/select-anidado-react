import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN = "199caf36-6754-43ff-88c3-77327b52ff8a";
  return (
    <>
      <h3>Select anidado</h3>
      <h3>Mexico</h3>
      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
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
