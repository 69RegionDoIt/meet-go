import React, {Component} from 'react';
import MainPage from "./MainPage";
import {connect} from 'react-redux';
import {setShowingWindow} from "./actions/PageActions";



class SinglePage extends Component {

    handleOnLoginButtonClick = () => {
        this.props.setShowingWindow(1);
        // console.log('Click Login');
    };

    render() {
        const {showingWindow} = this.props;
        return (
            <div>
                {showingWindow === 0 &&
                <MainPage onLoginClick={this.handleOnLoginButtonClick}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        showingWindow: state.showingWindow,
    }
};

const mapDispatchToProps = dispatch => ({
     setShowingWindow: window => dispatch(setShowingWindow(window)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
