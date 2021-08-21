import './App.css';
import { Container } from '@material-ui/core';
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import TopMenu from './Components/TopMenu';
import colorCodes from './Components/ColorCodes';
import React, { useState, useEffect } from 'react';
import LifeCounterContainer from './Components/LifeCounterContainer';
import AddPlayerForm from './Components/AddPlayerForm';
import categories from './Components/Categories';
import { brown } from '@material-ui/core/colors';

export const CategoryContext = React.createContext()

const customTheme = createTheme({
  palette: {
    primary: {
      main: colorCodes.green.hsl,
    },
    secondary: {
      main: brown[500],
    }
  },
})

//customTheme.typography.h6 = {
  //fontSize: '1rem',
  //'@media (min-width:600px)': {
  //  fontSize: '1.5rem',
  //},
  //[customTheme.breakpoints.down('lg')]: {
    //fontSize: '1rem',
  //},
//}


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [players, setPlayers] = useState([])
  

  useEffect(() => {
    setPlayers(prev => prev.map(player => ({
      lifeTotal: selectedCategory.startingLife,
      commanderDamage: selectedCategory.maxCommanderDamage
    })))
  }, [selectedCategory])

  return (
    <ThemeProvider theme={customTheme}>
      <CategoryContext.Provider value={selectedCategory}>
        <div className="App">
        <TopMenu categories={categories} setSelectedCategory={setSelectedCategory}></TopMenu>
          <Container>
            <AddPlayerForm setPlayers={setPlayers} players={players} />
            <LifeCounterContainer players={players} setNumberOfPlayers={setPlayers}/>
          </Container>      
        </div>
      </CategoryContext.Provider>
    </ThemeProvider>   
  );
}

export default App;
