import React, { Component } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Main siteName="Hdrezka" />
        <Footer />
      </div>
    );
  }
}

export default App;
