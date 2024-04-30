import React from "react"
import SystemConvBlock from "./SystemConvBlock";
import CollapsibleList from "./CollapsibleList";
import KnowledgeGraph from "./KnowledgeGraph";

export default function AIResponseBlock({content, reference, imgSrc, links, courses, props}){
    const listOfContent = content?.map(e => <p className="content">{e}</p>)

    return (
    <div>
        <p className="content">AI:</p>
        {listOfContent}
        <br />
        <CollapsibleList open={false} content={reference} title={"References"} />
        <KnowledgeGraph open={false} imgSrc={imgSrc} />
        <CollapsibleList open={false} content={links} title={"Related Links"} />
        <CollapsibleList open={false} content={courses} title={"Related Courses"} />
        {props.systemMsg === "" ? 
        <button className="verify" onClick={() => {
            props.AddNewConv(props.id, props.user, props.content, "testing")
        }}>Verify the response</button>
        : 
        <div>
            <SystemConvBlock content={"The teaching team will verify the response soon."}/>
            <SystemConvBlock content={"The response is confirmed to be correct."}/>
            <br />
        </div>}
    </div>
    )
}