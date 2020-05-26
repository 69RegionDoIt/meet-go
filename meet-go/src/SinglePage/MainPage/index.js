import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import HelloComponent from "./HelloComponent";

export default function MainPage(props) {

    console.log(props);
    return (
        <div>
            <Header/>
            <Slider/>
            <HelloComponent onLoginClick={props.onLoginClick}/>
        </div>
    )
}