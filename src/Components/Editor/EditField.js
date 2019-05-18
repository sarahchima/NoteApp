import React, { Component } from 'react';
import Button from './Button';

const textArea = {
    width: "100%",
    height: "400px",
    border:  "0",
    padding: "20px",
    background: "inherit",
    color: "white",
    fontSize: "16px",
    outline: "none"
}

class EditField extends Component {
    state = {
        note : {
            title: "",
            text: "",
            date: (new Date()).toDateString()
        }
    }

    handleChange = (e) => {
        this.setState ({
            note: {
                ...this.state.note,
                [e.target.name]: e.target.value
            } 
        })
    }
    handleSave = () => {
        console.log(this.state.note)

        if(this.state.note !== "") {
            this.props.handleSave(this.state.note)
        }
        this.setState({note: {
            title: "",
            text: ""
        }})
    }

    render() {

        const { note } = this.props
        return (
            <div>
                <input className="title-input" name="title" onChange={this.props.handleChange} value={note.title} placeholder="Title"/>
                <textarea style={textArea} name="text" onChange={this.props.handleChange} placeholder="Write a note" value={note.text}></textarea>
                <Button text="Save" handleClick={this.props.handleSave}/>
            </div>
        )
    }
}

export default EditField;