import React from 'react';
import Card from './Card.js';

/** Accepts Array of 5 char (XY):
  * X. card value (rank)
  *    valid values: 2,3,4,5,6,7,8,9,0,J,Q,K,A
  * Y. card suit
  *    card suits: ♠ ♥ ♦ ♣ ♤ ♡ ♢ ♧
  */

function Hand(props) {
    sort(props.cards);

    return (
        <div style={HandStyle}>
            <Card value={props.cards[0]} style={{marginTop: '12px',
                ...CardStyle, left: '120px', transform: `rotate(-30deg)`}}/>
            <Card value={props.cards[1]} style={{marginTop: '2px',
                ...CardStyle, left: '60px', transform: `rotate(-15deg)`}}/>
            <Card value={props.cards[2]} style={{...CardStyle}}/>
            <Card value={props.cards[3]} style={{marginTop: '10px',
                ...CardStyle, left: '-60px', transform: `rotate(15deg)`}}/>
            <Card value={props.cards[4]} style={{marginTop: '30px',
                ...CardStyle, left: '-120px', transform: `rotate(30deg)`}}/>
        </div>
    )
}

function sort (hand) {
    // order the cards based on weighted value
    const temp = hand.toString();
    const ace_hi = temp.includes('A') 
        ? (temp.includes('2') && temp.includes('3') && temp.includes('4') && temp.includes('5'))
                ? false : true : true;
    const weights = {
        '2': 2, '3': 3, '4': 4, '5': 5,
        '6': 6, '7': 7, '8': 8, '9': 9,
        '0': 10, 'J': 11, 'Q': 12, 'K': 13,
        'A': ace_hi ? 14 : 1
    }
    hand.sort( (a,b) => { return weights[a[0]] - weights[b[0]]});
}

const HandStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px'
}

const CardStyle = {
    padding: '3px',
    position: 'relative'
}

export default Hand;
