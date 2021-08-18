import './App.css';
import { Button, Container, } from '@material-ui/core';
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import TopMenu from './Components/TopMenu';
import colorCodes from './Components/ColorCodes';
import React, { useState, useEffect } from 'react';
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

const getColorFromPlayerNumber = (player) => {
  console.log(player)
  switch(player) {
      case 0:
        return 'blue'
      case 1:
        return 'red'
      case 2:
        return 'green'
      case 3: 
        return 'yellow'
      case 4: 
        return 'black'
      case 5: 
        return 'pink'
      case 6: 
        return 'orange'
      default:
        return 'white'
  } 
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [players, setPlayers] = useState([])

  function AddPlayer(){
    let newPlayer = {
      lifeTotal: selectedCategory.startingLife,
      commanderDamage: selectedCategory.maxCommanderDamage,
      color: getColorFromPlayerNumber(players.length)
    }
    setPlayers(prev => [...prev, newPlayer])
  }

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
            <Button variant="contained" onClick={AddPlayer} disabled={selectedCategory === null ? true : false} style={{margin:10}} color="primary">
              Add a player
            </Button>
            <LifeCounterContainer players={players} setNumberOfPlayers={setPlayers}/>
          </Container>      
        </div>
      </CategoryContext.Provider>
    </ThemeProvider>   
  );
}

export default App;
