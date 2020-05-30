import React, {Component} from 'react';
import MainPage from "./MainPage";
import {connect} from 'react-redux';
import {setShowingWindow} from "./actions/PageActions";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import {SHOW_LOGIN_PAGE, SHOW_MAIN_PAGE, SHOW_PROFILE, SHOW_REGISTRATION_PAGE} from "../consts";
import Profile from "./Profile";



class SinglePage extends Component {

    handleOnLoginButtonClick = (windowIndex) => {
        this.props.setShowingWindow(windowIndex);
    };

    render() {
        const {showingWindow} = this.props;
        return (
            <div>
                {showingWindow === SHOW_MAIN_PAGE &&
                <MainPage onLoginClick={this.handleOnLoginButtonClick}/>}

                {showingWindow === SHOW_LOGIN_PAGE &&
                <LoginPage onLoginClick={this.handleOnLoginButtonClick}/>}

                {showingWindow === SHOW_REGISTRATION_PAGE &&
                <RegistrationPage onLoginClick={this.handleOnLoginButtonClick}/>}

                {showingWindow === SHOW_PROFILE &&
                <Profile onLoginClick={this.handleOnLoginButtonClick}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showingWindow: state.showingWindow,
    }
};

const mapDispatchToProps = dispatch => ({
     setShowingWindow: window => dispatch(setShowingWindow(window)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
