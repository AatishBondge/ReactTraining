import React from 'react';
import './App.scss';
import Routing from './ReactRouter/ReactRouter';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="mainContainer">
        
        <Routing/>
      </div>
    );
  }
}
export default App;
