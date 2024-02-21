import { useState } from "react";
import "./App.css";
import ItemList from "./components/Item/ItemList";
import Form from "./components/form/Form";

const itemList = [
  {
    id: 1,
    item: "Item Name 1",
    price: 12000,
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
  },
  {
    id: 2,
    item: "Item Name 2",
    price: 120,
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    item: "Item Name 3",
    price: 1200,
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    item: "Item Name 4",
    price: 1000,
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    item: "Item Name 5",
    price: 2000,
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

function App() {
  const [items, setItems] = useState(itemList);

  const addItem = (data) => {
    setItems((item) => [...item, data]);
  };

  const removeItem = (id) => {
    setItems((item) => item.filter((e) => e.id != id));
  };

  return (
    <div className="App">
      <Form addItem={addItem}></Form>
      <ItemList itemList={items} removeItem={removeItem} />
    </div>
  );
}

export default App;
