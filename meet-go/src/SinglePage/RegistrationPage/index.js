import React from 'react';
import Header from "../LoginPage/Header";
import RegistrationBody from "./RegistrationBody";


export default function RegistrationPage(props) {
    return (
        <React.Fragment>

            <Header/>

            <RegistrationBody
                onLoginClick={props.onLoginClick}
                setSession={props.setSession}/>

        </React.Fragment>
    )
}