import React from 'react';
import Box from "@material-ui/core/Box";
import registrationIcon from '../../../assets/registration/registrationIcon.svg';
import RegistrationBox from "./RegistrationBox";

const styles = ({
    fullBackground: {
        backgroundColor: '#506287',
        minWidth: '100%',
        marginTop: 20,
    },
    iconSize: {
        width: 650,
        height: 650,
        marginTop: '6%',
        marginLeft: '15%',
    },

});

export default function RegistrationBody(props) {
    return (
        <Box style={{...styles.fullBackground, height: 899}}>

            <img src={registrationIcon} alt='registrationIcon' style={styles.iconSize} />

            <RegistrationBox
                onLoginClick={props.onLoginClick}
                setSession={props.setSession}/>

        </Box>
    )
}