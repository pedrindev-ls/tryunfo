import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EachCard extends Component {
  render() {
    const { card, removeCard, index, hasTrunfo } = this.props;
    const trunfo = card.cardTrunfo ? 'Super Trunfo' : '';
    return (
      <div>
        <h4>
          {card.cardName}
        </h4>
        <img src={ card.cardImage } alt={ card.cardName } />
        <p>{ card.cardDescription }</p>
        <div>
          <p>
            Atributo 1:
            {' '}
            { card.cardAttr1 }
          </p>
          <p>
            Atributo 2:
            {' '}
            { card.cardAttr2 }
          </p>
          <p>
            Atributo 3:
            {' '}
            { card.cardAttr3 }
          </p>
        </div>
        <p>{ card.cardRare }</p>
        <p>{ trunfo }</p>
        <button
          type="button"
          data-testid="delete-button"
          onClick={ removeCard }
          id={ index }
          value={ hasTrunfo }
        >
          Remover
        </button>
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
