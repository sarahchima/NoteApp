import React, { Component } from "react";
import EditField from "./Components/Editor/EditField";
import Notes from "./Components/Notes/Notes";
import SideBar from "./Components/SideBar/Sidebar";
import "./App.css";


//Todo : Button for adding new note; button for clearing all notes, delete particular note, fix time problem

class NoteApp extends Component {
	state = {
		count: 1,
		notes: [], 
		untitledCount: 0,
		isEditing: false,
		isNightMode: true,
		note: {
			id: 0,
			title: "",
			text: "",
			date: ""
		}
	};

	componentDidMount() {
		const notes = this.getNotes();
		const count = this.getCount();
		this.setState({
			count,
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
		const newNote = this.state.note;
		let { untitledCount, count, isEditing, notes } = this.state;
		let newNotes;

		newNote.date =  (new Date()).toDateString();

		if (!isEditing) {
			if (newNote.title === "") {
				newNote.title = "Untitled";
				this.setState({
					untitledCount: untitledCount++,
						note: { 
							title: "",
							text: "",
						}
				})
			}	
			newNote.id = count;
			count++;

			newNotes = [...notes, newNote]
			localStorage.setItem('count', count)
		}

		if(isEditing) {
			const noteIndex = notes.findIndex(note => note.id === newNote.id)
			notes.splice(noteIndex, 1, newNote);
			newNotes = notes;

			this.setState({
				isEditing: false
			})
		}

		this.setState({
			count,
			notes: newNotes,
			note : {
				title: "",
				text: ""
			}
		});
		localStorage.setItem('note', JSON.stringify(newNotes))

	};

	getNotes = () => {
		let items = localStorage.getItem('note')
		items = items || []
		if (items.length !== 0) {
			return JSON.parse([items]);
		}
		else {
			return []
		}
	};

	getCount = () => {
		const count = localStorage.getItem('count') ? localStorage.getItem('count') : 1 ;
		return count;
	}

	deleteAllNotes = () => {
		const clear = window.confirm("Are you sure you want to delete all notes?");
		if (clear) {
			localStorage.setItem("note", []);
			localStorage.setItem("count", 1)
			this.setState({
				notes: [],
				count: 1
			})
		}
	}

	createNewNote = () => {
		this.setState({
			note : {
				id: 0,
				title: "",
				text: "",
				date: (new Date()).toDateString()
			}
		})
	}

	changeNightMode = () => {

		const nightMode =  this.state.isNightMode === true ? false : true;

		this.setState({
			isNightMode: nightMode
		})
	}

	handleNotesClick = (id, notes, title) => {
		this.setState({
			isEditing: true,
			note : {
				id,
				title: title || "",
				text: notes || ""
			}
		})
	}

	handleNoteDelete = (id, e) => {
		e.stopPropagation();
		let newNotes = this.state.notes;
		const notePosition = newNotes.findIndex(note => note.id === id) 
		newNotes.splice(notePosition, 1);
		this.setState({
			notes : newNotes
		})
		localStorage.setItem("note", JSON.stringify(newNotes));
	}

	render() {
		const { notes, isNightMode} = this.state;
		return (
			<div className={`App ${!isNightMode ? "light-mode" : ""}`}>
				<div className="side-bar">
					<SideBar 
						handleToggle={this.changeNightMode}
						createNewNote={this.createNewNote}
						deleteAllNotes={this.deleteAllNotes}
					/>
				</div>
				<div className="notes">
					<Notes 
						noteItems={notes}
						handleNotesClick={this.handleNotesClick} 
						handleNoteDelete={this.handleNoteDelete}
					/>
				</div>
				<div className="edit-field">
					<EditField 
						handleSave={this.handleStorageChange} 
						note={this.state.note} 
						handleChange={this.handleFieldChange}
					/>
				</div>
			</div>
		);
	}
}

export default NoteApp;
