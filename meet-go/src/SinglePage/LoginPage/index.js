import React from 'react';
import Header from "./Header";
import LoginBody from "./LoginBody";


export default function LoginPage(props) {
    return (
        <div>

            <Header/>

            <LoginBody onLoginClick={props.onLoginClick}/>

        </div>
    )
}