import React from "react";
import {Box} from "@material-ui/core";
import {InputBase} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {SHOW_REGISTRATION_PAGE} from "../../../../consts";

//TODO: Вынести эти стили в отдельный файл
const styles = {
    boxStyle: {
        width: 500,
        height: 580,
        float: 'right',
        backgroundColor: '#8692ac',
        marginTop: '10%',
        marginRight: '10%',
        position: 'relative',
    },
    textView: {
        fontFamily: 'Bahnschrift',
        fontSize: 20,
        color: '#fff',
    },
    header: {
        fontSize: 25,
        marginLeft: '45%',
        marginTop: 16,
        position: 'absolute',
    },
    inputField: {
        width: 400,
        height: 50,
        backgroundColor: '#fff',
        border: 'solid 1px #a8a7a7',
        bottom: 0,
    },
    login: {
        marginLeft: 50,
        position: 'absolute',
    },
    registrationButton: {
        position: 'absolute',
        textTransform: 'none',
        fontSize: 25,
        color: '#506287',
        width: 280,
        height: 55,
        backgroundColor: '#fff',
        marginLeft: 110,
        marginTop: 65,
        fontFamily: 'Bahnschrift',
    },
    registrationText: {
        position: 'absolute',
        textAlign: 'center',
        marginLeft: 119,
        fontFamily: 'Bahnschrift',
    },
    forgotPassword: {
        position: 'absolute',
        bottom: 0,
        fontSize: 20,
        color: '#fff',
        textTransform: 'none',
        marginLeft: 176,
        fontFamily: 'Bahnschrift',
    },
};

const handleOnRegistrationButtonClick = (onLoginClick) => () => {
    //TODO: тут летит запрос на сервер и есть все ок, пускаем пользователя в профиль

    onLoginClick(SHOW_REGISTRATION_PAGE);
};

export default function LoginBox(props) {
    return (
        <Box style={styles.boxStyle}>
            <span style={{...styles.textView, ...styles.header}}>Вход</span>

            <Box style={{position: 'relative', height: 82, marginTop: 110,}}>

                <span style={{...styles.textView, ...styles.login}}>Логин</span>

                <InputBase
                    style={{...styles.inputField, ...styles.login}}
                    inputProps={{'aria-label': 'naked'}}/>
            </Box>

            <Box style={{position: 'relative', height: 82, marginTop: 35,}}>

                <span style={{...styles.textView, ...styles.login}}>Пароль</span>

                <InputBase style={{...styles.inputField, ...styles.login}}
                           type="password"
                           inputProps={{'aria-label': 'naked'}} />
            </Box>

            <Box style={{position: 'relative', height: 205, marginTop: 66}}>

                <text style={{...styles.registrationText, ...styles.textView}}> или <br /> если у Вас еще нет аккаунта</text>

                <Button style={styles.registrationButton} onClick={handleOnRegistrationButtonClick(props.onLoginClick)}>Зарегистрироваться</Button>

                <Button style={styles.forgotPassword}>Забыли пароль?</Button>

            </Box>
        </Box>
    )
}