import React from "react";
import Header from "./Header";
import UserInfo from "./UserInfo";
import CurrentTask from "./CurrentTask";
import AllTasks from "./AllTasks";
import {Box} from "@material-ui/core";

export default class Profile extends React.Component {

    state = {
        isCurrentTask: true,
    };

    render() {
        const {isCurrentTask} = this.state;

        return (
            <React.Fragment>
                <Header onLoginClick={this.props.onLoginClick}/>
                <Box style={{position: "relative"}}>
                    <UserInfo/>
                    {!!isCurrentTask ? <CurrentTask/> : <AllTasks/>}
                </Box>
            </React.Fragment>
        );
    }

}