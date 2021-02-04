import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import Contact from './Contact';
import HomeIcon from '@material-ui/icons/Home';
import Home from "./Home";
import Help from "./Help";
import './styles.css';
import fire from "./fire";


export default function HomePage () {

  
  

    return (
     <Router>
     <div>
        
        <div className="w3-top">
          <div className="w3-bar w3-amber w3-card w3-left-align w3-large">
            <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-amber"  title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
            <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-white"><HomeIcon style={{width:30}}/></Link>
            <Link to="/Contact" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >

Contact</Link>
            <Link to="/Help" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >Help</Link>
            <Link to="/SignIn" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >Sign in</Link>

            
          </div>
        
    
          
        </div>
        
        
          <Route exact path="/"   component={Home} />
            
          <Route path="/Contact" component={Contact} />
          <Route path="/Help" component={Help} />

            
          
          <Route path="/SignIn" component={SignIn} />

          
            
              
             
          
          
         
        
    </div>
    </Router>
        
       
        


    );
}
