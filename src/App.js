import React from "react";
import Card from "./components/Card";
import getContentCards from "./assets/getContentCards";
import "./global.css";

function App() {
  const data = getContentCards();
  const card = data[0];
  console.log(card);
  return (
    <div className="container-cards">
      {data.map((card) => {
        return <Card data={card} />;
      })}
    </div>
  );
}

export default App;
