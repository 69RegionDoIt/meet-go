import React from 'react';
import Header from "./Header";
import Body from "./Body";


export default function LoginPage(props) {
    return (
        <div>
            <Header/>
            <Body onLoginClick={props.onLoginClick}/>
        </div>
    )
}