import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EachCard from './EachCard';
import './CardsSaved.css';

class CardsSaved extends Component {
  render() {
    const { whereSaved, removeCard, hasTrunfo } = this.props;
    return (
      <div className="flex">
        {
          whereSaved
            .map((card, index) => (<EachCard
              card={ card }
              key={ index }
              index={ index }
              removeCard={ removeCard }
              hasTrunfo={ hasTrunfo }
            />))
        }
      </div>
    );
  }
}

CardsSaved.propTypes = {
  whereSaved: PropTypes.array,
}.isRequired;

export default CardsSaved;
