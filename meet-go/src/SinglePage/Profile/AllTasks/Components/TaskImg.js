import React from "react";

import sport from "../../../../assets/categories/sport.png";
import origami from "../../../../assets/categories/origami.png";
import cooking from "../../../../assets/categories/cooking.png";
import travel from "../../../../assets/categories/travel.png";
import tickets from "../../../../assets/categories/tikets.png";
import tourism from "../../../../assets/categories/tourism.png";
import games from "../../../../assets/categories/games.png";
import food from "../../../../assets/categories/food.png";

export default function TaskImg(props) {
    return (
        <React.Fragment>
            {props.type === 'sport' && <img src={sport} alt='sport' style={{height: 38, width: 38, marginRight: 16, backgroundColor: '#506287'}}/>}
            {props.type === 'origami' && <img src={origami} alt='origami' style={{height: 38, width: 38, marginRight: 16, backgroundColor: '#506287'}}/>}
            {props.type === 'cooking' && <img src={cooking} alt='cooking' style={{height: 38, width: 38, marginRight: 16, backgroundColor: '#506287'}}/>}
            {props.type === 'travel' && <img src={travel} alt='travel' style={{height: 38, width: 38, marginRight: 16, backgroundColor: '#506287'}}/>}
            {props.type === 'tickets' && <img src={tickets} alt='tickets' style={{height: 38, width: 38, marginRight: 16, backgroundColor: '#506287'}}/>}
            {props.type === 'tourism' && <img src={tourism} alt='tourism' style={{height: 38, width: 38, marginRight: 16, backgroundColor: '#506287'}}/>}
            {props.type === 'games' && <img src={games} alt='games' style={{height: 38, width: 38, marginRight: 16, backgroundColor: '#506287'}}/>}
            {props.type === 'food' && <img src={food} alt='food' style={{height: 38, width: 38, marginRight: 16, backgroundColor: '#506287'}}/>}
        </React.Fragment>
    )
};