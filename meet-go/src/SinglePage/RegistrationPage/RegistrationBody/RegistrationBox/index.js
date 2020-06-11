import React from "react";
import Box from "@material-ui/core/Box";
import {InputBase} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import {API_ADDR, REGISTRATION_API, SHOW_CONTINUE_REGISTRATION_PAGE} from "../../../../consts";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
//TODO: Вынести эти стили в отдельный файл
const styles = {
    boxStyle: {
        width: 510,
        height: 790,
        float: 'right',
        backgroundColor: '#8692ac',
        marginTop: '2.5%',
        marginRight: '10%',
        position: 'relative',
    },
    textView: {
        fontFamily: 'Bahnschrift',
        fontSize: 20,
        color: '#fff',
        position: 'absolute'
    },
    header: {
        fontSize: 25,
        marginLeft: '35%',
        marginTop: 14,
    },
    inputField: {
        backgroundColor: '#fff',
        border: 'solid 1px #a8a7a7',
        height: 50,
        bottom: 0,
        position: 'absolute',
        paddingLeft: 10,
        fontSize: 18,
    },
    regButton: {
        bottom: 0,
        position: 'absolute',
        textTransform: 'none',
        backgroundColor: '#fff',
        width: 280,
        height: 55,
        fontSize: 25,
        color: '#506287',
        marginLeft: 119,
        marginBottom: 25,
        fontFamily: 'Bahnschrift',
    }

};

export default class RegistrationBox extends React.Component{

    state = {
        firstName: '',
        lastName: '',
        gender: '',
        login: '',
        eMail: '',
        password: '',
        confirmPassword: '',
        errorMsg: '',
        isError: false,
    };

    handleOnRegistrationButtonClick = () => {
        const {firstName, lastName, gender, login, eMail, password, confirmPassword} = this.state;

        if (!firstName || !lastName || !gender || !login || !eMail || !password || !confirmPassword) {
            this.setState({errorMsg: 'Заполните все поля.', isError: true});
            return;
        }

        if (password.length < 8) {
            this.setState({errorMsg: 'Пароль не должен быть короче 8 символов.', isError: true});
            return;
        }

        if (password !== confirmPassword) {
            this.setState({errorMsg: 'Пароли не совпадают.', isError: true});
            return;
        }

/*        if(!/^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i.test(login)) {
            this.setState({errorMsg:"Логин содержит некорректные символы.", isError: true});
            return;
        }*/

        if (!/^[\w.+-]+@[\w.+-]+\.[a-zA-Z]{2,8}$/i.test(eMail)) {
            this.setState({errorMsg:"Неверный формат email.", isError: true});
            return;
        }

        if(!/(?=.*[0-9])(?=.*[_!@.%,?\-+~><=\[\]}{*])(?=.*[a-z])(?=.*[A-Z])/i.test(password)) {
            this.setState({
                errorMsg: "Пароль должен состоять из букв латинского алфавита (A-z), арабских цифр (0-9) и специальных символов.",
                isError: true
            });
            return;
        }
        const requestData = {
            userPrivate: {
                userId: login,
                email: eMail,
                password
            },
            userInfo: {
                firstName,
                lastName,
                private: 0,
                picture: 'no_pic',
                backgroundPicture: 'no_pic',
                gender
            }
        };

        fetch("https://cors-anywhere.herokuapp.com/" + API_ADDR + REGISTRATION_API, {
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
                    this.props.onLoginClick(SHOW_CONTINUE_REGISTRATION_PAGE);
                } else {
                    const errorMsg = body.error.message;
                    if(errorMsg === '\'userIdField\' not unique') {
                        this.setState({isError: !this.state.isError,
                            errorMsg: 'Пользователь с таким логином уже существует.'});
                    } else if ( errorMsg === '\'emailField\' already used') {
                        this.setState({isError: !this.state.isError,
                            errorMsg: 'Введенный e-mail уже используется.'})
                    } else {
                        this.setState({isError: !this.state.isError,
                            errorMsg: errorMsg})
                    }
                }
            })
    };

    handleOnChange = (key) => (event) => {
        this.state[key] = event.target.value;
    };

    handleSetGender = (event) => {
        switch (event.target.value) {
            case '0':
                this.state['gender'] = 'female';
                break;
            case '1':
                this.state['gender'] = 'male';
                break;
            case '2':
                this.state['gender'] = 'another';
                break;
        }
    };

    handleAlertClose = () => {
        this.setState({isError: !this.state.isError, errorMsg: ''});
    };

    render() {

        const {isError, errorMsg} = this.state;

        return (
            <Box style={styles.boxStyle}>
                <span style={{...styles.textView, ...styles.header}}>Регистрация</span>

                <Box style={{position: 'relative', height: 82, marginTop: 55}}>
                    <span style={{...styles.textView, marginLeft: 44}}> Имя </span>
                    <InputBase style={{...styles.inputField, width: 210, marginLeft: 44}}
                    onChange={this.handleOnChange('firstName')}/>
                    <span style={{...styles.textView, marginLeft: 254}}>Фамилия</span>
                    <InputBase style={{...styles.inputField, width: 210, marginLeft: 254}}
                    onChange={this.handleOnChange('lastName')}/>
                </Box>

                <Box style={{position: 'relative', height: 82, marginTop: 26, marginLeft: 44}}>
                    <span style={{...styles.textView}}>Пол</span>
                    <FormControl style={{bottom: 0, position: 'absolute',}}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            onChange={this.handleSetGender}
                            style={{backgroundColor: '#fff', border: 'solid 1px #a8a7a7',
                                height: 50, width: 420}}
                            input={<InputBase />}
                        >
                            <option aria-label="None" value="" />
                            <option value={2}>Другой</option>
                            <option value={1}>Мужской</option>
                            <option value={0}>Женский</option>
                        </NativeSelect>
                    </FormControl>
                </Box>

                <Box style={{position: 'relative', height: 82, marginTop: 25, marginLeft: 44}}>
                    <span style={{...styles.textView}}>Логин</span>
                    <InputBase style={{...styles.inputField, width: 420}}
                    onChange={this.handleOnChange('login')}/>
                </Box>

                <Box style={{position: 'relative', height: 82, marginTop: 24, marginLeft: 44}}>
                    <span style={{...styles.textView}}>E-mail</span>
                    <InputBase style={{...styles.inputField, width: 420}}
                    onChange={this.handleOnChange('eMail')}/>
                </Box>

                <Box style={{position: 'relative', height: 82, marginTop: 25, marginLeft: 44}}>
                    <span style={{...styles.textView}} >Пароль</span>
                    <InputBase style={{...styles.inputField, width: 420}} type="password"
                    onChange={this.handleOnChange('password')}/>
                </Box>

                <Box style={{position: 'relative', height: 82, marginTop: 25, marginLeft: 44}}>
                    <span style={{...styles.textView}}>Пароль повторно</span>
                    <InputBase style={{...styles.inputField, width: 420}} type="password"
                    onChange={this.handleOnChange('confirmPassword')}/>
                </Box>

                <Button
                    style={styles.regButton}
                    onClick={this.handleOnRegistrationButtonClick}>
                    Зарегистрироваться</Button>

                { !!isError &&
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={true}
                    autoHide1Duration={6000}
                    onClose={this.handleAlertClose}
                    message={errorMsg}
                    action={<React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleAlertClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>}
                />}
            </Box>
        )
    }
}