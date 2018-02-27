import React, { Component } from 'react';
import Input from './components/input';
import MultipleChoice from './components/multiple-choice';
import './App.css';

class App extends Component {

  handler(){
    console.log("in handler in app with a correct answer. Make your post request in this code block checking off a success completion of this task")
  }

  render() {
    return (
      <div className="App">
        <Input
          placeholder="test placeholder"
          isCorrect={true}
        />

        <MultipleChoice
          id="demo-question"
          correct="All of the above"
          handler={this.handler}
          question="Which are indian food dishes"
          a1="Palak paneer"
          a2="Chicken tikka masala"
          a3="Biryani"
          a4="All of the above"
        />

      </div>
    );
  }
}

export default App;
