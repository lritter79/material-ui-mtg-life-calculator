import { InputLabel, MenuItem, SelectChangeEvent, Select } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";
import Dice from "../../Data/Dice";
import DiceRoller from "./DiceRoller";

export default function DieForm() {
  const [numberOfDie, setnumberOfDie] = useState<number>(1);
  const [numberOfSides, setnumberOfSides] = useState<number>(2);
  return (
    <form noValidate autoComplete="off">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Number of Die</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={"1"}
          label="Age"
          onChange={(event: SelectChangeEvent) => {
            setnumberOfDie(+event.target.value);
          }}
        >
          <MenuItem value="0">0</MenuItem>
          <MenuItem value="1">1</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Number of Side per Die</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          defaultValue={"2"}
          label="Age"
          onChange={(event: SelectChangeEvent) => {
            setnumberOfSides(+event.target.value);
          }}
        >
          {Dice.map((die) => {
            return (
              <MenuItem value={die.numberOfSides.toString()}>
                {die.numberOfSides}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <br></br>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        aria-label="add-player"
      >
        Add a player
      </Button>
    </form>
  );
}
