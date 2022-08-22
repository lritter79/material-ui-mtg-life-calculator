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
import { Tooltip } from "@mui/material";
import Fade from '@mui/material/Fade';
import CenteredContainer from '../Utility/CenteredContainer'

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
      <CenteredContainer>
        <Tooltip title={<p>The variation of Magic: The Gathering you want to play</p>} 
          TransitionComponent={Fade}
        placement="left"
        arrow>
          <Button
            aria-label="Select a game format button"
            aria-controls="menuFormatSelect"
            onClick={toggleIsOpen}
            variant="bold"
            id="btnSelectGameFormat"
          >
            {selectedCategory === null
              ? "Select A Format"
              : selectedCategory.name}
          </Button>
        </Tooltip>
      </CenteredContainer>

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
      <CenteredContainer>
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
      </CenteredContainer>

      <LifeCounterGrid players={players} setPlayers={setPlayers} />
    </div>
  );
}

export default LifeCounter;
