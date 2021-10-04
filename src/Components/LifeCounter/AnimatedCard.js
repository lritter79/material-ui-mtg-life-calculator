import React from "react";
import { animated, useSpring } from "react-spring";
import LifeCounterCard from "./LifeCounterCard";

export default function AnimatedCard({
  player,
  playerNumber,
  players,
  setPlayers,
}) {
  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div style={springProps}>
      <LifeCounterCard
        playerNumber={playerNumber}
        setPlayers={setPlayers}
        players={players}
        player={player}
      />
    </animated.div>
  );
}
