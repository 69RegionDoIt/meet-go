import React from "react";

import sport from "../../../../assets/categories/sport.png";
import origami from "../../../../assets/categories/origami.png";
import cooking from "../../../../assets/categories/cooking.png";
import travel from "../../../../assets/categories/travel.png";
import tickets from "../../../../assets/categories/tikets.png";
import tourism from "../../../../assets/categories/tourism.png";
import games from "../../../../assets/categories/games.png";
import food from "../../../../assets/categories/food.png";

const style = {
    height: 50,
    width: 50,
    marginRight: 20,
    backgroundColor: '#506287',
};

export default function TaskImg(props) {
    return (
        <React.Fragment>
            {props.type === null && <div style={{...style, backgroundColor: '#edf7fe'}} />}
            {props.type === 'sport' && <img src={sport} alt='sport' style={style}/>}
            {props.type === 'origami' && <img src={origami} alt='origami' style={style}/>}
            {props.type === 'cooking' && <img src={cooking} alt='cooking' style={style}/>}
            {props.type === 'travel' && <img src={travel} alt='travel' style={style}/>}
            {props.type === 'tickets' && <img src={tickets} alt='tickets' style={style}/>}
            {props.type === 'tourism' && <img src={tourism} alt='tourism' style={style}/>}
            {props.type === 'games' && <img src={games} alt='games' style={style}/>}
            {props.type === 'food' && <img src={food} alt='food' style={style}/>}
        </React.Fragment>
    )
};