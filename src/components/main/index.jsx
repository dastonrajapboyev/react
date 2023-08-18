import React from "react";
import { database } from "../../mock";
import Card from "../card";

class Main extends React.Component {
  render() {
    return (
      <main
        style={{
          background: "#F2C1D1",
          paddingTop: "20px"
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            border: "1px solid white",
            width: "300px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          FRUIT
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            background: "#F2C1D1",
            paddingBottom: "60px",
          }}
        >
          {database.map((item) => {
            return <Card data={item} />;
          })}
        </div>
      </main>
    );
  }
}
export default Main;
