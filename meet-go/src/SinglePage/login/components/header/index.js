import React from "react";
import {withStyles} from "@material-ui/core";
import {Button} from "@material-ui/core";

import styles from "./styles";

class LoginHeader extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.headerBox}>
                <Button className={`${classes.text} ${classes.aboutUs}`}> О нас </Button>
                <Button className={`${classes.text} ${classes.help}` }> Помощь </Button>
                <Button className={`${classes.text} ${classes.headerText}`}> Meet & Go </Button>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(LoginHeader);