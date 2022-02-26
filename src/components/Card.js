import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const color = {
      backgroundColor: 'lightgray',
    };

    if (cardRare === 'normal') {
      color.backgroundColor = 'lightgray';
    } else if (cardRare === 'raro') {
      color.backgroundColor = 'steelblue';
    } else if (cardRare === 'muito raro') {
      color.backgroundColor = 'goldenrod';
    }

    return (
      <div className="complete-card" style={ color }>
        <h3 className="card-name" data-testid="name-card">{ cardName }</h3>
        <img
          className="card-image"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p
          className="card-description2"
          data-testid="description-card"
        >
          {' '}
          { cardDescription }
        </p>
        <div className="attr">
          <span>Atk/Def/Resi</span>
          <div className="attr-group">
            <p className="card-attr" data-testid="attr1-card">
              { cardAttr1 }
              /
            </p>
            <p className="card-attr" data-testid="attr2-card">
              { cardAttr2 }
              /
            </p>
            <p className="card-attr" data-testid="attr3-card">{ cardAttr3 }</p>
          </div>
        </div>
        <div>
          <p className="card-rarity" data-testid="rare-card">
            { cardRare }
            {' '}
          </p>
          { cardTrunfo ? <p className="trunf" data-testid="trunfo-card"> Trunfo</p> : '' }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
