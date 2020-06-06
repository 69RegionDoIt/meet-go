import React from 'react';
import Box from "@material-ui/core/Box";
import {HEADER_HEIGHT} from "../const";
import registrationIcon from '../../../assets/registration/registrationIcon.svg';
import RegistrationBox from "./RegistrationBox";

const styles = ({
    fullBackground: {
        backgroundColor: '#506287',
        minWidth: '100%',
        marginTop: 20,
    },
    iconSize: {
        width: 636,
        height: 550,
        marginTop: '10%',
        marginLeft: '15%',
    },

});

export default function RegistrationBody(props) {
    return (
        <Box style={{...styles.fullBackground, minHeight: document.body.clientHeight - HEADER_HEIGHT - 2}}>

            <img src={registrationIcon} alt='registrationIcon' style={styles.iconSize} />

            <RegistrationBox
                onLoginClick={props.onLoginClick}
                setSession={props.setSession}/>

        </Box>
    )
}