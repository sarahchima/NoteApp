import React from 'react';
import "./Toggle.css"


function Toggle (props) {

    const handleToggle = () => {
        props.handleToggle();
    }
    return (
        <label className="switch">
            <input type="checkbox" onClick={handleToggle}/>
            <span className="slider round"></span>
        </label>
    )
}

export default Toggle;

