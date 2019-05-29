import React, { Component } from 'react';
import NoteCard from './NoteCard';

class Notes extends Component {
    render() {
        const { noteItems, handleNotesClick, handleNoteDelete } = this.props;
        return (
            <div>
                <h3 className="notes-header">All Notes </h3>
                { noteItems && noteItems.map(note => {
                    return (
                        <NoteCard 
                            key={note.id} 
                            id={note.id} 
                            handleNotesClick={handleNotesClick} 
                            note={note} 
                            handleNoteDelete={handleNoteDelete}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Notes;