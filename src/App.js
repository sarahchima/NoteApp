import React, { Component } from "react";
import EditField from "./Components/Editor/EditField";
import Notes from "./Components/Notes/Notes";

import "./App.css";

class NoteApp extends Component {
	state = {
		notes: [], 
		note: {
			title: "",
			text: "",
			date: (new Date()).toDateString()
		}
	};

	componentDidMount() {
		const notes = this.getNotes();
		this.setState({
			notes: notes
		});
		// window.addEventListener('storage', this.handleStorageChange )
	}

	handleFieldChange = (e) => {
        this.setState ({
            note: {
                ...this.state.note,
                [e.target.name]: e.target.value
            } 
        })
    }

	handleStorageChange = () => {
		const updatedNotes = this.state.note;
		if (updatedNotes.title === "") {
			updatedNotes.title = "Untitled"
		}

		const newNotes = [...this.state.notes, updatedNotes]
		this.setState({
			notes: newNotes,
			note : {
				title: "",
				text: ""
			}
		});
		console.log(newNotes)
		localStorage.setItem('note', JSON.stringify(newNotes))
	};

	getNotes = () => {
		let items = localStorage.getItem('note')
		if (items) {
			return JSON.parse([items]);
		}
		else {
			return []
		}
	};

	handleNotesClick = (key, notes, title) => {
		this.setState({
			note : {
				title: title || "",
				text: notes || ""
			}
		})
	}

	render() {
		const { notes } = this.state;
		return (
			<div className="App">
				<div className="notes">
					<Notes noteItems={notes} handleNotesClick={this.handleNotesClick} />
				</div>
				<div className="edit-field">
					<EditField handleSave={this.handleStorageChange} note={this.state.note} handleChange={this.handleFieldChange}/>
				</div>
			</div>
		);
	}
}

export default NoteApp;
