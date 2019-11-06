import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';
import Loginpage  from './loginpage/loginpage'
import Toastmessages from './toastmessages/toastmessages';


export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loggedInMessage : '',
      showComponent: false
    }
  }

  onSubmit = (userName, password) => {   
    var logStatus = ''; 
    if (/^[ A-Za-z0-9_@./#&+-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userName) || /^\d{10}$/.test(userName) || /^[ A-Za-z0-9_@./#&+-]*$/.test(userName)){
      axios({
        method: 'post',
        url: 'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',
        data: {
            "username":userName,  //  trupti.kashid@objectedge.com
            "password":password,  //  Objectedge$10
        },
        config: { headers: {
                "Authorization":"Bearer YWRtaW46YWRtaW4=",
                'Content-Type': 'application/json'
            }
        }
        })
        .then(response => {
          if(response.status === 200){
            logStatus = 'Log In Succesfull !';
            this.setState({loggedInMessage: logStatus})
          }
        })
        .catch( error => {
            logStatus = 'Log In failed please try again';
            this.setState({loggedInMessage: logStatus})
        })
        this.setState({showComponent : true})
    }
  }
  showToast = ()=>{
    //{this.state.showComponent ? <Toastmessages msg={this.state.loggedInMessage}/> : null}
    return <Toastmessages msg={this.state.loggedInMessage}/>       
  }
  render(){
    let toastmessages = null;     
    if(this.state.showComponent){
      toastmessages= this.showToast();
    }
    return(
      <div className="mainContainer">
      {toastmessages}
      <Loginpage isLogin={this.onSubmit}/>
      <div className="imageContainer">
      
      </div>
    </div>
    );
  }
}
export default App;