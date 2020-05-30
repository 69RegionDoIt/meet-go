import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {SHOW_MAIN_PAGE} from "../../../consts";

const styles={
    header: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Bahnschtift',
        color: '#37435a',
        marginLeft: 450,
    },
    buttonsBox: {
        float: 'right',
        marginRight: '3%',
        marginTop: -10,
    },
    button: {
        textTransform: 'none',
        marginLeft: 25,
        fontSize: 20,
        color: '#506287',
    },
};

const handleOnExitClick = (onExitClick) => () => {
    //TODO: разлогиним юзера

    onExitClick(SHOW_MAIN_PAGE);
};

export default function Header(props) {
    return(
        <Box style={styles.header}>
            Meet & Go
            <Box style={styles.buttonsBox}>
                <Button style={styles.button}> Помощь </Button>
                <Button style={styles.button}> О нас </Button>
                <Button style={styles.button} onClick={handleOnExitClick(props.onLoginClick)}> Выйти из профиля</Button>
            </Box>
        </Box>
    )

}