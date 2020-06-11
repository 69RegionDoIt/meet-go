import React, {useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {API_ADDR, INVITES} from "../../../../consts";

const columns = [
    { id: 'number', label: 'Номер', minWidth: 50 },
    { id: 'userOpponent', label: 'Инициатор', minWidth: 100 },
    {
        id: 'status',
        label: 'Статус',
        minWidth: 50,
        align: 'right',
    },
    {
        id: 'startTime',
        label: 'Время начала задания',
        minWidth: 100,
        align: 'right',
    },
    {
        id: 'endTime',
        label: 'Время завершения задания',
        minWidth: 100,
        align: 'right',
    },
    {
        id: 'deadlineTime',
        label: 'Рекомендуемое время выполнения',
        minWidth: 100,
        align: 'right',
    },
];


let rows = [

];

const useStyles = makeStyles({
    root: {
        width: '75%',
        marginLeft: '13%',
        marginTop: '3%'
    },
    container: {
        maxHeight: 200,
    },
});

export default function StickyHeadTable(props) {

    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/" + API_ADDR + INVITES, {
            method: 'GET',
            headers: {
                'Session_Id': props.session.sessionId,
                'User_Id': props.session.userId,
            },
            mode: 'cors'
        })
            .then(response => response.json())
            .then(body => {
                if (body.element !== undefined) {
                    body.element.forEach((row) => {
                        rows.push(row);
                    });
                }
            })
    });

    const classes = useStyles();
    const [page] = React.useState(0);
    const [rowsPerPage] = React.useState(10);

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        // TODO: нужно общее поле
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}