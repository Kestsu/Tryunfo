import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     cardName: 'Nome da carta',
  //     cardDescription: 'Descrição da carta',
  //     cardAttr1: '12',
  //     cardAttr2: '34',
  //     cardAttr3: '56',
  //     cardImage: 'url-to-image',
  //     cardRare: 'raro',
  //     cardTrunfo: true,
  //     hasTrunfo: false,
  //     isSaveButtonDisabled: false,
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange = ({ target }) => {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleSave = () => {

  // };

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;

// cardName={ this.handleChange }
// cardDescription={ this.handleChange }
// cardAttr1={ this.handleChange }
// cardAttr2={ this.handleChange }
// cardAttr3={ this.handleChange }
// cardImage={ this.handleChange }
// cardRare={ this.handleChange }
// cardTrunfo={ this.handleChange }
// hasTrunfo={ this.handleChange }
// isSaveButtonDisabled={ this.handleChange }
// onInputChange={ this.handleChange }
// onSaveButtonClick={ this.handleSave }