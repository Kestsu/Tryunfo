import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <p>
          Insira o nome da carta.
        </p>
        <input type="text" data-testid="name-input" />
        <br />
        <p>
          Insira a descrição da carta.
        </p>
        <br />
        <textarea data-testid="description-input" />
        <br />
        <p>
          Insira o primeiro atributo da carta.
        </p>
        <input type="number" data-testid="attr1-input" />
        <br />
        <p>
          Insira o segundo atributo da carta.
        </p>
        <input type="number" data-testid="attr2-input" />
        <br />
        <p>
          Insira o terceiro atributo da carta.
        </p>
        <input type="number" data-testid="attr3-input" />
        <p>
          Insira o caminho da imagem.
        </p>
        <input type="text" data-testid="image-input" />
        <p>
          Selecione a raridade.
        </p>
        <select data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <p>
          Marque caso a carta seja o Super Trunfo.
        </p>
        <input type="checkbox" data-testid="trunfo-input" />
        <br />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
