import React, { Component } from 'react';
import Faq from 'react-faq-component';

import './styles.css';

const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "How it works ?",
        content: "just type in the text fields your note information and click add.  "
      },
      {
        title: "How to Sign in ?",
        content: "Go to the navbar and click sign in and type your email and password and click enter."
      },
      {
        title: "How to search for a note ?",
        content: "Go to search field and type the note title."
      },
      {
        title: "How to add vocal note ?",
        content: "Click on the mic icon and start recording your voice note."
      }]
  }
  
  export default class Help extends Component {
    render() {
      return (
        <div>
          <div style={{position:"center"}}>
          <Faq data={data} styles={{
                    bgColor: "white",
                    titleTextColor: "#48482a",
                    titlePaddingLeft: '50px',
                    rowTitleColor: "#78789a",
                    rowTitleTextSize: 'large',
                    rowContentColor: "#48484a",
                    rowContentTextSize: '16px',
                    rowContentPaddingTop: '10px',
                    rowContentPaddingBottom: '10px',
                    rowContentPaddingLeft: '15px',
                    rowContentPaddingRight: '150px',
                    arrowColor: "black",
                    }} />
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
      )
    }
  }