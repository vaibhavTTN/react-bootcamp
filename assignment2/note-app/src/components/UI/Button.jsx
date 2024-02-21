import React from "react";

import classes from "./button.module.css";

export default function Button(props) {
  return (
    <button
      className={classes.button_11}
      type={props.type}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
