// Modules
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'

// Themes
import estilo1 from './themes/estilo1';
import estilo2 from './themes/estilo2';

// Components
import Form from 'react-bootstrap/Form';

// Styled
import * as Styled from './Styled';

import './App.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState(estilo1);

  return (
    <ThemeProvider theme={currentTheme}>
      <Styled.Wrapper>
        <Styled.Header>
          <div className="container">
            <h2>My project</h2>
            <Form>
              <Form.Check 
                custom
                type={'radio'}
                id={`estilo-1`}
                label={`Estilo 1`}
                name="theme"
                checked={currentTheme === estilo1}
                value={estilo1}
                onClick={() => setCurrentTheme(estilo1)}
              />

              <Form.Check
                custom
                type={'radio'}
                label={'Estilo 2'}
                id={`estilo-2`}
                value={estilo2}
                checked={currentTheme === estilo2}
                name="theme"
                onClick={() => setCurrentTheme(estilo2)}
              />
            </Form>
          </div>
        </Styled.Header>
        <Styled.Title>
          <div className="container">
            <p>Styled component with design system</p>
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
              <h2> What is React</h2>
            
              <p>React is a JavaScript library build in 2013 by the Facebook development team to make user interfaces more modular (or reusable) and easier to maintain. According to React's website, it is used to "Build encapsulated components that manage their own state, then compose them to make complex UIs."</p>

              <p>I'm going to use a lot of Facebook examples throughout this post since they wrote React in the first place.</p>

              <p>Remember when Facebook moved from just likes to reactions? Instead of just being able to like posts, you can now react with a heart, or a smiley face, or a like to any post. If those reactions were primarily made in HTML, it would be a tremendous amount of work to change all of those likes to reactions and to make sure that they work.</p>

              <p>This is where React comes in -- instead of implementing the "separation of concerns" that gets impressed upon developers from day one, we have a different architecture in React that increases modularity based on a component structure instead of separating the different programming languages.</p>

              <h2>React vs. Vanilla JavaScript</h2>
              <p>When we talk about "vanilla" JavaScript, we are normally talking about writing JavaScript code that doesn't use additional libraries like JQuery, React, Angular, or Vue. If you would like to read more about those and what a framework is, I have a post all about web frameworks.</p>

              <p>A couple quick notes before we begin</p>
              <p>To make this tutorial a little more succinct, some code examples have ... before or after them, which means that some code was omitted.
              I use Git diffs in some places to show lines of code that will change, so if you copy and paste, you need to delete the + at the beginning of the line.
              I have full CodePens with the completed versions of each section -- so you can use those to catch-up.
              More advanced concepts that aren't essential for the tutorial are in blockquotes, these are mostly just facts that I think are interestin
              </p>
              <button>Ver mais</button>
            
            </div>
          </Styled.Content>
        <Styled.Footer>
          <h2>My project</h2>
        </Styled.Footer>
     </Styled.Wrapper>
    </ThemeProvider>
  );
}

export default App;

