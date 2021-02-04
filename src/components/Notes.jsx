import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea"; 
import Header from "./Header";
import Footer from "./Footer";
import fire from "./fire";
import Button from '@material-ui/core/Button';



const Notes = ()=>{
const [notes, setNotes] = useState([]);

const [darkMode, setDarkMode] = useState(false);



function logout () {
  fire.auth().signOut();
};

function addNote(newNote) {
  setNotes(prevNotes => {
    return [...prevNotes, newNote];
  });
}

function deleteNote(id) {
  setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
      return index !== id;
    });
  });
}

return(<>
 <Header  className={darkMode ? "dark-mode-headerr" : "headerr"}/>
 
 <Button variant="outlined" onClick={logout}  style={{marginLeft:1470,marginTop:20,color:"dimGray"}}>Sign out</Button>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      

<CreateArea onAdd={addNote}  />
        
      

      {notes.map((noteItem, index) => {
        return (
          

          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            
          />
        );
      })}
      
      </>)



    }


    export default Notes;