import React from 'react';
import { withStyles } from "@material-ui/core";
import { Button} from "@material-ui/core";

import styles from "./styles";

class RegistrationButton extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={`${classes.text} ${classes.regText}`}>
                    или<br />если у Вас еще нет аккаунта
                </div>
                <Button className={`${classes.text} ${classes.regBtn}`}> <label className={classes.regBtnText}>Зарегистрироваться</label> </Button>
                <Button className={`${classes.text} ${classes.forgotBtn}`}> Забыли пароль? </Button>
            </React.Fragment>
        );
    }

}

export default withStyles(styles, {withTheme: true})(RegistrationButton);