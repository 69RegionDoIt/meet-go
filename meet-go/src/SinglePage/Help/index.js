import React from "react";
import Box from "@material-ui/core/Box";
import Header from "../Profile/Header";
import {Header as NoneLoginHeader} from "../MainPage/Header";
import help from "../../assets/Help/vopsos1.svg";

const styles = {
    textStyle: {
        fontFamily: 'Bahnschrift',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        width: 830,
        height: 120,
        marginTop: '5%'
    },
    infoBox: {
        backgroundColor: '#506287',
        minWidth: '100%',
        height: 899,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    iconStyle: {
        width: 600,
        height: 600,
        position: 'absolute',
        bottom: 0,
        marginBottom: '3%'
    }
};

export default function Help(props) {
    return (
        <Box>
            {props.isLogin !== '' ? <Header onLoginClick={props.onLoginClick}/> : <NoneLoginHeader onLoginClick={props.onLoginClick}/>}

            <Box style={styles.infoBox}>
                <Box style={styles.textStyle}>
                    Если у Вас возникли вопросы, проблемы или пожелания во время использования сайта, по всем вопросам обращайтесь к нашему специалисту
                    <br />
                    <br />
                    <br />
                    Павел Александров
                    <br/>
                    pasha_top@love.ru
                </Box>
                <img src={help} alt={help} style={styles.iconStyle}/>
            </Box>

        </Box>
    )
}