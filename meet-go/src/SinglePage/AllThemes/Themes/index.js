import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import sport from "../../../assets/categories/sport.png";
import origami from "../../../assets/categories/origami.png";
import cooking from "../../../assets/categories/cooking.png";
import travel from "../../../assets/categories/travel.png";
import tickets from "../../../assets/categories/tikets.png";
import tourism from "../../../assets/categories/tourism.png";
import games from "../../../assets/categories/games.png";
import food from "../../../assets/categories/food.png";
import {SHOW_PROFILE} from "../../../consts";


const styles = {
    mainBox: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#dceffd',
        minWidth: '100%',
        height: 911,
    },
    iconBackgroundSize: {
        backgroundColor: "#506287",
        width: 110,
        height: 110
    },
    textStyle: {
        color: "#506287",
        fontSize: 15,
        fontFamily: 'Bahnschrift',
        maxWidth: 20,
        marginTop: 10,
    },
    infoStyle: {
        color: '#37435a',
        fontFamily: 'Bahnschrift',
        fontSize: 23,
        textAlign: 'center',
        position: 'absolute',
        marginTop: 50,
        marginLeft: 50
    },
    buttonStyle: {
        backgroundColor: '#506287',
        width: 190,
        height: 70,
        textTransform: 'none',
        position: 'absolute',
        fontFamily: 'Bahnschrift',
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
        bottom: 0,
        marginBottom: 50,
        marginLeft: 50,
    },
};

const handleOnButtonClick = (showNewWindow) => () => {
    //TODO: Чекать, что выбрал юзер и кинуть на сервер

    showNewWindow(SHOW_PROFILE);
};

export default function Themes(props) {

    const iconsFP = [sport, origami, cooking, travel];
    const iconFPNames = ['Спорт', 'Своими руками', 'Готовка', 'Путешествия'];
    const iconsSP = [tickets, tourism, games, food];
    const iconSPNames = ['Исскуство', 'Туризм', 'Игры', 'Еда'];


    return (
            <Box style={styles.mainBox}>
                <Box style={styles.infoStyle}>Помогите нам подобрать для Вас наиболее интересные задания!<br />Выберите категории, которые больше всего Вам подходят </Box>

                <Box style={{position: 'absolute', marginTop: 250,}}>
                    <Grid container>
                       {iconsFP.map((icon, index) => (
                           <Grid>
                               <div style={{marginLeft: 105}}>
                                   <div style={styles.iconBackgroundSize}> <img src={icon} style={{width: 100, height: 100}} alt='Theme icon'/></div>
                                   <FormControlLabel
                                       value="bottom"
                                       style={styles.textStyle}
                                       control={<Checkbox color="primary"/>}
                                       label={iconFPNames[index]}
                                       labelPlacement="right"
                                   />
                               </div>
                           </Grid>
                       ))};
                    </Grid>
                    <Grid container style={{marginTop: 45}}>
                        {iconsSP.map((icon, index) => (
                            <Grid>
                                <div style={{marginLeft: 105}}>
                                    <div style={styles.iconBackgroundSize}> <img src={icon} style={{width: 100, height: 100}} alt='Theme icon'/></div>
                                    <FormControlLabel
                                        value="bottom"
                                        style={styles.textStyle}
                                        control={<Checkbox color="primary"/>}
                                        label={iconSPNames[index]}
                                        labelPlacement="right"
                                    />
                                </div>
                            </Grid>
                        ))};
                    </Grid>
                </Box>

                <Button style={styles.buttonStyle} onClick={handleOnButtonClick(props.onLoginClick)} >Завершить регистрацию</Button>
            </Box>
    )

}