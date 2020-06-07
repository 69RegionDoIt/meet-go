import React from "react";
import Box from "@material-ui/core/Box";
import {HEADER_HEIGHT} from "../../RegistrationPage/const";
import Button from "@material-ui/core/Button";

const styles={
    mainBox: {
        maxWidth: '25%',
        marginTop: 20,
        backgroundColor: '#506287',
        position: 'relative',
    },
    userPhoto: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        backgroundColor: '#fff',
        border: 'solid 1px #c2c2c2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        textAlign: 'center'
    },
    partnerPhoto:{
        width: 150,
        height: 150,
    },
    textStyle: {
        fontFamily: 'Bahnschrift',
        fontSize: 25,
        color: '#fff',
        position: 'absolute',
    },
    buttonStyle: {
        position: 'absolute',
        bottom: 0,
        fontFamily: 'Bahnschrift',
        fontSize: 20,
        color: '#fff',
        textTransform: 'none',
    },
    userInfoBox: {
        height: '50%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    },
    helpIconText: {
        fontFamily: 'Bahnschrift',
        fontSize: 20,
        color: '#d2d7db',
    },
    taskCounterBorder: {
        width: 280,
        height: 280,
        borderRadius: '50%',
        border: 'solid 1px #c2c2c2',
        backgroundColor: '#dceffd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 88,
    },
    taskCounter: {
        width: 255,
        height: 255,
        borderRadius: '50%',
        border: 'solid 1px #c2c2c2',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        fontFamily: 'Bahnschrift',
        fontSize: 87.5,
        color: '#506287',
    }
};

export default function UserInfo() {
    return (
        <Box style={{...styles.mainBox, height: 899}}>

            <Box style={styles.userInfoBox}>

                <span style={{...styles.textStyle, marginTop: 19}}>Имя пользователя</span>

                <Box style={{...styles.userPhoto, marginTop: 70}}>
                    <span style={{...styles.helpIconText}}>+ <br /> Добавить <br /> фото</span>
                </Box>

                <Box style={{...styles.userPhoto, ...styles.partnerPhoto, marginTop: 180, marginLeft: 100}}>
                    <span style={styles.helpIconText}>Ваш <br /> партнер</span>
                </Box>
            </Box>

            <Box style={styles.userInfoBox}>
                <span style={{...styles.textStyle, textAlign: 'center'}}> Количество <br /> выполненных заданий</span>

                <Box style={styles.taskCounterBorder}>
                    <Box style={styles.taskCounter}>
                        <span style={styles.counter}> 0/0 </span>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}