import React, {Component} from 'react';

import './styles.css'


import fire from "./fire";
import HomePage from "./HomePage";
import Notes from "./Notes";


 

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
        <div>
          {this.state.user ? (<Notes />) : (<HomePage />)}
        </div>
    );
  }
}

export default App;
  