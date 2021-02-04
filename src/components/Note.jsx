import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';




function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      
      <Tooltip title="Delete">
        <IconButton aria-label="delete" onClick={handleClick}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default Note;
