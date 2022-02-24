import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      button: true,
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;
    const tValue = target.type === 'checkbox' ? target.checked : value;
    this.setState({ [name]: tValue }, this.isSaveButtonDisabled);
  }

  isSaveButtonDisabled() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      // cardTrunfo,
      // button,
    } = this.state;
    const sum = +cardAttr1 + +cardAttr2 + +cardAttr3;
    const maxNum = 210;
    const maxSingleNum = 90;
    const minSingleNum = 0;

    if (cardName && cardDescription && cardImage && cardRare) {
      if (sum <= maxNum) {
        if (+cardAttr1 <= maxSingleNum && +cardAttr1 >= minSingleNum) {
          if (+cardAttr2 <= maxSingleNum && +cardAttr2 >= minSingleNum) {
            if (+cardAttr3 <= maxSingleNum && +cardAttr3 >= minSingleNum) {
              this.setState({ button: false });
            } else {
              this.setState({ button: true });
            }
          } else {
            this.setState({ button: true });
          }
        } else {
          this.setState({ button: true });
        }
      } else {
        this.setState({ button: true });
      }
    } else {
      this.setState({ button: true });
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
      button,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo - Warriors and Mages</h1>
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
              onInputChange={ this.onInputChange }
              isSaveButtonDisabled={ this.isSaveButtonDisabled }
              buttonStatus={ button }
            />
          </div>
          <div>
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
      </div>
    );
  }
}

export default App;
