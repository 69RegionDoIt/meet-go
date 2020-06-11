import React from "react";
import Box from "@material-ui/core/Box";
import profileTask from "../../../assets/profile/profileTask.svg";
import Button from "@material-ui/core/Button";
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import {API_ADDR, INVITE_USER, SEARCH_API, SEARCH_START, SEARCH_USERS_COUNT} from "../../../consts";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import StickyHeadTable from "./Components/Requests";

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
        marginTop: 125,
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
        marginTop: 240,
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
        marginTop: 610,
        marginLeft: '58%',
        textTransform: 'none',
        fontFamily: 'Bahnschrift',
    },
    searchLine: {
        width: 1000,
        marginTop: 50,
        marginLeft: '14%',
        backgroundColor: '#fff',
    }
};

export default class CurrentTask extends React.Component {

    state = {
        loading: false,
        open: false,
        partners: [],
        search: '',
        isError: false,
        errorMsg: '',
        currentTask: 'Принеси своему партнеру вкусный обед на рабочее место. Лучше приготовить самостоятельно, чем купить готовое!',
    };

    handleOnClose = () => {
        this.setState({open:false})
    };

    handleOnOpen = () => {
        this.setState({open: true});
    };

    handleOnChange = (event) => {
        this.setState({search: event.target.value});
        if(this.state.search !== '') {
            this.setState({loading: true});

            const requestUrl = new URL("https://cors-anywhere.herokuapp.com/" + API_ADDR + SEARCH_API);
            requestUrl.searchParams.set('query', this.state.search);
            requestUrl.searchParams.set('count', SEARCH_USERS_COUNT);
            requestUrl.searchParams.set('from', SEARCH_START);

            fetch(requestUrl, {
                method: 'GET',
                headers: {
                    'Session_Id': this.props.session.sessionId,
                    'User_Id': this.props.session.userId,
                },
                mode: 'cors'
            })
                .then(response => response.json())
                .then(body => {
                if (body.element !== undefined && body.element.length !== 0) {
                    let newUsers = [];
                    body.element.forEach((user) => {
                        newUsers.push({
                            ...user
                        });
                    });
                    this.setState({partners: newUsers, loading: false});
                }
            });
        } else {
            this.setState({loading: false,});
        }
    };

    handleOnSelect = (event) => {
        this.setState({search: event.target.value});
    };

    handleAlertClose = () => {
        this.setState({isError: false});
    };

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            fetch("https://cors-anywhere.herokuapp.com/" + API_ADDR + INVITE_USER
            + this.state.search, {
                method: "POST",
                headers: {
                    'Session_Id': this.props.session.sessionId,
                    'User_Id': this.props.session.userId,
                },
                mode: 'cors'
            })
                .then(response => response.json())
                .then(body => {
                    if (body.error !== undefined) {
                        if (body.error.message === 'invite has already existed') {
                            this.setState({isError: true, errorMsg: 'Вы уже отправли приглашение данному пользователю.'})
                        } else {
                            this.setState({isError: true, errorMsg: 'Неизвестная ошибка.'})
                        }
                    } else {
                        this.setState({isError: true, errorMsg: 'Приглашение пользователю успешно отправлено.'})
                    }
                });
        }
    };

    render() {
        const {loading, open, search, partners, isError, errorMsg, currentTask} = this.state;

        return (
            <Box style={{height: 899, ...styles.currentTaskBox}}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={partners.map((option) => option.userId)}
                    style={styles.searchLine}
                    onOpen={this.handleOnOpen}
                    onClose={this.handleOnClose}
                    onSelect={this.handleOnSelect}
                    onKeyPress={this.handleKeyPress}
                    loading={loading}
                    open={open}
                    renderInput={(params) =>
                        (<TextField
                            {...params}
                            label="Поиск партнера"
                            variant="outlined"
                            value={search}
                            onChange={this.handleOnChange}
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                            />)}
                />

                <StickyHeadTable session={this.props.session}/>

                <img src={profileTask} alt='task img' style={styles.imgSize}/>

                <span style={{position: 'absolute', ...styles.text, marginTop: 200, fontSize: 27}}> Задание на текущую неделю</span>

                <Box style={styles.taskBox}>
                    <Box style={{width: 500, height: 300, display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',}}>
                    <span style={{...styles.text, marginLeft: 0}}>
                        {currentTask}
                    </span>
                    </Box>
                </Box>

                <Button style={{position: 'absolute', ...styles.buttonStyle, ...styles.text}}
                        onClick={this.props.changeTaskWindow}>
                    Перейти ко всем заданиям
                </Button>

                { !!isError &&
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={true}
                    autoHide1Duration={6000}
                    onClose={this.handleAlertClose}
                    message={errorMsg}
                    action={<React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleAlertClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>}
                    />}

            </Box>
        )
    }
}