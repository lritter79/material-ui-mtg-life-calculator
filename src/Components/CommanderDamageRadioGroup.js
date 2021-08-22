import Radio from '@material-ui/core/Radio'
import CommanderDamageCounter from './CommanderDamageCounter';
import { PlayersContext } from '../App'
import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    blue: {
      color: `blue`,
    },
    green: {
      color: `green`,
    },
    red: {
      color: `red`,
    },
    yellow: {
      color: `yellow`,
    },
    white: {
      color: `white`,
    },
    pink: {
      color: `pink`,
    },
    black: {
      color: `black`,
    },
    orange: {
      color: `orange`,
    },
  }))

function CommanderDamageGroup({amountToAddOrSubtract, player, currentLife}){
    
    console.log(player.id)
    const players = useContext(PlayersContext)

    return (
        <div>
            {players.filter(p => p.id !== player.id).map((p, i) =>  
                {
                    return <CommanderDamageCounter key={i} player={p} amountToAddOrSubtract={amountToAddOrSubtract} currentLife={currentLife} />       
                }                         
            )}
        </div>
    )
}

export default CommanderDamageGroup