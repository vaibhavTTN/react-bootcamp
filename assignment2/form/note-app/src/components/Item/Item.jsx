import React from "react";
import Button from "../UI/Button";

export default function Item(props) {
  return (
    <div>
      <h1>{props.item}</h1>
      <h2>{props.price}</h2>
      <h3>{props.discription}</h3>
      <Button type="submit" onClick={props.removeItem} value="Remove" />
    </div>
  );
}
