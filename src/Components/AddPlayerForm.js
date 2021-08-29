import { useState, useContext } from "react";
import { CategoryContext } from "../App";
import { Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  form: {
    textAlign: "center",
    padding: "10px",
  },
});

function AddPlayerForm({ players, setPlayers }) {
  const [nameError, setNameError] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const selectedCategory = useContext(CategoryContext);
  const classes = useStyles();
  const AddPlayer = (e) => {
    e.preventDefault();
    setNameError(false);

    console.log(playerName);
    if (playerName === "") {
      setNameError(true);
    } else {
      let newPlayer = {
        lifeTotal: selectedCategory.startingLife,
        commanderDamage: selectedCategory.maxCommanderDamage,
        id: players.length,
        name: playerName,
      };
      setPlayers((prev) => [...prev, newPlayer]);
      setPlayerName("");
    }
  };

  return (
    <form
      noValidate
      autocomplete="off"
      className={classes.form}
      onSubmit={AddPlayer}
    >
      <TextField
        variant="outlined"
        label="Player Name"
        color="secondary"
        required
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        error={nameError}
        inputProps={{ maxLength: 20 }}
      />
      <br></br>
      <Button
        type="submit"
        variant="contained"
        disabled={selectedCategory === null ? true : false}
        style={{ margin: 10 }}
        color="primary"
      >
        Add a player
      </Button>
    </form>
  );
}

export default AddPlayerForm;
