import React from 'react';
import './App.css';
import Loginpage  from './Loginpage'

export class App extends React.Component{
  render(){
    return(
      <div className="mainContainer">
      <Loginpage isLogin={this.onSubmit}/>
    </div>
    );
  }
}
export default App;