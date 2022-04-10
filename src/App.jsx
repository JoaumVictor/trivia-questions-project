import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';
import { addQuestion } from './store/reducer';

export default function App() {
  const [dataLocal, setDataLocal] = useState({
    categoria: 'Games',
    pergunta: '',
    resposta1: '',
    resposta2: '',
    resposta3: '',
    resposta4: '',
  });
  const dataRedux = useSelector((state) => state.dataStore.data);
  const dispatch = useDispatch();

  const dispachar = () => {
    const objData = {
      categoria: dataLocal.categoria,
      pergunta: dataLocal.pergunta,
      respostas: [dataLocal.resposta1, dataLocal.resposta2, dataLocal.resposta3, dataLocal.resposta4],
    };
    dispatch(addQuestion(objData));
    setDataLocal({
      categoria: 'Games',
      pergunta: '',
      resposta1: '',
      resposta2: '',
      resposta3: '',
      resposta4: '',
    })
  };

  const handleInput = ({ target }) => {
    setDataLocal({...dataLocal, [target.name]: target.value});
  };

  return (
    <div className="body-container">
      <main className="main-container">
        <h1>Gerador de perguntas pro Trivia</h1>
        <select value={ dataLocal.categoria } onChange={ handleInput } className='categoria' name="categoria">
          <option name='Games'>Games</option>
          <option name='Animes'>Animes</option>
          <option name='Séries e Filmes'>Séries e Filmes</option>
          <option name='Animações'>Animações</option>
          <option name='Música e Arte'>Música e Arte</option>
          <option name='Outro'>Outro</option>
        </select>
        <input
          value={ dataLocal.pergunta }
          onChange={ handleInput }
          className="input-text pergunta"
          name='pergunta'
          placeholder='Pergunta'
          type="text"
        />
        <div className="questions">
          <input
            value={ dataLocal.resposta1 }
            onChange={ handleInput }
            className="input-text"
            name='resposta1'
            placeholder='Resposta certa'
            type="text"
          />
          <input
           value={ dataLocal.resposta2 }
            onChange={ handleInput }
            className="input-text"
            name='resposta2'
            placeholder='Resposta aleatória'
            type="text"
          />
          <input
            value={ dataLocal.resposta3 }
            onChange={ handleInput }
            className="input-text"
            name='resposta3'
            placeholder='Resposta aleatória'
            type="text"
          />
          <input
            value={ dataLocal.resposta4 }
            onChange={ handleInput }
            className="input-text"
            name='resposta4'
            placeholder='Resposta aleatória'
            type="text"
          />
        </div>
        <button onClick={ dispachar } className="save-button" type='button'>Salvar pergunta</button>
      </main>
      <section className="quadro-JSON">
        <button type='button'>Copy</button>
        { <code className="codigo">{ JSON.stringify(dataRedux) }</code> }
      </section>
    </div>
  );
}
