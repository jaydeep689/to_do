import React, { useState } from "react";
import Note from "./Note";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function Notelist() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const dstyle = {
    display: "flex",
    height: "9vh",
    width: "98%",
    marginLeft: "1.5rem",
    marginTop: "1rem",
    borderRadius: "0.8rem",
    backgroundColor: "whitesmoke",
  };

  const addToList = () => {
    let tempArr = list;
    tempArr.push(value);
    setList(tempArr);
    setValue("");
  };

  return (
    <>
      <div style={dstyle}>
        <CircleOutlinedIcon
          color="primary"
          sx={{ marginTop: "0.5rem", marginLeft: "0.5rem", fontSize: "2rem" }}
        ></CircleOutlinedIcon>
        <input
          id="textarea"
          type="text"
          placeholder="Add Task..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={addToList} id="addbtn" disabled={!value}>
          Add
        </button>
      </div>
      <div>
        {list.length > 0 &&
          list.map((item, i) => (
            <Note text={item} key={item + i} id={item + i}  id1={i+item}></Note>
          ))}
      </div>
    </>
  );
}
