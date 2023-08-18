import React from "react";
import Header from "./header";
import Main from "./main"

class Root extends React.Component {
  render() {
    const navLinks = ["Fruit"]
    return (
      <div>
        <Header data={navLinks} />
        <Main />
      </div>
    );
  }
}
export default Root;
