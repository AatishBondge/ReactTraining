import React from 'react';
import './App.css';
import Loginpage  from './Pages/Loginpage'
import HomePage from './Pages/HomePage'

export class App extends React.Component{
  constructor(props){
    super()
    this.state = {
      isLoggedIn : false,
    }
  }
  loginStatusChanged=()=>{
    console.log(this.state.isLoggedIn);
    this.setState({isLoggedIn : true})
  }
  render(){
    return(
      <div className="mainContainer">
      {!this.state.isLoggedIn ? <Loginpage loginStatus={this.loginStatusChanged}/> : <HomePage/>}
    </div>
    );
  }
}
export default App;