import React from 'react';
import {Box} from "@material-ui/core";
import {Header} from "../MainPage/Header";
import forgotPassword from '../../assets/ChangePassword/secur.svg';

const styles = {
    textStyle: {
        fontFamily: 'Bahnschrift',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        width: 870,
        height: 165,
        marginTop: '5%'
    },
    infoBox: {
        backgroundColor: '#506287',
        minWidth: '100%',
        height: 912,
        display: 'flex',
        justifyContent: 'center',
    },
    iconStyle: {
        width: 600,
        height: 600,
        position: 'absolute',
        bottom: 0,
        marginBottom: '3%'
    }
};

export default function ResetPassword(props) {
    return (
        <Box>

            <Header onLoginClick={props.onLoginClick}/>

            <Box style={styles.infoBox}>
                <Box style={styles.textStyle}>
                Возникли проблемы с паролем?<br />
                К сожалению, на данный момент функция восстановления пароля по почте отсутствует <br />По всем вопросам, связаным с восстановлением пароля, обращайтесь к нашему специалисту
                <br /> <br /> <br />
                Даниил Дубицкий <br />
                danya_zayka@chmok.ru
                </Box>
                <img src={forgotPassword} alt='forgot pswd' style={styles.iconStyle}/>
            </Box>

        </Box>
    )
}