import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EachCard from './EachCard';

class CardsSaved extends Component {
  render() {
    const { whereSaved } = this.props;
    return (
      <div>
        {
          whereSaved.map((card) => <EachCard card={ card } key={ card.cardName } />)
        }
      </div>
    );
  }
}

CardsSaved.propTypes = {
  whereSaved: PropTypes.array,
}.isRequired;

export default CardsSaved;
