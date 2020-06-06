import React from "react";
import {Box} from "@material-ui/core";
import {InputBase} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {API_ADDR, LOGIN_API, SHOW_PROFILE, SHOW_REGISTRATION_PAGE} from "../../../../consts";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

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
        color: '#fff',
        width: 280,
        height: 55,
        backgroundColor: '#8692ac',
        marginLeft: 110,
        marginTop: 65,
        fontFamily: 'Bahnschrift',
        bottom: 0,
    },
    registrationText: {
        position: 'absolute',
        textAlign: 'center',
        marginLeft: 119,
        fontFamily: 'Bahnschrift',
        marginTop: 65,
    },
    forgotPassword: {
        position: 'absolute',
        bottom: 0,
        fontSize: 15,
        color: '#fff',
        textTransform: 'none',
        marginLeft: 176,
        fontFamily: 'Bahnschrift',
    },
    loginButton: {
        position: 'absolute',
        textTransform: 'none',
        fontSize: 25,
        color: '#506287',
        width: 280,
        height: 55,
        backgroundColor: '#fff',
        marginLeft: 110,
        fontFamily: 'Bahnschrift',
    },
};

export default class LoginBox extends React.Component {

    state = {
        login: '',
        password: '',
        isError: false,
    };

    handleOnRegistrationButtonClick = () => {
        this.props.onLoginClick(SHOW_REGISTRATION_PAGE);
    };

    handleOnLoginButtonCLick = () => {
         const requestData = {
            identity: this.state.login,
            password: this.state.password
        };

        if (requestData.identity === '' || requestData.password === '') {
            this.setState({isError: true});
            return;
        }

        fetch("https://cors-anywhere.herokuapp.com/" + API_ADDR + LOGIN_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            mode: 'cors',
            body: JSON.stringify(requestData)
        })
            .then(response => {
                this.props.setSession(response.headers.get('Session_id'), response.headers.get('User_id'));
                return response.json();
            })
            .then(body => {
                if (body.element !== undefined && body.element === 'success') {
                    this.props.onLoginClick(SHOW_PROFILE);
                } else {
                    this.setState({isError: !this.state.isError});
                }
            });
    };

    handleOnLoginChange = (event) => {
        this.setState({login: event.target.value});
    };

    handleOnPasswordChange = (event) => {
        this.setState({password: event.target.value});
    };

    handleAlertClose = () => {
        this.setState({isError: !this.state.isError});
    };

    render() {

        const {isError} = this.state;

        return (
            <Box style={styles.boxStyle}>
                <span style={{...styles.textView, ...styles.header}}>Вход</span>

                <Box style={{position: 'relative', height: 82, marginTop: 110,}}>

                    <span style={{...styles.textView, ...styles.login}}>Логин</span>

                    <InputBase
                        style={{...styles.inputField, ...styles.login}}
                        inputProps={{'aria-label': 'naked'}}
                        onChange={this.handleOnLoginChange}/>
                </Box>

                <Box style={{position: 'relative', height: 113, marginTop: 35,}}>

                    <span style={{...styles.textView, ...styles.login}}>Пароль</span>

                    <InputBase style={{...styles.inputField, ...styles.login, marginBottom: 35,}}
                               type="password"
                               inputProps={{'aria-label': 'naked'}}
                               onChange={this.handleOnPasswordChange}/>

                    <Button style={{...styles.forgotPassword, marginLeft: '63%',}}>Забыли пароль?</Button>

                </Box>

                <Box style={{position: 'relative', height: 205, marginTop: 29}}>

                    <Button style={styles.loginButton} onClick={this.handleOnLoginButtonCLick}>Войти</Button>

                    <text style={{...styles.registrationText, ...styles.textView}}> или <br /> если у Вас еще нет аккаунта</text>

                    <Button style={styles.registrationButton} onClick={this.handleOnRegistrationButtonClick}>Зарегистрироваться</Button>

                </Box>

                { !!isError &&
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={true}
                    autoHide1Duration={6000}
                    onClose={this.handleAlertClose}
                    message="Неверный логин или пароль"
                    action={<React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleAlertClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>}
                />}
            </Box>
        );
    }
}
