import { Component } from 'react';

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composição de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composição de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      <div className="content">
        {conteudos.map(({ conteudo, bloco, status }) => (
          <div key={conteudo} className="card">
            <h4>{`O conteúdo é: ${conteudo}`}</h4>
            <p>{`Status: ${status}`}</p>
            <p>{`Bloco: ${bloco}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;