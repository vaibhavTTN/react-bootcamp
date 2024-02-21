import React from "react";
import Item from "./Item";
import classes from "./item.module.css";

export default function ItemList(props) {
  const items = props.itemList.map((e) => (
    <li className={classes.item} key={e.id}>
      <Item {...e} removeItem={props.removeItem.bind(null, e.id)} />
    </li>
  ));

  return (
    <div>
      <ul className={classes.item_list}>{items}</ul>
    </div>
  );
}
