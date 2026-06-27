import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Main siteName="Hdrezka" />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
