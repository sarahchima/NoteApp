import React, { Component } from 'react';
import NoteCard from './NoteCard';

class Notes extends Component {


    render() {
        const { noteItems, handleNotesClick } = this.props;

        console.log("this"+noteItems)
        let count = 0;
        return (
            <div>{ noteItems && noteItems.map(note => {
                count++;
                return (
                    <NoteCard key={count} handleNotesClick={handleNotesClick} note={note} />
                )
            })}
            </div>
        )
    }
}

export default Notes;