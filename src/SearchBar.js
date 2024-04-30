import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid'
import "./SearchBar.css"

export default function SearchBar(props){
    const [content, setContent] = useState("")
    
    function handleChange(event){
        setContent(event.target.value)
        
        const strLen = event.target.value.length
        const lastChar = event.target.value.charAt(strLen - 1)
        if (lastChar === '\n'){ // user pressed ENTER
            handleSubmit(event) // consider it as pressing the submit button
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        // add user's question
        const userMsgId = uuidv4()
        props.AddNewConv(userMsgId, "User", content, "")
        // clear the text input area
        setContent("") 
        // add AI's response
        const AiMsgId = uuidv4()
        props.AddNewConv(AiMsgId, "AI", content, "")
    }

    return (
        <div>
            <form className="SearchBarForm" onSubmit={handleSubmit}>
                <textarea 
                    placeholder="Ask your question here..."
                    className="SearchBar"
                    value={content}
                    onChange={handleChange}
                />
                <button className="submitButton">Ask!</button>
            </form>
        </div>
    )
}

