import React, { Component } from 'react';
import FirstComponenet from './components/learning-examples/FirstComponenet'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import Counter from './components/counter/Counter'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <Counter />
      </div>
    );
  }
}


class LearningComponents extends Component {


  render() {
    return (
      <div className="LearningComponents">
        <FirstComponenet></FirstComponenet>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}


export default App;
