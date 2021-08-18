import LifeCounter from './LifeCounter';




function LifeCounterContainer({players, setPlayers}){
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
        <div>
          {players.map((player, index) =>
            <LifeCounter key={index} playerNumber={index+1} player={player} />
          )}
        </div>
      );
    
    
}

export default LifeCounterContainer