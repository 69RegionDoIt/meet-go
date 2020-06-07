import React from "react";
import Box from "@material-ui/core/Box";
import {HEADER_HEIGHT} from "../../RegistrationPage/const";
import profileTask from "../../../assets/profile/profileTask.svg";
import Button from "@material-ui/core/Button";

const styles = {
    currentTaskBox: {
        backgroundColor: '#dceffd',
        width: '75%',
        marginLeft: '25%',
        position: 'absolute',
        bottom: 0,
    },
    imgSize: {
        width: 550,
        height: 550,
        marginTop: 145,
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
        borderRadius: 5,
    },
    text: {
        fontFamily: 'Bahnschrift',
        fontSize: 25,
        color: '#506287',
        marginLeft: '52%',
    },
    buttonStyle: {
        marginTop: 649,
        marginLeft: '58%',
        textTransform: 'none',
        fontFamily: 'Bahnschrift',
    }
};

export default function CurrentTask(props) {
    return (
        <Box style={{height: 899, ...styles.currentTaskBox}}>

            <img src={profileTask} alt='task img' style={styles.imgSize}/>

            <span style={{position: 'absolute', ...styles.text, marginTop: 249, fontSize: 27}}> Задание на текущую неделю</span>

            <Box style={styles.taskBox}>
                <Box style={{width: 500, height: 300, display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',}}>
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