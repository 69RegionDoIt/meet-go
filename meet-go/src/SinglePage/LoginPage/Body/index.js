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

export default function Body(props) {
    return(
        <Box style={{...styles.fullBackground, minHeight: document.body.clientHeight + TO_FULL_WINDOW}}>
            <img src={loginIcon} alt='loginIcon' style={styles.iconSize}/>
            <LoginBox onLoginClick={props.onLoginClick}/>
        </Box>
    )
}