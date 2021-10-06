import PlayerInterface from "../../PlayerInterface";
import CategoryInterface from "../../CategoryInterface";

function ResetGame(players:PlayerInterface[], selectedCategory: CategoryInterface) {
  return players.map((player) => ({
    name: player.name,
    id: player.id,
    lifeTotal: selectedCategory.startingLife,
    commanderDamage: 0,
    color: player.color,
  }));
}

export default ResetGame;
