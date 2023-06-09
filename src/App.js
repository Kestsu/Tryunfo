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
      isSaveButtonDisabled: true,
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
    }, () => this.validar());
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

  handleLetters = () => {
    const { cardName, cardDescription, cardImage } = this.state;
    console.log('cardName', cardName);
    // console.log(cardDescription);
    // console.log(cardImage);
    if (
      (cardName.length === 0)
            || (cardDescription.length === 0)
            || (cardImage.length === 0)
    ) {
      return true;
    }
    return false;
  }

  handleNumber = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const nove = 90;
    const zero = 0;
    const max = 210;
    // console.log(cardAttr1, cardAttr2, cardAttr3);
    if (attr1 > nove
        || attr2 > nove
        || attr3 > nove
        || attr1 < zero
        || attr2 < zero
        || attr3 < zero
        || ((attr1 + attr2 + attr3) > max)) {
      return true;
    }
    return false;
  }

  validar = () => {
    const resultadoLetras = this.handleLetters();
    const resultadoNumeros = this.handleNumber();
    // console.log(resultadoValue);
    // console.log(resultadoEmpty);
    if (resultadoLetras === false && resultadoNumeros === false) {
      return this.setState({ isSaveButtonDisabled: false });
    } return this.setState({ isSaveButtonDisabled: true });
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
      hasTrunfo,
      isSaveButtonDisabled,
      baralho,
    } = this.state;

    // let teste = 'ativar';

    // if (
    //   cardName.length === 0
    //         || cardDescription.length === 0
    //         || cardImage.length === 0
    //         || cardRare.length === 0
    // ) {
    //   teste = 'desativar';
    // }

    // if (cardAttr1 + cardAttr2 + cardAttr3 > '210') {
    //   teste = 'desativar';
    // }
    // if (cardAttr1 > '90'
    //     || cardAttr2 > '90'
    //     || cardAttr3 > '90'
    //     || cardAttr1 < '0'
    //     || cardAttr2 < '0'
    //     || cardAttr3 < '0'
    // ) {
    //   teste = 'desativar';
    // }

    return (
      <div>
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
            isSaveButtonDisabled={ isSaveButtonDisabled }
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
        <div>
          {
            baralho.map((carta) => (
              <div key={ carta.cardName }>
                <Card
                  cardName={ carta.cardName }
                  cardDescription={ carta.cardDescription }
                  cardAttr1={ carta.cardAttr1 }
                  cardAttr2={ carta.cardAttr2 }
                  cardAttr3={ carta.cardAttr3 }
                  cardImage={ carta.cardImage }
                  cardRare={ carta.cardRare }
                  cardTrunfo={ carta.cardTrunfo }
                />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
