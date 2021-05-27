import React from "react";
import Card from "./components/Card";
import Button from "./components/Button"
import getContentCards from "./assets/getContentCards";
import "./global.css";

function App() {
  const data = getContentCards();
  //const card = data[0];
  //console.log(card);
  return (
    <>
      <section className="button-container">
        <Button content="Remove Card" id="removeCard"/>
        <Button content="Add Card" id="addCard"/>
      </section>
      <section className="container-cards">
        {data.map((card) => {
          return <Card data={card} />;
        })}
      </section>
    </>
  );
}

export default App;
