import React from "react";
// import logo from './logo.svg';
// import './Style.css';
import Card from './components/Card';

class App extends React.Component {
  state = {
    current_score: 0,
    high_score: 0
   }
  render(){
    return (
      <div className="App">
        <h1>This is my app!</h1>
        <Card />
        
      </div>
   
    );
  }
}

export default App;
