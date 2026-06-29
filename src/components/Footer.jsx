import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h3>контакти</h3>
        <p>Адреса: {this.props.adres}</p>
        <p>Електронна пошта: {this.props.email}</p>
        <p>Телефон: {this.props.phone}</p>
      </footer>
    );
  }
}

export default Footer;
