import React from "react";
import {withStyles} from "@material-ui/core";
import { TextField } from "@material-ui/core";

import styles from "./styles";
import login from '../../../../assets/login/login.svg';
import RegistrationButton from "../registration";

class LoginWindow extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <img src={login} alt="login img" className={classes.imgSize}/>
                <span className={classes.loginWindow}></span>
                <span className={`${classes.text} ${classes.enter}`}> Вход </span>
                <span className={`${classes.text} ${classes.login}`}> Логин </span>
                <TextField className={`${classes.input} ${classes.text} ${classes.loginInputShift}`} id="login" variant="outlined" />
                <span className={`${classes.text} ${classes.password}`}> Пароль </span>
                <TextField className={`${classes.input} ${classes.text} ${classes.passwordInputShift}`} id="password" type="password" variant="outlined" />
                <RegistrationButton />
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(LoginWindow);