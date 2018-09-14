import React, { Component } from 'react';
import './style.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localStorage,
    };
    this.infoUser = JSON.parse(localStorage.getItem("User")),
    this.findUser = this.findUser.bind(this);
  }

  findUser(info) {
    console.log(info);
  }


  render() {
    return(
      <div>
        {
          this.infoUser.map(item => {
           return(
             <div className="userContainer" key={item["_id"]}>
               <img src={item.picture} alt=""/>
               <div className="name">{item.name}</div>
               <div className="company">Компания:{item.company}</div>
               <div className="city">Город: {item.city}</div>
               <div>Все друзья:<br/>
                 <div>{this.findUser(item.friends)}</div>
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

