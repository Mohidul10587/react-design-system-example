// Modules
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'

// Themes
import boticario from './themes/boticario';
import eudora from './themes/eudora';

// Components
import Form from 'react-bootstrap/Form';

// Styled
import * as Styled from './Styled';

import './App.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState(boticario);

  return (
    <ThemeProvider theme={currentTheme}>
      <Styled.Wrapper>
        <Styled.Header>
          <div className="container">
            <h2>Design System</h2>
            <Form>
              <Form.Check 
                custom
                type={'radio'}
                id={`estilo-1`}
                label={`Estilo 1`}
                name="theme"
                checked={currentTheme === boticario}
                value={boticario}
                onChange={() => setCurrentTheme(boticario)}
              />

              <Form.Check
                custom
                type={'radio'}
                label={'Estilo 2'}
                id={`estilo-2`}
                value={eudora}
                checked={currentTheme === eudora}
                name="theme"
                onChange={() => setCurrentTheme(eudora)}
              />
            </Form>
          </div>
        </Styled.Header>
        <Styled.Title>
          <div className="container">
            <p>Aplicando Design System com Styled Components em ReactJS</p>
          </div>
        </Styled.Title>
        <Styled.BannerWrapper image='https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg'/>
          <Styled.Information>
            <div className="container">
              <p>
                Por <span>Nicolas Troles</span>, postado em <span>28 de agosto de 2020.</span>
              </p>
            </div>
          </Styled.Information>

          <Styled.Content>
            <div className="container">

            <h2>O que é Design System?</h2>
            <p>Essa é uma pergunta difícil, mas gosto de pensar que Design System é um padrão desenvolvido que contém todo o Design da sua aplicação mapeado e documentado. Ele é como se fosse a API do Design em que você consome os componentes e estilos para montar suas telas, facilitando demais a vida dos desenvolvedores na construção do seu produto</p>
            <h2>O que é React?</h2>
            <p>React é uma fantástica biblioteca JavaScript de código aberto com foco em criar interfaces de usuário para páginas web. Sua estrutura é voltada para criação e reutilização de componentes, o que nos permite uma boa abstração de interface.</p>
            <p>React foi desenvolvido pelo Facebook e lançado em 2013, além de ser uma biblioteca super popular no mundo Javascript, ela tem sido usada por grandes companhias ao redor do mundo como:</p>
            <button><a href='https://medium.com/' rel="noopener noreferrer" target='_blank'>Ver mais</a></button>
            </div>
          </Styled.Content>
        <Styled.Footer>
          <h2>Design System</h2>
        </Styled.Footer>
     </Styled.Wrapper>
    </ThemeProvider>
  );
}

export default App;

