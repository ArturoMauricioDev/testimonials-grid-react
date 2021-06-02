import { React, useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import getContentCards from "./assets/getContentCards";
import "./global.css";

function App() {
  const data = getContentCards();
  //const card = data[0];
  //console.log(card);
  const [quantity, setQuantity] = useState(5);
  const remove = () => {
    setQuantity(quantity - 1);
  };
  const add = () => {
    setQuantity(quantity + 1);
  };
  const cards = [];
  for (let i = 0; i < quantity; i++) {
    cards.push(<Card data={data[i]} />);
  }
  return (
    <>
      <section className="button-container">
        <Button
          content="Remove Card"
          id="removeCard"
          click={remove}
          disabled={quantity <= 0}
        />
        {quantity + " Cards"}
        <Button
          content="Add Card"
          id="addCard"
          click={add}
          disabled={quantity >= 5}
        />
      </section>
      <section className="container-cards">
        {cards}
        {/* {data.map((card) => {
          return <Card data={card} />;
        })} */}
      </section>
    </>
  );
}

export default App;
