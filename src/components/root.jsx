import React from "react";
import Header from "./header";
import Main from "./main"
import Input from "../components/Input"

class Root extends React.Component {
  render() {
    const navLinks = ["Fruit"]
    return (
      <div>
        {/* <Header data={navLinks} /> */}
        <Input/>
        {/* <Main /> */}
      </div>
    );
  }
}
export default Root;
