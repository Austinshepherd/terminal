import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import "../src/App.css"
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin';


const FileSystemPlugin =pseudoFileSystemPlugin("/","db",false); 

class App extends Component {


  showMsg() {
    return (<div style={{color: "#247ddb" }}>Documents <br/><br/>Media<br/><br/>Projects</div>);
  }
  finishMsg() {
    return (<div style={{color: "green" }}>Changed Directory!</div>);
  }
 
  
  render(){
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
      plugins={[
        FileSystemPlugin
      ]}
      style={{ fontWeight: "bold", fontSize: "1.3em", fontFamily: "sans-serif" }}
  commands={{
    open: () => window.open('https://www.google.com/', '_blank'),
    google: () => window.open('https://www.google.com/', '_blank'),
    ls: () => alert('Terminal in React'),
    cd: this.finishMsg,
    Documents: this.finishMsg,
    popup: () => alert('Terminal in React')
  }}
  descriptions={{
    'opengoogle': 'opens google.com',
    ls: 'shows a message',
    alert: 'alert', popup: 'alert'
  }}
  msg=' Greetings (soon to be) hacker prodijy, Welcome to your first lesson in navigating your linux operating system. Lets begin with something basic. Type "start" in the terminal to begin your first session, this session will not be saved so learn your commands.     
  .....type "help" for a list of all commands in this terminal.'
className="Term"/>
      </div>
    );
  }
}

export default App