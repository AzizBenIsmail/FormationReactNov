import React from "react";

export default function Navbar(props) {
  return (
    <div>

      {/* if (props.code === 1) {
    message = "marahbe bikom nes lkol";
  } else if (props.code === 2) {
    message = "marahbe";
  } else {
    message = "welcom";
  } */}
{props.name} <br></br>
      {props.code === 1 ? "code 1 " : props.code === 2 ? "code 2 " : "code 3"}
    </div>
  );
}
