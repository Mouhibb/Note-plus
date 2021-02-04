import React  from "react";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import { blue } from "@material-ui/core/colors";

  


export default function Header(props) {
  

    return (
    <header className={`${props.className}`}>
    
        <h1 >Note+</h1>
        <TextField style={{left:639}} 
          placeholder={"Search note..."}
          InputProps={{
           endAdornment: (
        <InputAdornment >
           <IconButton>
           <SearchIcon />
           </IconButton>
        </InputAdornment>
        )
      }}
        />
        
       
    </header>
    );
}