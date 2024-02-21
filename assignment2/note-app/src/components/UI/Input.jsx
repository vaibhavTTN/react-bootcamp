import React from "react";
import classes from "./input.module.css";

export default function Input(props) {
  return (
    <div className={classes.form__group}>
      <label className={classes.form_label} for={props.id}>
        {props.label}
      </label>
      <input
        className={classes.form__field}
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
