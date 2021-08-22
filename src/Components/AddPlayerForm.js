import{ useState, useContext } from 'react';
import { CategoryContext } from '../App';
import { Button, TextField } from '@material-ui/core';

function AddPlayerForm({players, setPlayers}){
    const [nameError, setNameError] = useState(false)
    const [playerName, setPlayerName] = useState('')
    const selectedCategory = useContext(CategoryContext)

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
    const AddPlayer = (e) => {
        e.preventDefault()
        setNameError(false)
    
        console.log(playerName)
        if (playerName === ''){
          setNameError(true)
        }
        else
        {
          let newPlayer = {
            lifeTotal: selectedCategory.startingLife,
            commanderDamage: selectedCategory.maxCommanderDamage,
            color: getColorFromPlayerNumber(players.length),
            id: players.length,
            name:playerName
          }
          setPlayers(prev => [...prev, newPlayer])
          setPlayerName('')
        }
      }

      return (
        <form 
              noValidate 
              autocomplete="off"
              onSubmit={AddPlayer}
            >
              <TextField 
                variant="outlined" 
                label="Player Name" 
                color="secondary"
                required
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                error={nameError}
              />  
              <br></br>         
              <Button 
                type="submit"
                variant="contained"  
                disabled={selectedCategory === null ? true : false} 
                style={{margin:10}} 
                color="primary">
                Add a player
              </Button>
            </form>
      );
    
    
}

export default AddPlayerForm