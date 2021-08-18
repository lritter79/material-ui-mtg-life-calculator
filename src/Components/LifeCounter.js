import { CategoryContext } from '../App';
import { useContext, useState, useEffect } from 'react';
import { Typography, Box, IconButton, NativeSelect } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const useStyles = makeStyles(theme => ({
  select: {
    fontSize:'1.25rem'
  },
  button: {
    margin: theme.spacing(1),
    //how to set break points in styles
    fontSize: 'xxx-large',

    [theme.breakpoints.down("sm")]: {
      fontSize: 'xx-large',
    }
  },
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
  pink: {
    border: `0.20em solid pink`,
  },
  black: {
    border: `0.20em solid black`,
  },
  orange: {
    border: `0.20em solid orange`,
  },
  addLife: {
    color: 'green'
  },
  subtractLife:{
    color: 'red'
  },
  h6:{
    fontSize: '1.5rem'
  }
}))


function LifeCounter({player, playerNumber}){
  const [currentLife, setCurrentLife] = useState(player.lifeTotal)
  const [color, setColor] = useState(player.color)
  useEffect(() => setCurrentLife(player.lifeTotal),[player])
  const selectedCategory = useContext(CategoryContext)
  const [amountToAddOrSubtract, setAmountToAddOrSubtract] = useState(0)
  //const [startingLife, setStartingLife] = useState(selectedCategory.startingLife)
  const handleChange = (event) => {
    setAmountToAddOrSubtract(event.target.value);
  }

  const addLife = (event) => {
    //for the additional '+' see https://stackoverflow.com/questions/14496531/adding-two-numbers-concatenates-them-instead-of-calculating-the-sum
    setCurrentLife(+currentLife + +amountToAddOrSubtract)
  }

  const subtractLife = (event) => {
    //for the additional '+' see https://stackoverflow.com/questions/14496531/adding-two-numbers-concatenates-them-instead-of-calculating-the-sum
    setCurrentLife(+currentLife - +amountToAddOrSubtract)
  }

  var items = [];
  for (var i = 0; i < 101; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      items.push(<option value={i} key={i}>{i}</option>);
  }

  const classes = useStyles()
  //console.log(classes.lifeCounterBox)
  //useEffect(() => {
  //  setStartingLife(selectedCategory.startingLife)
  //}, [selectedCategory])
    return (
        <Box className={`${classes.lifeCounterBox} ${classes[color]}`}>
          <Typography variant='h6' className={classes.h6}>
            Player {playerNumber}
          </Typography>
          <div>
            {currentLife}
          </div>
          <IconButton className={`${classes.button}`} onClick={addLife}>
            <AddCircleIcon fontSize="inherit" className={`${classes.addLife}`}></AddCircleIcon>
          </IconButton>
          <NativeSelect 
            value={amountToAddOrSubtract}
            onChange={handleChange}
            className={`${classes.select}`}
          >
            {items}
          </NativeSelect>
          <IconButton className={`${classes.button}`} onClick={subtractLife}>
            <RemoveCircleIcon fontSize="inherit" className={`${classes.subtractLife}`}></RemoveCircleIcon>
          </IconButton>
        </Box>
      );
}

export default LifeCounter