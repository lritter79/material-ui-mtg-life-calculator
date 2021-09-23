function ResetGame(players, selectedCategory) {
  return players.map((player) => ({
    name: player.name,
    id: player.id,
    lifeTotal: selectedCategory.startingLife,
    commanderDamage: 0,
    color: player.color,
  }));
}

export default ResetGame;
