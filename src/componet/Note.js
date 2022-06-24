import React, { useState } from "react";
import List from "@mui/material/List";
import Box from "@mui/system/Box";
import Checkbox from "@mui/material/Checkbox";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import Tooltip from "@mui/material/Tooltip";

export default function Note(props) {
  const [isTrue, setIsTrue] = useState(false);
  let style1 = { textDecoration: "none" };
  let style2 = { textDecoration: "line-through" };
  const [mystyle, setmyStyle] = useState(style1);
  let notevalueid = document.getElementById(`${props.id}`);

  function handelcheck(e) {
    if (e.target.checked) {
      setIsTrue(true);
      setmyStyle(style2);
    } else {
      setIsTrue(false);
      setmyStyle(style1);
    }
  }

  function fun1() {
    notevalueid.remove(notevalueid);
  }
  return (
    <List
      id={props.id}
      sx={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}
    >
      <Box sx={{ borderBottom: "1px solid grey", width: "98%" }}>
        <Checkbox
          onChange={handelcheck}
          checked={isTrue}
          icon={<CircleOutlinedIcon color="primary"></CircleOutlinedIcon>}
          checkedIcon={
            <CheckCircleOutlineIcon color="success"></CheckCircleOutlineIcon>
          }
        />
        <p className="notevalue" style={mystyle}>
          {props.text}
        </p>

        <IconButton sx={{ position: "absolute", right: "3rem" }} onClick={fun1}>
          <DeleteIcon />
        </IconButton>
        <Tooltip title="Mark as important" arrow>
          <Checkbox
            sx={{ position: "absolute", right: "1rem" }}
            icon={
              <StarOutlineIcon sx={{ color: "goldenrod" }}></StarOutlineIcon>
            }
            checkedIcon={
              <StarRateIcon sx={{ color: "goldenrod" }}></StarRateIcon>
            }
          />
        </Tooltip>
      </Box>
    </List>
  );
}
