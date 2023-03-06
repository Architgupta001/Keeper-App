import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpand,setExpand] = useState(false)
    const [note,setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event) {
        const {name,value} = event.target;
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]:value
            }
        }) 
    }
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        
        event.preventDefault();
    }
    function expand() {
      setExpand(true);
    }

  return (
    <div>
      <form className="create-note">
        {isExpand && <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />}
        <textarea onClick={expand} onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows={isExpand? "3": "1"} />
        <Zoom in={isExpand}><Fab color="warning" onClick={submitNote}><NoteAddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
