import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Card from "../UI/Card";

export default function Form(props) {
  const [item, setItems] = useState("");
  const [price, setPrice] = useState("");
  const [discription, setDiscription] = useState("");

  const onChangeItem = (event) => {
    console.log(event.target.value);
    setItems(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onChangeDiscription = (event) => {
    setDiscription(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.addItem({
      id: Math.random(1, 1000),
      item,
      price,
      discription,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          id="item"
          label="Item Name"
          placeholder="Item Name"
          onChange={onChangeItem}
        />
        <Input
          type="text"
          id="price"
          label="Price"
          placeholder="Price"
          onChange={onChangePrice}
        />
        <Input
          type="text"
          id="discription"
          label="Discription"
          placeholder="Discription"
          onChange={onChangeDiscription}
        />
        <Button type="submit" value="Add" />
      </form>
    </div>
  );
}
