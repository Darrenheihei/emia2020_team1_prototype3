import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/fontawesome-free-solid";
import "./CollapsibleList.css"
import "./KnowledgeGraph.css"

export default function KnowledgeGraph({ open, imgSrc }){
    const [isOpen, setIsOpen] = useState(open);
  
    const handleFilterOpening = () => {
      setIsOpen((prev) => !prev);
    };

    return (
        <div className="collapsibleList">
            <div className="collapsible-heading">
                <h6 className="collapsible-title">Knowledge Graph</h6>
                <button type="button" className="collapsible-btn" onClick={handleFilterOpening}>
                    {!isOpen ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                    <FontAwesomeIcon icon={faChevronUp} />
                    )}
                </button>
            </div>

            <div className="border-bottom">
                <div>{isOpen && 
                    <div className="collapsible-content">
                        <p className="KnowledgeGraphDescription">Here are other concepts related to the question you asked. You may find them interesting.</p>
                        <div className="ImgContainer">
                            <img src={imgSrc} alt="Template knowledge graph" className="KnowledgeGraphImg" />
                        </div>
                    </div>}</div>
            </div>
        </div>
      );
    };
    
