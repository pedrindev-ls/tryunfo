import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import Trunfo from './Trunfo';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="card-name">
          Nome da Carta:
          <input
            type="text"
            id="card-name"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="card-description">
          Descrição:
          <textarea
            id="card-description"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1:
          <input
            id="attr1"
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2:
          <input
            id="attr2"
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3:
          <input
            id="attr3"
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="card-id">
          Imagem da Carta:
          <input
            type="text"
            id="card-img"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="rarity">
          <select
            id="rarity"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            required
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <Trunfo
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
          hasTrunfo={ hasTrunfo }
        />
        <button
          name="save-btn"
          id="save-btn"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  textTrunfo: PropTypes.string,
}.isRequired;

export default Form;
