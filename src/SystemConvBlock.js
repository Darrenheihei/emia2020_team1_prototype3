import React from "react"

import "./SystemConvBlock.css"

export default function SystemConvBlock(props){
    return (
        <div className="SystemConvBlock">
            <p className="systemMsg">System: {props.content}</p>
        </div>
    )
}