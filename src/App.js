import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    var helloWorld = 'Добро пожаловать в Путь к изучению React';
    let userName = {
      name: 'Иванов',
      lastname: 'Иванович',
      fio: function () {
       return this.name +' '+ this.lastname;
      }
    }

    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>{userName.fio()}</h3>
      </div>
    );
  }
}
export default App;

