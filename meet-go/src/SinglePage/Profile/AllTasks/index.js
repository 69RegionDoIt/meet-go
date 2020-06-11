import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CompletedTask from "../../../assets/profile/CompletedTask.svg";
import TaskImg from "./Components/TaskImg";
import Button from "@material-ui/core/Button";
import {SHOW_PROFILE} from "../../../consts";

const styles = {
    allTasksBox: {
        backgroundColor: '#edf7fe',
        width: '75%',
        marginLeft: '25%',
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
        marginLeft: 255,
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
        marginLeft: '53%',
    },
    gridStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        position: 'absolute',
        bottom: 0,
        textTransform: 'none',
        marginLeft: '45%',
        marginBottom: 55,
        fontFamily: 'Bahnschrift',
        fontSize: 23,
        color: '#37435a',
    }
};

const allTasks = [
    {icon: null, task: "Задание", status: "Статус"},
    {icon: 'sport', task: "Задание 1", status: "Выполнено"},
    {icon: 'origami', task: "Задание 2", status: "Не Выполнено"},
    {icon: 'cooking', task: "Задание 3", status: "В работе"},
    {icon: 'travel', task: "Задание 4", status: "Выполнено"},
    {icon: 'tickets', task: "Задание 5", status: "Не выполнено"},
    {icon: 'tourism', task: "Задание 6", status: "В работе"},
    {icon: 'games', task: "Задание 7", status: "Выполнено"},
    {icon: 'food', task: "Задание 8", status: "Выполнено"},
];

const handleReturnToCurrentTask = (handleReturn) => () => {
    handleReturn(SHOW_PROFILE);
};

export default function AllTasks(props) {
    return (
        <Box style={{height: 899, ...styles.allTasksBox}}>

            <span style={styles.subHeader}>Список всех заданий</span>

            <Box style={styles.taskList}>
                {
                    allTasks.map((value) => (
                        <Grid container style={styles.gridStyle}>
                            <TaskImg type={value.icon}/>
                            <div style={styles.taskGridElement}>{value.task}</div>
                            <div style={styles.taskGridElement}>{value.status}</div>
                        </Grid>
                        ))
                }
            </Box>

            <img src={CompletedTask} alt='completed task img' style={styles.iconStyle} />

            <Button style={styles.buttonStyle}
            onClick={handleReturnToCurrentTask(props.changeTaskWindow)}>Вернуться к профилю</Button>

        </Box>
    )
}