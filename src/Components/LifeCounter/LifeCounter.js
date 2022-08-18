import AddPlayerForm from "./AddPlayerForm";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LifeCounterGrid from "./LifeCounterGrid";
import { CategoryContext } from "../../App";
import { useState, useContext, useCallback } from "react";
import { PlayersContext } from "../../App";
import { makeStyles } from "@mui/styles";
import ResetGame from "../Functions/ResetGame";

const useStyles = makeStyles((theme) => {
  return {
    center: {
      textAlign: "center",
      padding: theme.spacing(1),
    },
  };
});

function LifeCounter({ setPlayers, categories, setSelectedCategory }) {
  const selectedCategory = useContext(CategoryContext);
  const players = useContext(PlayersContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  //useEffect(() => console.log(selectedCategory?.name), [selectedCategory]);
  //const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const reset = useCallback(
    (event) => {
      console.log("reset life totals");
      setPlayers((prev) => ResetGame(prev, selectedCategory));
    },
    [players]
  );

  const handleMenuItemClick = (category) => {
    setSelectedCategory(category);
    setAnchorEl(null);
  };

  const onResetClick = function (e) {
    reset(e);
  };

  return (
    <div>
      <div className={classes.center}>
        <Button
          aria-label="Select a game format button"
          aria-controls="menuFormatSelect"
          onClick={toggleIsOpen}
          variant="contained"
          color="primary"
          id="btnSelectGameFormat"
        >
          {selectedCategory === null
            ? "Select A Format"
            : selectedCategory.name}
        </Button>
      </div>

      <Menu
        aria-expanded={Boolean(anchorEl)}
        id="menuFormatSelect"
        aria-labelledby="btnSelectGameFormat"
        open={Boolean(anchorEl)}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            onClick={() => handleMenuItemClick(category)}
          >
            {category.name}
          </MenuItem>
        ))}
      </Menu>
      <AddPlayerForm setPlayers={setPlayers} players={players} />
      <div className={classes.center}>
        {players.length >= 1 && (
          <Button
            color="primary"
            aria-label="reset life totals"
            component="div"
            disabled={players.length < 1 ? true : false}
            onClick={onResetClick}
            variant="outlined"
          >
            Reset Life Totals
          </Button>
        )}
      </div>

      <LifeCounterGrid players={players} setPlayers={setPlayers} />
    </div>
  );
}

export default LifeCounter;
