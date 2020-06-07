import React from "react";
import {Box} from "@material-ui/core";
import {TO_FULL_WINDOW} from "./const";
import loginIcon from '../../../assets/login/loginIcon.svg';
import LoginBox from "./Components/LoginBox";

const styles = ({
    fullBackground: {
        backgroundColor: '#506287',
        minWidth: '100%',
        marginTop: 20,
    },
    iconSize: {
        width: 952,
        height: 697,
        marginTop: '7%',
        marginLeft: '7%',
    }
});

export default function LoginBody(props) {
    return(
        <Box style={{...styles.fullBackground, height: 899}}>

            <img src={loginIcon} alt='loginIcon' style={styles.iconSize}/>

            <LoginBox
                onLoginClick={props.onLoginClick}
                setSession={props.setSession}/>

        </Box>
    )
}