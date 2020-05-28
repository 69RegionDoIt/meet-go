import React, {Component} from 'react';
import MainPage from "./MainPage";
import {connect} from 'react-redux';
import {setShowingWindow} from "./actions/PageActions";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";



class SinglePage extends Component {

    handleOnLoginButtonClick = (windowIndex) => {
        this.props.setShowingWindow(windowIndex);
    };

    render() {
        const {showingWindow} = this.props;
        return (
            <div>
                {showingWindow === 0 &&
                <MainPage onLoginClick={this.handleOnLoginButtonClick}/>}

                {showingWindow === 1 &&
                <LoginPage onLoginClick={this.handleOnLoginButtonClick}/>}

                {showingWindow === 2 &&
                <RegistrationPage onLoginClick={this.handleOnLoginButtonClick}/>}
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
