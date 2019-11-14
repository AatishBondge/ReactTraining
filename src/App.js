import React from 'react';
import './App.css';
// import Loginpage from './Pages/Loginpage';
// import HomePage from './Pages/HomePage';
import Routing from './ReactRouter/ReactRouter';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     // isLoggedIn: false,
    };
  }

  // loginStatusChanged = () => {
    // this.setState({isLoggedIn: true});
  // };
  
// {!destructuredState.isLoggedIn ? (
        //   <Loginpage loginStatus={this.loginStatusChanged} />
        // ) : (
        //   <HomePage />
        // )}



  render() {
    // const destructuredState = this.state;
    return (
      <div className="mainContainer">
        
        <Routing/>
      </div>
    );
  }
}
export default App;
