import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";


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
        marginBottom: 50,
    },
});



export default function HelloComponent(props) {
    return(
        <Box style={styles.text}>
            <span> Тут должен быть какой то текст, который должен придумать Паша </span>
            <Button style={styles.button} onClick={props.onLoginClick}> Войти </Button>
        </Box>
    )
}