import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      baralho: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesave = this.handleSave.bind(this);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSave = (event) => {
    event.preventDefault();
    const {
      cardTrunfo,
      hasTrunfo,
    } = this.state;
    this.setState(({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      baralho,
    }) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardTrunfo: false,
      cardRare: 'Normal',
      baralho:
      [...baralho,
        {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
        }],
    }
    ));

    if (cardTrunfo && !hasTrunfo) {
      this.setState({
        cardTrunfo: false,
        hasTrunfo: true,
      });
    }
  };

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
    } = this.state;

    let teste = 'ativar';

    if (
      cardName.length === 0
        || cardDescription.length === 0
        || cardImage.length === 0
        || cardRare.length === 0
    ) {
      teste = 'desativar';
    }

    if (cardAttr1 + cardAttr2 + cardAttr3 > '210') {
      teste = 'desativar';
    }
    if (cardAttr1 > '90'
    || cardAttr2 > '90'
    || cardAttr3 > '90'
    || cardAttr1 < '0'
    || cardAttr2 < '0'
    || cardAttr3 < '0'
    ) {
      teste = 'desativar';
    }

    return (
      <div>
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
          isSaveButtonDisabled={ teste === 'desativar' }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSave }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
