import React, { Component } from 'react';
import './style.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localStorage,
    };
    this.infoUser = JSON.parse(localStorage.getItem("User")),
    this.test = this.test.bind(this);
  }

  test() {
  }

  render() {
    return(
      <div>
        {
          this.infoUser.map(item => {
            console.log(item.frineds);
           return(
             <div className="userContainer" key={item["_id"]}>
               <img src={item.picture} alt=""/>
               <div className="name">{item.name}</div>
               <div className="company">Компания:{item.company}</div>
               <div className="city">Город: {item.city}</div>
               <div>Все друзья:<br/>
                 <div>{item.friends}</div>
               </div>
             </div>
           )
          })
        }
      </div>
    )
  }

}

export default Profile;

