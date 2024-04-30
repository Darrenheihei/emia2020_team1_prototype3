import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/fontawesome-free-solid";
import "./CollapsibleList.css"

export default function CollapsibleList({ open, content, title }){
    const [isOpen, setIsOpen] = useState(open);

    const listOfContent = content?.map(e => <li>{e}</li>)
  
    const handleFilterOpening = () => {
      setIsOpen((prev) => !prev);
    };

    return (
        <div className="collapsibleList">
            <div className="collapsible-heading">
                <h6 className="collapsible-title">{title}</h6>
                <button type="button" className="collapsible-btn" onClick={handleFilterOpening}>
                    {!isOpen ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                    <FontAwesomeIcon icon={faChevronUp} />
                    )}
                </button>
            </div>

            <div className="border-bottom">
                <div>{isOpen && <div className="collapsible-content">{<ol>{listOfContent}</ol>}</div>}</div>
            </div>
        </div>
      );
    };
    
