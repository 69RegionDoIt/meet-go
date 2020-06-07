import React from 'react';
import {Header} from "../MainPage/Header";
import Box from '@material-ui/core/Box';
import RegistrationBody from "./RegistrationBody";


export default function RegistrationPage(props) {
    return (
        <Box>

            <Header onLoginClick={props.onLoginClick}/>

            <RegistrationBody
                onLoginClick={props.onLoginClick}
                setSession={props.setSession}/>

        </Box>
    )
}