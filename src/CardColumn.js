import React from 'react';
import './CardColumn.css';
import ranks from './ranks';

/** 
  * props.order: 1,2,or3 to indicate which column is being rendered
  * props.value: card value (rank)
  * props.suit: card suit: (♠ ♥ ♦ ♣ ♤ ♡ ♢ ♧)
  */

function CardColumn(props) {
    /* Look up appropriate icon placement in ranks.json */
    const display = isNaN(parseInt(props.value[0]))
        ? [[ranks[1].col1], [ranks[1].col2]]                                      // face cards
        : [[ranks[props.value].col1], [ranks[props.value].col2]];           // number cards

    // display: Determine which column sub-array to search    -> 0,1,0
    // column: Determine which gridColumn to render result to -> 2,3,4
    const settings = {display: 0, column: '2'};

    switch(props.order) {
        case '2' : settings.display = 1; settings.column = '3'; break;
        case '3' : settings.display = 0; settings.column = '4'; break;
        default: break;
    }

    return <> { display[settings.display][0].map( (item) => { return (
        <div key={item} className={item} style={{ gridColumn: settings.column, fontSize: '1.7em'}}>
            {props.suit}
        </div>
    )})} </>
}

export default CardColumn;
