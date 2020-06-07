import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {SHOW_LOGIN_PAGE} from "../../../consts";


const styles = ({
    text: {
        fontSize: 27,
        fontFamily: 'Bahnschrift',
        color: '#506287',
        textAlign: 'center',
        margin: '0 auto',
    },
    button: {
        textTransform: 'none',
        fontSize: 20,
        backgroundColor: '#506287',
        color: '#fff',
        width: 280,
        height: 70,
        position: 'absolute',
        bottom: 0,
        left: '43%',
        marginBottom: 150,
    },
});

const handleOnLoginClick = (onLoginClick) => () => {
    onLoginClick(SHOW_LOGIN_PAGE);
};

export default function HelloComponent(props) {
    return(
        <Box style={styles.text}>
            <Button style={styles.button} onClick={handleOnLoginClick(props.onLoginClick)}> Войти </Button>
        </Box>
    )
}