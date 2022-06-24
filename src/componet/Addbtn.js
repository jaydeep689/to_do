import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Notelist from "./Noteinput";

export default function Addbtn() {
  const [state, setState] = useState({ clicked: false });

  function handleClick() {
    setState({ clicked: true });
  }
  const divstyle = {
    display: "flex",
    width: "98%",
    height: "6vh",
    backgroundColor: "whitesmoke",
    marginLeft: "1rem",
    marginTop: "1rem",
    borderRadius: "0.8rem",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    justifyContent: "flex-start",
  };
  return (
    <>
      <div onClick={handleClick}>
        {state.clicked ? (
          <Notelist></Notelist>
        ) : (
          <Button
            variant="outlined"
            startIcon={<AddBoxIcon />}
            style={divstyle}
          >
            Add
          </Button>
        )}
      </div>
    </>
  );
}
