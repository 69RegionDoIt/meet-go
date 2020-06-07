import React from "react";
import Box from "@material-ui/core/Box";
import Header from "../Profile/Header";
import {Header as NoneLoginHeader} from "../MainPage/Header";
import aboutUs from "../../assets/AboutUs/onas.svg";
import Avatar from "@material-ui/core/Avatar";

import Nikita from '../../assets/AboutUs/nikita.jpg';
import Danya from '../../assets/AboutUs/Danya.webp';
import Nastya from '../../assets/AboutUs/Nastya.jpg';
import Zhenya from '../../assets/AboutUs/Zhenya.jpg';
import Sasha from '../../assets/AboutUs/Sasha.jpg';
import Pavel from '../../assets/AboutUs/Pavel.jpg'

import Grid from "@material-ui/core/Grid";

const styles = {
    textStyle: {
        fontFamily: 'Bahnschrift',
        color: '#fff',
    },
    infoBox: {
        backgroundColor: '#506287',
        minWidth: '100%',
        height: 899,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
    },
    iconStyle: {
        width: 850,
        height: 850,
        position: 'absolute',
        marginLeft: '45%',
    },
    avatarStyle: {
        height: 100,
        width: 100,
    },
    headerText: {
        fontSize: 27,
        position: 'absolute',
        textAlign: 'center',
        marginTop: 70,
        marginLeft: '45%',
    }
};

const infoAboutUs = [
    {
        name: 'Александров Павел',
        description: 'Android-разработчик',
        icon: Pavel,
    },
    {
        name: 'Анастасия Старикова',
        description: 'Дизайнер',
        icon: Nastya,
    },
    {
        name: 'Александра Обухова',
        description: 'Дизайнер',
        icon: Sasha,
    },
    {
        name: 'Евгений Крамсаков',
        description: 'DevOps',
        icon: Zhenya,
    },
    {
        name: 'Никита Гулин',
        description: 'Frontend-разработчик',
        icon: Nikita,
    },
    {
        name: 'Даниил Дубицкий',
        description: 'Backend-разработчик',
        icon: Danya,
    },
];

export default function AboutUs(props) {
    return (
        <Box>
            {props.isLogin !== '' ? <Header onLoginClick={props.onLoginClick}/> : <NoneLoginHeader onLoginClick={props.onLoginClick}/>}

            <span style={{...styles.textStyle, ...styles.headerText}}> Мы рады стараться для вас! <br /> А вот и наша команда</span>

            <Box style={styles.infoBox}>
                <Box style={{marginLeft: '20%'}}>
                        { infoAboutUs.map((elem) => (
                            <Grid container style={{marginTop: 15}}>
                                <Avatar alt='Nikita Gulin' src={elem.icon} style={styles.avatarStyle}/>
                                <div style={{textAlign: "center",  marginTop: '7%', marginLeft: 54}}>
                                    <span style={{...styles.textStyle ,fontSize: 23}}>{elem.name}</span>
                                    <br />
                                    <span style={{...styles.textStyle, fontSize: 19}}>{elem.description}</span>
                                </div>
                            </Grid>
                        ))}
                </Box>
                <img src={aboutUs} alt={'about us'} style={styles.iconStyle}/>
            </Box>

        </Box>
    )
}