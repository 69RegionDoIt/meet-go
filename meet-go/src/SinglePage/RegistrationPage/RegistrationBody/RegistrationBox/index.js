import React from "react";
import Box from "@material-ui/core/Box";
import {InputBase} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import {SHOW_CONTINUE_REGISTRATION_PAGE} from "../../../../consts";
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

const handleOnRegistrationButtonClick = (onLoginClick) => () => {
    //TODO: тут летит запрос на сервер и открываем страницу юзера

    onLoginClick(SHOW_CONTINUE_REGISTRATION_PAGE);
};

export default function RegistrationBox(props) {

    return (
        <Box style={styles.boxStyle}>
            <span style={{...styles.textView, ...styles.header}}>Регистрация</span>

            <Box style={{position: 'relative', height: 82, marginTop: 55}}>
                <span style={{...styles.textView, marginLeft: 44}}> Имя </span>
                <InputBase style={{...styles.inputField, width: 210, marginLeft: 44}}/>
                <span style={{...styles.textView, marginLeft: 254}}>Фамилия</span>
                <InputBase style={{...styles.inputField, width: 210, marginLeft: 254}}/>
            </Box>

            <Box style={{position: 'relative', height: 82, marginTop: 26, marginLeft: 44}}>
                <span style={{...styles.textView}}>Пол</span>
                <FormControl style={{bottom: 0, position: 'absolute',}}>
                    <NativeSelect
                        id="demo-customized-select-native"
                        // onChange={handleChange}
                        style={{backgroundColor: '#fff', border: 'solid 1px #a8a7a7',
                            height: 50, width: 420}}
                        input={<InputBase />}
                    >
                        <option aria-label="None" value="" />
                        <option value={1}>Мужской</option>
                        <option value={0}>Женский</option>
                     </NativeSelect>
                </FormControl>
            </Box>

            <Box style={{position: 'relative', height: 82, marginTop: 25, marginLeft: 44}}>
                <span style={{...styles.textView}}>Логин</span>
                <InputBase style={{...styles.inputField, width: 420}}/>
            </Box>

            <Box style={{position: 'relative', height: 82, marginTop: 24, marginLeft: 44}}>
                <span style={{...styles.textView}}>E-mail</span>
                <InputBase style={{...styles.inputField, width: 420}}/>
            </Box>

            <Box style={{position: 'relative', height: 82, marginTop: 25, marginLeft: 44}}>
                <span style={{...styles.textView}} >Пароль</span>
                <InputBase style={{...styles.inputField, width: 420}} type="password"/>
            </Box>

            <Box style={{position: 'relative', height: 82, marginTop: 25, marginLeft: 44}}>
                <span style={{...styles.textView}}>Пароль повторно</span>
                <InputBase style={{...styles.inputField, width: 420}} type="password"/>
            </Box>

            <Button
                style={styles.regButton}
                onClick={handleOnRegistrationButtonClick(props.onLoginClick)}>
                Зарегистрироваться</Button>

        </Box>
    )

}