import { CategoryContext } from '../App';
import { useContext, useState, useEffect } from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles({
  lifeCounterBox: {    
    borderRadius: '10px',
    marginBottom: '3vh'
  },
  blue: {
    border: `1px solid blue`,
  },
  green: {
    border: `1px solid green`,
  },
  red: {
    border: `1px solid red`,
  },
  yellow: {
    border: `1px solid yellow`,
  },
  white: {
    border: `1px solid white`,
  },
})

function LifeCounter({player, color}){
  console.log(color)

  const selectedCategory = useContext(CategoryContext)
  const [startingLife, setStartingLife] = useState(selectedCategory.startingLife)

  const classes = useStyles(color)
  console.log(classes.lifeCounterBox)
  useEffect(() => {
    setStartingLife(selectedCategory.startingLife)
  }, [selectedCategory])
    return (
        <Box className={`${classes.lifeCounterBox} ${classes[color]}`}>
          <Typography variant='h6'>
          Player {player + 1}
          </Typography>
          
          {startingLife}
        </Box>
      );
}

export default LifeCounter