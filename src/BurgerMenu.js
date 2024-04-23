import React from "react"
import { slide as Menu } from "react-burger-menu"
import "./BurgerMenu.css"

// references:
// https://www.makeuseof.com/react-create-collapsible-side-navigation-menu/
// https://ordinarycoders.com/blog/article/react-icons-guide
// https://www.npmjs.com/package/react-burger-menu
// https://negomi.github.io/react-burger-menu/

export default function BurgerMenu(){
    return (
        <Menu width={ 250 }>
             <a id="home" className="menu-item" href="">EMIA2020</a>
             <a id="home" className="menu-item" href="">COMP2211</a>
             <a id="home" className="menu-item" href="">CHEM1020</a>
        </Menu>
    )
}
