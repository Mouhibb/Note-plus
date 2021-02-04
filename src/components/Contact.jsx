import React from "react";
import './styles.css';



export default function Conatct () {







    return (
     <div>
        <div style={{textAlign:"center"}}>
		
           <h1 style={{fontSize:30, marginTop:100, marginLeft:4}}>Contact Us</h1>
           <br></br><br></br><br></br><br></br><br></br>
     
     
     
           <p style={{fontSize:20}}>Need help with Note+?&nbsp; <br></br>Check out our&nbsp;<a href="./Help">Help</a>&nbsp;page for frequently asked questions.&nbsp;<br></br> If you can’t find an answer there, email us at&nbsp;<a href="mailto:contact@gmail.com">contact@gmail.com</a>&nbsp;<br></br>and one of our Happiness Engineers will be in touch.</p>
        </div>
        
        <footer className="w3-container w3-padding-64 w3-center w3-opacity">  
          <div className="w3-xlarge w3-padding-32">
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
            <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-snapchat w3-hover-opacity"></i>
            <i className="fa fa-pinterest-p w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i>
            <i className="fa fa-linkedin w3-hover-opacity"></i>
         </div>
         
        </footer>
     </div>
     

    );
}