import React, { Component } from 'react';
import './Card.css';

class Card extends Component {


  render() {
      const card=this.props.card;
      const name=card.name;
      const birthYear=card.birth_year;
      const image='http://localhost:3008/' + card.image;
      const homeWorld=card.homeworldName;

    return (
      <div className='card'>
        <div className='card-content'>
          	<div className='card-name'>{name}</div>
          	<img src={image} alt='profile'/>
            <p>
                <span>Birthday:</span>
                <span>{birthYear}</span>
            </p>
            <p>
                {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people */}
                <span>Homeworld:</span>
                <span>{homeWorld}</span>
            </p>
        </div>
    </div>

    );
  }
}

export default Card;
