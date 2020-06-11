import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import male from '../../../assets/avatars/male.svg';
import female from '../../../assets/avatars/female.svg';
import another from '../../../assets/avatars/another.svg';

import {API_ADDR, GET_USER} from "../../../consts";


const styles={
    mainBox: {
        maxWidth: '25%',
        marginTop: 20,
        backgroundColor: '#506287',
        position: 'relative',
    },
    userPhoto: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        backgroundColor: '#fff',
        border: 'solid 1px #c2c2c2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        textAlign: 'center'
    },
    partnerPhoto:{
        width: 150,
        height: 150,
    },
    textStyle: {
        fontFamily: 'Bahnschrift',
        fontSize: 25,
        color: '#fff',
        position: 'absolute',
    },
    buttonStyle: {
        position: 'absolute',
        bottom: 0,
        fontFamily: 'Bahnschrift',
        fontSize: 20,
        color: '#fff',
        textTransform: 'none',
    },
    userInfoBox: {
        height: '50%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    },
    helpIconText: {
        fontFamily: 'Bahnschrift',
        fontSize: 20,
        color: '#d2d7db',
    },
    taskCounterBorder: {
        width: 280,
        height: 280,
        borderRadius: '50%',
        border: 'solid 1px #c2c2c2',
        backgroundColor: '#dceffd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 88,
    },
    taskCounter: {
        width: 255,
        height: 255,
        borderRadius: '50%',
        border: 'solid 1px #c2c2c2',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        fontFamily: 'Bahnschrift',
        fontSize: 87.5,
        color: '#506287',
    }
};

export default class UserInfo extends React.Component{

    state = {
        currentUser: {
            userId: "",
            firstName: "",
            lastName: "",
            regTime: "",
            private: 0,
            picture: "",
            backgroundPicture: "",
            gender: "",
            onlineTime: ""
        }
    };

    componentDidMount() {
        const currentUser = this.props.session.userId;
        fetch("https://cors-anywhere.herokuapp.com/" + API_ADDR + GET_USER + currentUser, {
            method: 'GET',
            headers: {
                'Session_Id': this.props.session.sessionId,
                'User_Id': this.props.session.userId,
            },
            mode: 'cors'
        })
            .then(response => response.json())
            .then(body => {
                if(body.element !== undefined) {
                    this.setState({currentUser: body.element});
                }
            });
    }


    render() {

        const {firstName, lastName, gender} = this.state.currentUser;

        return (
            <Box style={{...styles.mainBox, height: 899}}>

                <Box style={styles.userInfoBox}>

                    <span style={{...styles.textStyle, marginTop: 19}}>{firstName + ' ' + lastName}</span>

                    {gender === 'male' && <Avatar src={male} style={{...styles.userPhoto, marginTop: 70}}/>}
                    {gender === 'female' && <Avatar src={female} style={{...styles.userPhoto, marginTop: 70}}/>}
                    {gender === 'another' && <Avatar src={another} style={{...styles.userPhoto, marginTop: 70}}/>}
                    
                    <Avatar src={another} style={{...styles.userPhoto, ...styles.partnerPhoto, marginTop: 180, marginLeft: 100}}/>
                </Box>

                <Box style={styles.userInfoBox}>
                    <span style={{...styles.textStyle, textAlign: 'center'}}> Количество <br /> выполненных заданий</span>

                    <Box style={styles.taskCounterBorder}>
                        <Box style={styles.taskCounter}>
                            <span style={styles.counter}> 0/0 </span>
                        </Box>
                    </Box>
                </Box>

            </Box>
        )
    }
}
