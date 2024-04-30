import React, {useEffect, useState} from "react"
import { v4 as uuidv4 } from 'uuid'
import SearchBar from "./SearchBar"
import BurgerMenu from "./BurgerMenu"
import ConvBlock from "./ConvBlock"
import "./style.css"
import goToBottom from "./goToBottom.png"

// how to upload to github: https://github.com/gitname/react-gh-pages?tab=readme-ov-file

export default function App(){
    const initialId = uuidv4();
    const [course, setCourse] = useState("CHEM1020")
    const [conversations, setConversations] = useState([
        {id: initialId, user: "AI", content: ["This is the chatbot for CHEM1020, you can ask me anything related to the topics mentioned in the course.", "If you have doubt on the correctness of the response after reading the references and related links, you could ask the teaching team for verification on the answer by pressing the 'verify' button."], systemMsg: ""}
    ])

    useEffect(() => {
        // TODO: load the chat history from local storage
        setCourse(localStorage.getItem("course"))
        console.log("APP:" + localStorage.getItem("course"))
        setConversations([{id: initialId, user: "AI", content: ["This is the chatbot for " + localStorage.getItem("course") + ", you can ask me anything related to the topics mentioned in the course.", "If you have doubt on the correctness of the response after reading the references and related links, you could ask the teaching team for verification on the answer by pressing the 'verify' button.", "For demonstration purposes, you can choose to ask the questions below:", "1. What is electron configuration?", "2. Why are we doing differentiation and integration?"], systemMsg: ""}])
    }, [course])

    const convBlocks = conversations?.map(data => {
        return <ConvBlock id={data.id} user={data.user} content={data.content} systemMsg={data.systemMsg} AddNewConv={AddNewConv} />
    })

    const [isUpdated, setIsUpdated] = useState(false);
    function AddNewConv(_id, _user, _conv, _systemMsg){ // conv means conversation
        let existing = false;
        conversations.forEach(e => existing = e.id === _id || existing)
        if (existing){
            setConversations(prevConv => prevConv.map(e => e.id !== _id ? e : {id: _id, user: _user, content: _conv, systemMsg: _systemMsg}))
        } else {
            setConversations(prevConv => [...prevConv, {id: _id, user: _user, content: _conv, systemMsg: _systemMsg}])    
            setIsUpdated(true) // trigger auto scrolling to bottom
        }    
    }

    function clearHistory(){
        setConversations(prevConv => [prevConv[0]])
    }

    // automatically scroll to bottom of the page when there is new conversation history block
    // reference: https://www.npmjs.com/package/react-scroll-into-view (I checked their source code in github in https://github.com/dominikbulaj/react-scroll-into-view/blob/master/src/index.tsx to inspire me about the implementation here)
    React.useEffect(() => {
        setIsUpdated(false)
        document.querySelector('.BlankSpace').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        return () => {}
    }, [isUpdated])

    // check if user scrolls to the bottom of the page or not
    // reference: https://stackoverflow.com/a/63502850
    const [atBottom, setAtBottom] = useState(true);
    const handleScroll = () => {

        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    
        setAtBottom(bottom)
      };
      React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
          passive: true
        });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div>
            {/* burger menu */}
            <BurgerMenu setCourse={setCourse}/>
            {/* title */}
            <br />
            <h1 className="title">Welcome to RING!</h1>
            {/* conversation history */}
            <br />
            <br />
            <div className="convContainer">
                {convBlocks}
            </div>
            {/* clear history button */}
            <div className="ClearHistory">
                <button onClick={clearHistory} className="ClearHistoryBtn">Clear Chat History</button>
            </div>
            {/* blank space */}
            <div className="BlankSpace"></div>
            {!atBottom && <button className="ScrollBottom" onClick={() => setIsUpdated(true)}><img src={goToBottom} alt="Go To Bottom" className="GoToBottomImg"/></button>}
            {/* search bar */}
            <br />
            <br />
            <SearchBar AddNewConv={AddNewConv}/>
        </div>
    )
}
