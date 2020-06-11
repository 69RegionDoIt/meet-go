import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {SHOW_ABOUT_US, SHOW_HELP, SHOW_MAIN_PAGE} from "../../../consts";

const styles={
    header: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Bahnschrift',
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
        fontFamily: 'Bahnschrift',
        marginLeft: 25,
        fontSize: 20,
        color: '#506287',
    },
};

export default class Header extends React.Component {

    handleOnHelpClick = () => {
        this.props.onLoginClick(SHOW_HELP);
    };

    handleOnExitClick = () => {
        this.props.setSession("", "");
        this.props.onLoginClick(SHOW_MAIN_PAGE);
    };

    handleAboutUsClick = () => {
        this.props.onLoginClick(SHOW_ABOUT_US);
    };

    render() {
        return (
            <Box style={styles.header}>
                Meet & Go
                <Box style={styles.buttonsBox}>
                    <Button style={styles.button} onClick={this.handleOnHelpClick}> Помощь </Button>
                    <Button style={styles.button} onClick={this.handleAboutUsClick}> О нас </Button>
                    <Button style={styles.button} onClick={this.handleOnExitClick}> Выйти из профиля</Button>
                </Box>
            </Box>
        )
    }
}