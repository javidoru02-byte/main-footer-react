import React, { Component } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    const moveDate = {
      actors: [
        "Метью Макконахі",
        "Енн Гетевей",
        "Джессіка Честейн",
        "Білл Ірвін",
        "Еллен Берстін",
        "Майкл Кейн",
        "Метт Деймон",
        "Кейсі Аффлек",
        "Тімоті Шаламе",
      ],
      adres: "Протасевича 123",
      email: "info@example.com",
      phone: "+1 (123) 456-7890",
      countri: "США, Велика Британія",
      stydio:
        "Paramount Pictures, Warner Bros. Pictures, Legendary Pictures, Syncopy, Lynda Obst Productions",
      ganer: "наукова фантастика, драма, пригоди",
      year: "2014",
    };
    return (
      <div>
        <Header siteName="Hdrezka" />
        <Main
          actors={moveDate.actors}
          countri={moveDate.countri}
          stydio={moveDate.stydio}
          ganer={moveDate.ganer}
          year={moveDate.year}
        />

        <Footer adres={moveDate.adres} email={moveDate.email} phone={moveDate.phone} />
      </div>
    );
  }
}

export default App;
