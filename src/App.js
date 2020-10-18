import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import "../src/App.css"
 


class App extends Component {
  showMsg = () => 'Awesome! You were able to complete the first step, now type "next-task"'
  finishMsg = () => 'Amazing! You are all complete, that was the best coding ive ever seen.'
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            start: this.showMsg,
            'next-task': this.finishMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            start: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='start coding with "start"'
        className="Term"/>
      </div>
    );
  }
}

export default App