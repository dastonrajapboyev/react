import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, title, } = this.props.data;
    return (
      <div style={{ margin: "14px", background: "white", borderRadius:  "15px", padding: "20px", textAlign: "center", marginTop: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <img style={{ width: "200px", height: "160px" }} src={image} alt="" />
        <h1 style={{}}>{title}</h1>
      </div>
    );
  }
}
export default Card;
