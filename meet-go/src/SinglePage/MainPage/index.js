import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import HelloComponent from "./HelloComponent";

export default function MainPage(props) {
    return (
        <div>
            <Header onLoginClick={props.onLoginClick}/>
            <Slider/>
            <HelloComponent onLoginClick={props.onLoginClick}/>
        </div>
    )
}