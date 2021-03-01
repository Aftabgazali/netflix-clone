import React from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import "./Styles/app.css";
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row />
    </div>
  );
}

export default App;
