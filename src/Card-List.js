import React from 'react';

import Card from './Card';

const CardList = (props)=>{
    let allCards=props.cards;
    const cards=allCards.map((card)=>{
        return <Card
        key={card.id}
        card={card}

        />
    });
    return(
        <ul>
            {cards}
        </ul>
    )

};

export default CardList;