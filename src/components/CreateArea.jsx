import React, { useState, } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from "@material-ui/core";
import Audio from "./Audio";



const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


  


function CreateArea(props) {


  const classes = useStyles();
 

  const [note, setNote] = useState({ 
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (

    <div  >
      <form className="area">
        <input className = "it"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <br></br>
         
        <textarea className="it"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        
        <Tooltip title="Add" aria-label="add" onClick={submitNote}>
         <Fab color="primary" className={classes.absolute}>
          <AddIcon />
         </Fab>
        </Tooltip>
          
           
        
        <Audio />
        
        

      </form>
      
    </div>
  );
}

export default CreateArea;