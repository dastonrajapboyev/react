import React from "react";

class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const  links  = this.props.data;
    return (
      <header
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "#333",
          color: "white",
        }}
      >
        {links.map((link) => (
          <h3>{link}</h3>
        ))}
      </header>
    );
  }
}
export default Header;
