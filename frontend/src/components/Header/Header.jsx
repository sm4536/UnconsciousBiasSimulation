import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
  render() {
    return (
      <>
        <Nav defaultActiveKey="/home" className="justify-content-end header">
          <h4>Unconscious Bias Simulation</h4>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="">Create Profile</Nav.Link>
          <Nav.Link href="">View Profile</Nav.Link>
        </Nav>
        <br />
        <br />
      </>
    );
  }
}

export default Header;
