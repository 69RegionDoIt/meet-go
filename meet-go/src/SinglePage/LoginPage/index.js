import React from 'react';
import Header from "./Header";
import LoginBody from "./LoginBody";


export default function LoginPage(props) {
    return (
        <div>

            <Header onLoginClick={props.onLoginClick}/>

            <LoginBody
                onLoginClick={props.onLoginClick}
                setSession={props.setSession}/>

        </div>
    )
}