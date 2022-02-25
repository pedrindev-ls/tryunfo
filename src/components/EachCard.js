import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EachCard extends Component {
  render() {
    const { card } = this.props;
    return (
      <div>
        <h4>
          {card.cardName}
        </h4>
        <img src={ card.cardImage } alt={ card.cardName } />
        <p>{ card.cardDescription }</p>
        <div>
          <p>{ card.cardAttr1 }</p>
          <p>{ card.cardAttr2 }</p>
          <p>{ card.cardAttr3 }</p>
        </div>
      </div>
    );
  }
}

EachCard.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default EachCard;
