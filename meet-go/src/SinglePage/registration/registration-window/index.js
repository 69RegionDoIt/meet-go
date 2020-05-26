import React from 'react';
import {TextField, withStyles} from "@material-ui/core";
import regImg from "../../../assets/registration/registration.svg";

import styles from './styles';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

class RegistrationWindow extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <img src={regImg} className={classes.imgSize}/>
                <div className={classes.regBox}></div>

                <label className={`${classes.text} ${classes.regLabel}`}> Регистрация </label>
                <label className={`${classes.text} ${classes.fNameLabel}`}>Имя</label>
                <label className={`${classes.text} ${classes.lNameLabel}`}>Фамилия</label>
                <TextField className={`${classes.lFName} ${classes.fNameInput}`} id="name" variant="outlined" />
                <TextField className={`${classes.lFName} ${classes.lNameInput}`} id="name" variant="outlined" />
                <label className={`${classes.genderLabel}`}>Пол</label>
                <FormControl variant="outlined" className={classes.genderInput}>
                    {/*<InputLabel htmlFor="outlined-age-native-simple"></InputLabel>*/}
                    <Select
                        native
                        // value={state.age}
                        // onChange={}
                        inputProps={{
                            name: 'gender',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={1}>Мужской</option>
                        <option value={0}>Женский</option>
                    </Select>
                </FormControl>



                <label className={`${classes.loginLabel}`}>Логин</label>
                <TextField className={`${classes.loginInput}`} id="login" variant="outlined" />
                <label className={`${classes.emailLabel}`}>E-mail</label>
                <TextField className={`${classes.emailInput}`} id="email" variant="outlined" />

                <label className={`${classes.passwordLabel}`}>Пароль</label>
                <TextField className={`${classes.passwordInput}`} id="password" variant="outlined" />

                <label className={`${classes.repeatLabel}`}>Пароль повторно</label>
                <TextField className={`${classes.repeatInput}`} id="repeatPassword" variant="outlined" />


            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(RegistrationWindow);