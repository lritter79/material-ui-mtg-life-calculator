import LifeCounter from "./LifeCounter";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function LifeCounterContainer({ players, setPlayers }) {
  //const [players, setPlayers] = useState([])

  //see: https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
  //var players = [];
  //for (var i = 0; i < numberOfPlayers; i++) {
  // note: we are adding a key prop here to allow react to uniquely identify each
  // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //players.push(<LifeCounter key={i} player={i} color={getColorFromPlayerNumber(i)} />);
  //}
  //console.log(players)
  return (
    <Grid container spacing={1}>
      {players.map((player, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <LifeCounter
            key={index}
            playerNumber={index}
            setPlayers={setPlayers}
            player={player}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default LifeCounterContainer;
