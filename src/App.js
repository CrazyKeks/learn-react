import React, {Component} from 'react';
import './App.css';


let userInfo = require('./generated.json');
localStorage.setItem("User",JSON.stringify(userInfo));
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.newUser = this.newUser.bind(this);
  }

  newUser(e) {
    e.preventDefault();
    // const name = e.target.elements['name'].value;
    // const lastname = e.target.elements['lastname'].value;
    // const avatar = e.target.elements['avatar'].value;
    // const about = e.target.elements['about'].value;
    // localStorage.setItem(name, [lastname,avatar,about]);
  }

  render() {
    return (
      <div className='wrapper-block' onSubmit={this.newUser}>
        <form action="">
          <label htmlFor="" className="name">
            <input id='name' type="text" placeholder='Имя'/>
          </label>
          <label htmlFor="" className="lastname">
            <input id='lastname' type="text" placeholder='Фамилия'/>
          </label>
          <label htmlFor="" className="Avatar">
            <input id='avatar' type="text" className='fileload-btn' placeholder='Сылка на картинку'/>
          </label>
          <label htmlFor="" className="About">
            <textarea id='about' type="file" className='about'/>
          </label>
          <button type='submit'>Создать</button>
        </form>
      </div>
    );
  }
}

export default App;



