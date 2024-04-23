import React, {useState} from "react"
import SearchBar from "./SearchBar"
import BurgerMenu from "./BurgerMenu"
import ConvBlock from "./ConvBlock"
import "./style.css"

// how to upload to github: https://github.com/gitname/react-gh-pages?tab=readme-ov-file

export default function App(){
    const [conversations, setConversations] = useState([
        {user: "AI", content: "This is the chatbot for CHEM1020, you can ask me anything related to the topics mentioned in the course."}
    ])

    const convBlocks = conversations.map(data => {
        return <ConvBlock user={data.user} content={data.content} AddNewConv={AddNewConv} />
    })

    const [isUpdated, setIsUpdated] = useState(false);
    function AddNewConv(_user, _conv){ // conv means conversation
        setConversations(prevConv => [...prevConv, {user: _user, content: _conv}])        
        setIsUpdated(true)
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
            <BurgerMenu />
            {/* title */}
            <br />
            <h1 className="title">Welcome to RING!</h1>
            {/* conversation history */}
            <br />
            <br />
            <div className="convContainer">
                {convBlocks}
            </div>
            {/* blank space */}
            <div className="BlankSpace"></div>
            {!atBottom && <button className="ScrollBottom" onClick={() => setIsUpdated(true)}>Go bottom</button>}
            {/* search bar */}
            <br />
            <br />
            <SearchBar AddNewConv={AddNewConv}/>
        </div>
    )
}
