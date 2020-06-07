import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {SHOW_ABOUT_US, SHOW_HELP} from "../../../consts";

const styles = ({
    header: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Bahnschtift',
        color: '#37435a',
        marginLeft: 300,
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
        fontFamily: 'Bahnschrift',
    },
});

const handleOnHelpClick = (onHelpClick) => () => {
    onHelpClick(SHOW_HELP);
};

const handleAboutUsClick = (aboutUs) => () => {
    aboutUs(SHOW_ABOUT_US);
};

export default function Header(props) {
    return (
        <Box style={styles.header}>
            <span style={{fontFamily: 'Bahnschrift'}}>Meet & Go</span>
            <Box style={styles.buttonsBox}>
                <Button style={styles.button} onClick={handleOnHelpClick(props.onLoginClick)}>Помощь</Button>
                <Button style={styles.button} onClick={handleAboutUsClick(props.onLoginClick)}>О нас</Button>
            </Box>
        </Box>
    )
}