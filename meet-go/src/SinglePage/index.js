import React, {Component} from 'react';
import MainPage from "./MainPage";
import {connect} from 'react-redux';
import {setSession, setShowingWindow} from "./actions/PageActions";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import {
    SHOW_ABOUT_US,
    SHOW_CONTINUE_REGISTRATION_PAGE, SHOW_FORGOT_PASSWORD, SHOW_HELP,
    SHOW_LOGIN_PAGE,
    SHOW_MAIN_PAGE,
    SHOW_PROFILE,
    SHOW_REGISTRATION_PAGE
} from "../consts";
import Profile from "./Profile";
import AllThemes from "./AllThemes";
import {bindActionCreators} from "redux";
import ResetPassword from "./ResetPassword";
import Help from "./Help";
import AboutUs from "./AboutUs";



class SinglePage extends Component {

    handleSetSession = (sessionId, userId) => {
        this.props.setSession(sessionId, userId);
    };

    handleOnLoginButtonClick = (windowIndex) => {
        this.props.setShowingWindow(windowIndex);
    };

    render() {
        const {showingWindow, sessionId, userId} = this.props;
        return (
            <div>
                {showingWindow === SHOW_MAIN_PAGE &&
                <MainPage onLoginClick={this.handleOnLoginButtonClick}
                          setSession={this.handleSetSession}/>}

                {showingWindow === SHOW_LOGIN_PAGE &&
                <LoginPage
                    onLoginClick={this.handleOnLoginButtonClick}
                    setSession={this.handleSetSession}/>}

                {showingWindow === SHOW_REGISTRATION_PAGE &&
                <RegistrationPage
                    onLoginClick={this.handleOnLoginButtonClick}
                    setSession={this.handleSetSession}/>}

                {showingWindow === SHOW_CONTINUE_REGISTRATION_PAGE &&
                <AllThemes onLoginClick={this.handleOnLoginButtonClick}/>}

                {showingWindow === SHOW_PROFILE &&
                <Profile onLoginClick={this.handleOnLoginButtonClick}
                         setSession={this.handleSetSession}
                         session={{sessionId, userId}}/>}

                {showingWindow === SHOW_FORGOT_PASSWORD &&
                <ResetPassword onLoginClick={this.handleOnLoginButtonClick}/>}

                {showingWindow === SHOW_HELP &&
                <Help onLoginClick={this.handleOnLoginButtonClick} isLogin={sessionId}
                      setSession={this.handleSetSession}/>}

                {showingWindow === SHOW_ABOUT_US &&
                <AboutUs onLoginClick={this.handleOnLoginButtonClick} isLogin={sessionId}
                         setSession={this.handleSetSession}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
};

const mapDispatchToProps = dispatch => ({
    setShowingWindow: bindActionCreators(setShowingWindow, dispatch),
    setSession: bindActionCreators(setSession, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
