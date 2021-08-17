import { CategoryContext } from '../App';
import { useContext, useState, useEffect } from 'react';
import { Typography, Box, IconButton, NativeSelect } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const useStyles = makeStyles({
  lifeCounterBox: {    
    borderRadius: '10px',
    marginBottom: '3vh'
  },
  blue: {
    border: `0.20em solid blue`,
  },
  green: {
    border: `0.20em solid green`,
  },
  red: {
    border: `0.20em solid red`,
  },
  yellow: {
    border: `0.20em solid yellow`,
  },
  white: {
    border: `0.20em solid white`,
  },
})


function LifeCounter({player, color, playerNumber}){
  const [currentLife, setCurrentLife] = useState(player.lifeTotal)
  useEffect(() => setCurrentLife(player.lifeTotal),[player])
  const selectedCategory = useContext(CategoryContext)
  //const [startingLife, setStartingLife] = useState(selectedCategory.startingLife)
  var items = [];
  for (var i = 0; i < 100; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      items.push(<option value={i} key={i}>{i}</option>);
  }

  const classes = useStyles(color)
  //console.log(classes.lifeCounterBox)
  //useEffect(() => {
  //  setStartingLife(selectedCategory.startingLife)
  //}, [selectedCategory])
    return (
        <Box className={`${classes.lifeCounterBox} ${classes[color]}`}>
          <Typography variant='h6'>
            Player {playerNumber}
          </Typography>
          <div>
            {currentLife}
          </div>
          <IconButton>
            <AddCircleIcon></AddCircleIcon>
          </IconButton>
          <NativeSelect>
            {items}
          </NativeSelect>
          <IconButton>
            <RemoveCircleIcon></RemoveCircleIcon>
          </IconButton>
        </Box>
      );
}

export default LifeCounter