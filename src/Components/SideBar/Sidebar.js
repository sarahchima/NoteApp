import React, { Component, Fragment }from 'react';
import Toggle from "./Toggle"

class SideBar extends Component {
    handleClearNoteClick = () => {
        this.props.deleteAllNotes();
    }

    handleNewNote = () => {
        this.props.createNewNote();
    }

    render() {
        const { handleToggle } = this.props;
        return (
            <Fragment>
                <Toggle handleToggle={handleToggle} />
                <ul className="list">
                    <li key="new" onClick={this.handleNewNote} style={{cursor: "pointer"}} className="list-item">New Note</li>
                    <li key="clear" onClick={this.handleClearNoteClick} style={{cursor: "pointer"}}>Clear Notes</li>
                </ul>
            </Fragment>
        )
    }
}

export default SideBar;

