import LifeCounter from './LifeCounter';

function LifeCounterContainer({numberOfPlayers, setNumberOfPlayers}){

  //see: https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
  var players = [];
  for (var i = 0; i < numberOfPlayers; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      players.push(<LifeCounter key={i} player={i} />);
  }
  console.log(players)
      return (
        <div>
          {players}
        </div>
      );
    
    
}

export default LifeCounterContainer