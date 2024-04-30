import React, {useState, useEffect} from "react"
import { slide as Menu } from "react-burger-menu"
import "./BurgerMenu.css"

// references:
// https://www.makeuseof.com/react-create-collapsible-side-navigation-menu/
// https://ordinarycoders.com/blog/article/react-icons-guide
// https://www.npmjs.com/package/react-burger-menu
// https://negomi.github.io/react-burger-menu/

export default function BurgerMenu(){
    const [course, setCourse] = useState(null)

    // if (localStorage.getItem("course") !== "" && localStorage.getItem("course") !== course){
    //     setCourse(localStorage)
    // }
    useEffect(() => {
        let storedCourse = localStorage.getItem("course")
        if (storedCourse !== null){
            setCourse(localStorage.getItem("course"))
        } else {
            setCourse("CHEM1020")
        }
    }, [])
    
    useEffect(() => {
        if (course !== null){
            localStorage.setItem("course", course)
        }
    }, [course])

    return (
        <Menu width={ 250 }>
             <a id="home" className="menu-item" href="" onClick={() => setCourse("MATH2011")}>MATH2011</a>
             <a id="home" className="menu-item" href="" onClick={() => setCourse("COMP2211")}>COMP2211</a>
             <a id="home" className="menu-item" href="" onClick={() => setCourse("CHEM1020")}>CHEM1020</a>
        </Menu>
    )
}
