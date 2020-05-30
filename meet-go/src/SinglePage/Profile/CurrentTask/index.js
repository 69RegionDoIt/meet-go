import React from "react";
import Box from "@material-ui/core/Box";
import {HEADER_HEIGHT} from "../../RegistrationPage/const";
import profileTask from "../../../assets/profile/profileTask.svg";
import Button from "@material-ui/core/Button";

const styles = {
    currentTaskBox: {
        backgroundColor: '#dceffd',
        width: '67%',
        marginLeft: '33%',
        position: 'absolute',
        bottom: 0,
    },
    imgSize: {
        width: 513,
        height: 492,
        marginTop: 178,
        marginLeft: 116,
        position: 'absolute',
        zIndex: 1
    },
    taskBox: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginLeft: '40%',
        marginTop: 281,
        height: 350,
        width: 700,
        backgroundColor: '#fff',
    },
    text: {
        fontFamily: 'Bahnschrift',
        fontSize: 25,
        color: '#506287',
        marginLeft: '55%',
    },
    buttonStyle: {
        marginTop: 649,
        marginLeft: '58%',
        textTransform: 'none',
    }
};

export default function CurrentTask(props) {
    return (
        <Box style={{height: document.body.clientHeight - HEADER_HEIGHT, ...styles.currentTaskBox}}>

            <img src={profileTask} alt='task img' style={styles.imgSize}/>

            <span style={{position: 'absolute', ...styles.text, marginTop: 249, fontSize: 27}}> Задание на текущую неделю</span>

            <Box style={styles.taskBox}>
                <Box style={{width: 371, height: 139}}>
                    <span style={{...styles.text, marginLeft: 0}}>
                        Принеси своему партнеру вкусный обед на рабочее место. Лучше приготовить самостоятельно, чем купить готовое!
                    </span>
                </Box>
            </Box>

            <Button style={{position: 'absolute', ...styles.buttonStyle, ...styles.text}}
                    onClick={props.changeTaskWindow}>
                Перейти ко всем заданиям
            </Button>

        </Box>
    )
}