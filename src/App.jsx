import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hdrezka</h1>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
