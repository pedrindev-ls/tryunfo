import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';
import CardsSaved from './components/CardsSaved';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.ifHaveTrunfo = this.ifHaveTrunfo.bind(this);
    this.color = this.color.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
      color: {
        background: 'white',
      },
      saveColor: {
        backgroundColor: 'lightgray',
      },
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;
    const tValue = target.type === 'checkbox' ? target.checked : value;
    this.setState({ [name]: tValue }, this.validateButton, this.trunfoColor);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cards,
      saveColor,
    } = this.state;
    cards.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      saveColor,
    });
    if (cardTrunfo) {
      this.ifHaveTrunfo();
    }
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
    });
  }

  removeCard = (event) => {
    event.preventDefault();
    const { cards } = this.state;
    const { id, value } = event.target;
    const allCards = cards;
    allCards.splice(id, 1);
    this.setState({ cards: allCards });
    if (value) {
      this.setState({ hasTrunfo: false });
    }
  }

  ifHaveTrunfo() {
    this.setState({
      cardTrunfo: false,
      hasTrunfo: true,
    });
  }

  color() {
    const { cardRare } = this.state;

    if (cardRare === 'normal') {
      this.setState({
        saveColor: {
          backgroundColor: 'lightgray',
        },
      });
    } else if (cardRare === 'raro') {
      this.setState({
        saveColor: {
          backgroundColor: 'steelblue',
        },
      });
    } else if (cardRare === 'muito raro') {
      this.setState({
        saveColor: {
          backgroundColor: 'goldenrod',
        },
      });
    }
  }

  validateButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.color();

    if (cardTrunfo) {
      this.setState({ color: {
        background: 'goldenrod',
      } });
    } else {
      this.setState({ color: {
        background: 'white',
      } });
    }

    const sum = +cardAttr1 + +cardAttr2 + +cardAttr3;
    const maxNum = 210;
    const maxSingleNum = 90;
    const minSingleNum = 0;

    const higher = sum <= maxNum;
    const existName = cardName.length > 0;
    const existDescription = cardDescription.length > 0;
    const existImg = cardImage.length > 0;
    const existRare = cardRare.length > 0;
    const minSingle = cardAttr1 >= minSingleNum
    && cardAttr2 >= minSingleNum
    && cardAttr3 >= minSingleNum;
    const maxSingle = cardAttr1 <= maxSingleNum
    && cardAttr2 <= maxSingleNum
    && cardAttr3 <= maxSingleNum;

    if (higher
        && existName
        && existDescription
        && existImg
        && existRare
        && minSingle
        && maxSingle) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

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
      isSaveButtonDisabled,
      cards,
      hasTrunfo,
      textTrunfo,
      color,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo - Warriors and Mages</h1>
        <div>
          <div className="main-info">
            <div className="add-info">
              <Form
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                hasTrunfo={ hasTrunfo }
                onInputChange={ this.onInputChange }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onSaveButtonClick={ this.onSaveButtonClick }
                textTrunfo={ textTrunfo }
              />
            </div>
            <div className="card-preview" style={ color }>
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                onInputChange={ this.onInputChange }
              />
            </div>
          </div>
          <CardsSaved
            whereSaved={ cards }
            removeCard={ this.removeCard }
            hasTrunfo={ hasTrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
