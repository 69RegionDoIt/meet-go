import React from "react";
import Box from "@material-ui/core/Box";
import {HEADER_HEIGHT} from "../../RegistrationPage/const";
import Grid from "@material-ui/core/Grid";
import CompletedTask from "../../../assets/profile/CompletedTask.svg";

const styles = {
    allTasksBox: {
        backgroundColor: '#dceffd',
        width: '67%',
        marginLeft: '33%',
        position: 'absolute',
        bottom: 0,
    },
    taskGridElement: {
        width: 200,
        height: 50,
        marginTop: 20,
        fontFamily: 'Bahnschrift',
        fontSize: 25,
        color: '#37435a',
    },
    subHeader: {
        fontFamily: 'Bahnschrift',
        fontSize: 27,
        color: '#37435a',
        position: 'absolute',
        marginLeft: 200,
        marginTop: 55,
    },
    taskList: {
        position: 'absolute',
        marginLeft: 180,
        marginTop: 84,
        zIndex: 1,
    },
    iconStyle: {
        width: 600,
        height: 600,
        position: 'absolute',
        marginTop: 146,
        marginLeft: '48%',
    },
    gridStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
};

const allTasks = [
    {icon: null, task: "Задание", status: "Статус"},
    {icon: 'sport', task: "Задание 1", status: "Выполнено"},
    {icon: 'handmade', task: "Задание 2", status: "Не Выполнено"},
    {icon: 'cooking', task: "Задание 3", status: "В работе"},
    {icon: 'trip', task: "Задание 4", status: "Этап сдачи"},
    {icon: 'art', task: "Задание 5", status: "Шакалиный укус"},
    {icon: 'tourism', task: "Задание 6", status: "Дядя дай монетку"},
    {icon: 'play', task: "Задание 7", status: "Тапок заминирован"},
    {icon: 'food', task: "Задание 8", status: "Столько заданий никто не сделает"},
];

export default function AllTasks() {
    return (
        <Box style={{height: document.body.clientHeight - HEADER_HEIGHT, ...styles.allTasksBox}}>

            <span style={styles.subHeader}>Список всех заданий</span>

            <Box style={styles.taskList}>
                {
                    allTasks.map((value) => (
                        <Grid container style={styles.gridStyle}>
                            <img src={'https://files.ozbargain.com.au/u/57/20257-38.jpg?h=a4d40b9c'} alt='test' style={{height: 38, width: 38, paddingRight: 16}}/>
                            <div style={styles.taskGridElement}>{value.task}</div>
                            <div style={styles.taskGridElement}>{value.status}</div>
                        </Grid>
                        ))
                }
            </Box>

            <img src={CompletedTask} alt='completed task img' style={styles.iconStyle} />
        </Box>
    )
}