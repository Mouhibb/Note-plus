import React from "react";

export default function Footer(props) {
    var d=new Date();
     var y=d.getFullYear();
    return(
        <footer className={`${props.className}`} >        <p>Copyright ©  {y} </p>
        </footer>
    );

    
}