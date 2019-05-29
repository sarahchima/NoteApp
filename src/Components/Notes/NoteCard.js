import React, { Component } from 'react';


class NoteCard extends Component {

    handleClick = (id, text, title) => {
        this.props.handleNotesClick(id, text, title)
    }
    
    render() {
        const { note, id,  handleNoteDelete } = this.props;
        return (
            <div onClick={() =>this.handleClick(id, note.text, note.title)} className="note">
                <h4>{note.title}</h4>
                <p>{note.text}</p>
                <small>{note.date}</small>
                <button className="button-delete" onClick={(e) => handleNoteDelete(note.id, e)}>🗑</button>
            </div>
        )  
    }
         
}

export default NoteCard;
