import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class EachCard extends Component {
  render() {
    const { card, removeCard, index, hasTrunfo } = this.props;

    return (
      <div className="aux" style={ card.color }>
        <div className="card" style={ card.saveColor }>
          <h3 className="card-name">
            {card.cardName}
          </h3>
          <img className="card-image" src={ card.cardImage } alt={ card.cardName } />
          <p className="card-description2">{ card.cardDescription }</p>
          <div className="attr">
            <span>Atk/Def/Resi</span>
            <div className="attr-group">
              <p className="card-attr">
                { card.cardAttr1 }
                /
              </p>
              <p className="card-attr">
                { card.cardAttr2 }
                /
              </p>
              <p className="card-attr">
                { card.cardAttr3 }
              </p>
            </div>
          </div>
          <div>
            <p className="card-rarity">{ card.cardRare }</p>
            { card.cardTrunfo ? <p className="trunf" data-testid="trunfo-card"> Trunfo</p>
              : '' }
          </div>
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
