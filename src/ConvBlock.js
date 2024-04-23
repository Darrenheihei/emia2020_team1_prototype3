import React from "react"
import "./ConvBlock.css"

export default function ConvBlock(props){
    const styles = {
        backgroundColor: props.user === "AI" ? "#E8FAE3" : (props.user === "User" ? "#E0DEF0" : "#FFB6C1")
    }
    return (
        <div className="block" style={styles}>
            <p className="content">{props.user}: {props.content}</p>
            <br />
            {props.user === "AI" && props.content !== "This is the chatbot for CHEM1020, you can ask me anything related to the topics mentioned in the course." 
            && <button className="verify" onClick={() => {
                props.AddNewConv("System", "The teaching team will verify the response soon.")
                props.AddNewConv("System", "The response is confirmed to be correct.")
            }
                }>Verify</button>}
        </div>
    )
}