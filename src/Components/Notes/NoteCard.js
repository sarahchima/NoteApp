import React, { Component } from 'react';


class NoteCard extends Component {

    handleClick = (count, text, title) => {
        this.props.handleNotesClick(count, text, title)
    }
    
    render() {
        const { note, key } = this.props;
        return (
            <div onClick={() =>this.handleClick(key, note.text, note.title)} className="note">
                <h4>{note.title}</h4>
                <p>{note.text}</p>
                <small>{note.date}</small>
            </div>
        )  
    }
         
}

export default NoteCard;
