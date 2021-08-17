import LifeCounter from './LifeCounter';


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
      default:
        return 'white'
  } 
}

function LifeCounterContainer({numberOfPlayers, setNumberOfPlayers}){
  //const [players, setPlayers] = useState([])

  //see: https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
  var players = [];
  for (var i = 0; i < numberOfPlayers; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      players.push(<LifeCounter key={i} player={i} color={getColorFromPlayerNumber(i)} />);
  }
  //console.log(players)
      return (
        <div>
          {players}
        </div>
      );
    
    
}

export default LifeCounterContainer