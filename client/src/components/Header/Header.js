import React from "react";
import './Header.css'
import {Forum, Person} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import logo from '../../images/tinder-2.svg'

export const Header = () => {
    return (
        <div className={"header"}>
            <IconButton>
                <Person fontSize={"large"} className={"header__icon"}/>
            </IconButton>
            <img src={logo} className={"header__logo"} alt={"Header"}/>
            <IconButton>
                <Forum fontSize={"large"} className={"header__icon"}/>
            </IconButton>
        </div>
    )
}

export default Header
