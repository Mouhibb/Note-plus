import React from "react";
import { Link } from "react-router-dom";

import './styles.css';

export default function Home () {
    return (
     <div>
        <header className="w3-container w3-amber w3-center" style={{padding:128 }}>
          <h1 className="w3-margin w3-jumbo ">The simplest way to keep notes </h1>
          <p className="w3-xlarge">All your notes, synced on all your devices<br></br> try Note+ now on  Windows, Linux, or in your browser.</p>
          <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top"><Link to="/SignIn">Get started</Link></button>
        </header>
        
        
        
        <div className="w3-row-padding w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1 className="w3-wide w3-opacity">Note+</h1>
              
              <h5 className="w3-padding-32">Note+ is a simple application that provides services for all users. Users can save their notes in voice or text notes and they have the ability to search for their notes taken time ago.</h5>
              
              <p className="w3-text-grey">Note taking is the practice of recording information from different sources and platforms. By taking notes, the writer records the essence of the information, freeing their mind from having to recall everything.Notes are commonly drawn from a transient source, such as an oral discussion at a meeting, or a lecture (notes of a meeting are usually called minutes), in which case the notes may be the only record of the event,Note-taking is a central aspect of a complex human behavior related to information management involving a range of underlying mental processes and their interactions with other cognitive functions.The person taking notes must acquire and filter the incoming sources, organize and restructure existing knowledge structures, comprehend and write down their explanation of the information, and ultimately store and integrate the freshly processed material.</p>
            </div>
        
            <div className="w3-third w3-center">
              
              <iframe src="https://giphy.com/embed/ozf26DV8FqaCpkYt6n" width="376" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/shaan-danthes-furrylittlepeach-ozf26DV8FqaCpkYt6n"></a></p>
            </div>
          </div>
        </div>
        
        
        <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
            <h1 className="w3-margin w3-xlarge">“The more content you try to capture during a lecture or a meeting, the less you're thinking about what's being said. You burn through most of your attention parroting the source.”
             <br></br><b>-Ryder Carroll-</b></h1>
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
         <p>Copyright © 2020</p>
        </footer>




     </div>





    );
    }