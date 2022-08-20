import LifeCounterCard from "./LifeCounterCard";
import Grid from "@mui/material/Grid";
import { PlayersContext } from "../../App";
import { useContext } from "react";
//import AnimatedCard from "./AnimatedCard";
import { animated, useTrail } from "react-spring";

function LifeCounterGrid({ setPlayers }) {
  const players = useContext(PlayersContext);
  const trailSprings = useTrail(players.length, {
    from: { opacity: 0, marginRight: -10, marginLeft: 10 },
    to: { opacity: 1, marginRight: 0, marginLeft: 0 },
  });
  //see: https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
  //var players = [];
  //for (var i = 0; i < numberOfPlayers; i++) {
  // note: we are adding a key prop here to allow react to uniquely identify each
  // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //players.push(<LifeCounter key={i} player={i} color={getColorFromPlayerNumber(i)} />);
  //}
  //console.log(players)
  return (
    <Grid container spacing={1} sx={{
      marginBottom:'10px'
    }}>
      {trailSprings.map((spring, index) => (
        //added better responsivity
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <animated.div style={spring}>
            <LifeCounterCard
              playerNumber={index}
              setPlayers={setPlayers}
              players={players}
              player={players[index]}
            />
          </animated.div>
        </Grid>
      ))}
    </Grid>
  );
}

export default LifeCounterGrid;
