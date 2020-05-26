import React from "react";
import LoginHeader from "./components/header";
import LoginWindow from "./components/content";



class Login extends React.Component {

    render() {

        return (
            <React.Fragment>
                <LoginHeader />
                <LoginWindow />
            </React.Fragment>
        );
    }
}

export default Login;