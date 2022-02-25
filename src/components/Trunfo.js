import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trunfo extends Component {
  render() {
    const {
      cardTrunfo,
      onInputChange,
      hasTrunfo,
    } = this.props;

    if (!hasTrunfo) {
      return (
        <label htmlFor="trunfo">
          <input
            id="trunfo"
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
          Carta Trunfo
        </label>
      );
    }
    return <p>Você já tem um Super Trunfo em seu baralho</p>;
  }
}

Trunfo.propTypes = {
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;

export default Trunfo;
