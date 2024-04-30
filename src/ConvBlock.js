import React from "react"
import AIResponseBlock from "./AIResponseBlock";
import "./ConvBlock.css"

import methane_kg from "./knowledge_graphs/methane_kg.png"
import math_kg from "./knowledge_graphs/math_kg.png"


export default function ConvBlock(props){
    const styles = {
        backgroundColor: props.user === "AI" ? "#E8FAE3" : "#FDFD96"
    }
    let component = null;
    if (props.user === "AI"){
        if (props.content[0].substring(0, 23) === "This is the chatbot for"){
            const sentences = props.content?.map(e => <p className="content">{e}</p>)
            component = (
                <div>
                    <p className="content">{props.user}: {sentences}</p>
                    <br />
                </div>
                )
        } else if (props.content === "What is electron configuration?"){
            component = <AIResponseBlock 
                        content={["Electron configuration is the distribution of electrons of an atom or molecule in atomic or molecular orbitals. It describes how electrons are distributed in their atomic orbitals.", "For example, the electron configuration of the neon atom is 1s² 2s² 2p⁶, meaning that the 1s, 2s, and 2p subshells are occupied by two, two, and six electrons, respectively. Electronic configurations describe each electron as moving independently in an orbital, in an average field created by all other electrons.", "Knowledge of the electron configuration of different atoms is useful in understanding the structure of the periodic table of elements, for describing the chemical bonds that hold atoms together, and in understanding the chemical formulas of compounds and the geometries of molecules.\nIn certain conditions, electrons are able to move from one configuration to another by the emission or absorption of a quantum of energy, in the form of a photon.", "I hope this helps! Let me know if you have any other questions."]}
                        reference={['"Chemistry: An Atoms First Approach" 3rd Ed (Asia edition); 2021 : P.115-120']} 
                        imgSrc={methane_kg}
                        links={["https://chem.libretexts.org/Courses/Valley_City_State_University/Chem_115/Chapter_2%3A_Atomic_Structure/2.4_Electron_Configurations", "https://www.chem.fsu.edu/chemlab/chm1045/e_config.html"]}
                        courses={["CHEM1008 Ch7: Electrons in Atoms and the Periodic Table (PART II)"]}
                        props={props}
                        />
        } else if (props.content === "Why are we doing differentiation and integration?"){
            component = <AIResponseBlock 
                        content={["Differentiation and integration are fundamental concepts in calculus, which is a branch of mathematics. They have wide-ranging applications in various fields. Here’s why we use them: ", "1. Differentiation: ", "⠀⠀I.	It helps us understand the rate of change of a function. For instance, in physics, the rate of change ⠀⠀⠀of displacement with respect to time gives us velocity, and the rate of change of velocity gives us ⠀⠀⠀acceleration. ", "⠀⠀II.	It’s used in optimizing problems where we need to find the maximum or minimum values of a ⠀⠀⠀function. This is useful in fields like economics, statistics, engineering, etc.", "⠀", "2. Integration: ", "⠀⠀I. It is essentially the reverse process of differentiation. It helps us calculate the total accumulation of ⠀⠀⠀quantities. For example, integrating velocity over time gives us the total distance traveled.", "⠀⠀II. It’s used in calculating areas under curves, volumes of solids, etc. This has applications in fields like ⠀⠀⠀physics, engineering, computer graphics, etc. ", "⠀", "In summary, differentiation and integration are powerful mathematical tools that help us understand and solve complex problems in various scientific and engineering fields. They are fundamental to our understanding of the world around us.", "I hope this helps! Let me know if you have any other questions."]}
                        reference={['Calculus – James Stewart. BROOKS/COLE : P.143-153 & P.379-399']} 
                        imgSrc={math_kg}
                        links={["https://www.cuemath.com/differentiation-and-integration-formula/", "https://byjus.com/maths/differentiation-integration/"]}
                        courses={["Math1013 Ch2: Derivatives, Ch3: Integral", "Math1014 Ch6: Applications of Integration, Ch7: Improper integrals"]}
                        props={props}
                        />
        } else {
            component = <AIResponseBlock 
                        content={["Template response"]}
                        reference={["template ref1", "template ref2"]} 
                        imgSrc={""}
                        links={["template link1", "template link2"]}
                        courses={["template course1", "template course2"]}
                        props={props}
                        />
        }
    } else {
        component = (
        <div className="ConvBlockContainer">
            <p className="content">{props.user}:</p> 
            <p className="content">{props.content}</p>
            <br />
        </div>
        )
    }
    return (
        <div className="block" style={styles}>
            {component}
        </div>
    )
}