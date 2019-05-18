import React, { Fragment } from 'react';


const button = {
    width: "100px",
    height: "40px",
    fontSize: "16px",
    borderRadius: "4px",
    backgroundColor: "#2C666E",
    color: "white",
    border: "0",
    cursor: "pointer"
} 

const Button = (props) => {
    const { text, handleClick } = props;
    return (
        <Fragment>
            <button style={button}onClick={handleClick}>{text}</button>
        </Fragment>
    )
}

export default Button;