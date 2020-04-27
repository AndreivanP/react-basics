import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {
    var user = {
      name: "Anna",
      hobbies: ["Sports", "Music", "Nefflix"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>        
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Andreivan"} age={32} user={user} height="1.95cm">
              <p>Juca Bala!!!</p>
            </Home>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
