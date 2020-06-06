import React from "react";
import Header from '../Profile/Header';
import Themes from "./Themes";


export default function AllThemes(props) {

    return (
        <React.Fragment>

            <Header onLoginClick={props.onLoginClick}/>

            <Themes onLoginClick={props.onLoginClick}/>

        </React.Fragment>
    )

}