import './App.css';
import { Button, Container, } from '@material-ui/core';
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import TopMenu from './Components/TopMenu';
import colorCodes from './Components/ColorCodes';
import { useState } from 'react';



const categories = [
  {id: 0, name:'EDH'},
  {id: 1, name:'Pauper EDH'},
  {id: 2, name:'60 Card'},
  {id: 3, name:'Two-Headed Giant'}
]

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

  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Container>
        <Button>
          Add a player
        </Button>
        <TopMenu categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></TopMenu>
        </Container>      
      </div>
    </ThemeProvider>   
  );
}

export default App;
