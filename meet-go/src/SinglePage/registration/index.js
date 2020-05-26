import React from "react";
import LoginHeader from "../login/components/header";
import RegistrationWindow from "./registration-window";


class Registration extends React.Component {
    render() {
        return (
            <React.Fragment>
                <LoginHeader />
                <RegistrationWindow />
            </React.Fragment>
        )
    }
}

export default Registration;