import './App.css';
import { Button, Container, } from '@material-ui/core';
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import TopMenu from './Components/TopMenu';
import colorCodes from './Components/ColorCodes';
import React, { useState } from 'react';
import LifeCounterContainer from './Components/LifeCounterContainer';
import categories from './Components/Categories';

export const CategoryContext = React.createContext()

const customTheme = createTheme({
  palette: {
    primary: {
      main: colorCodes.green.hsl,
    },
    secondary: {
      main: colorCodes.brown.hsl,
    }
  },
});

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [numberOfPlayers, setNumberOfPlayers] = useState(0)

  function AddPlayer(){
    setNumberOfPlayers(numberOfPlayers + 1)
  }


  return (
    <ThemeProvider theme={customTheme}>
      <CategoryContext.Provider value={selectedCategory}>
        <div className="App">
        <TopMenu categories={categories} setSelectedCategory={setSelectedCategory}></TopMenu>
          <Container>
            <Button variant="contained" onClick={AddPlayer} disabled={selectedCategory === null ? true : false} style={{margin:10}} color="primary">
              Add a player
            </Button>
            <LifeCounterContainer numberOfPlayers={numberOfPlayers} setNumberOfPlayers={setNumberOfPlayers}/>
          </Container>      
        </div>
      </CategoryContext.Provider>
    </ThemeProvider>   
  );
}

export default App;
