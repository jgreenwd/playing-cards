import React from 'react';
import CardColumn from './CardColumn.js';
import './Card.css';

/** 
  * props.value:
  *   [0]. card value (rank)
  *      valid values: 2,3,4,5,6,7,8,9,0,J,Q,K,A
  *   [1]. card suit
  *      card suits: ♠ ♥ ♦ ♣ ♤ ♡ ♢ ♧
  * props.style: styling attributes, relative to other cards in hand
  */

// style the edge elements
const left = { gridColumn: '1', gridRow: '1' }
const leftSuit = { gridColumn: '1', gridRow: '2'}
const right = { gridColumn: '5', gridRow: '13', 
    transform: `rotate(-180deg)`, translateX: `(-8px)`}
const rightSuit = { gridColumn: '5', gridRow: '12', 
    transform: `rotate(-180deg)`, translateX: `(-8px)`}

function Card(props) {
    const value = props.value[0] === '0' ? '10' : props.value[0];
    const suit = props.value[1];
    const cardColor = (suit === '♥' || suit === '♦' || suit === '♡' || suit === '♢') 
        ? {color:"red"} : {color:"black"};

    return (
        <div id={value + suit} className="card_container" 
        style={{...cardColor, ...props.style}}>
            <div style={left} >{value}</div>
            <div style={leftSuit}>{suit}</div>
            <CardColumn order="1" value={props.value[0]} suit={suit}/>
            <CardColumn order="2" value={props.value[0]} suit={suit}/>
            <CardColumn order="3" value={props.value[0]} suit={suit}/>
            <div style={rightSuit}>{suit}</div>
            <div style={right} >{value}</div>
       </div>
    )
}

export default Card;
