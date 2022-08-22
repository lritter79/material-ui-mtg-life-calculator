import {
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Select,
  FormHelperText,
  FormLabel,
  Grid,
} from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import React, { FormEventHandler, useState } from "react";
import Dice from "../../Data/Dice";

type dieFormProps = { setResult: React.Dispatch<React.SetStateAction<any>> };

export default function DieForm({ setResult }: dieFormProps) {
  const [numberOfDie, setnumberOfDie] = useState<number>(1);
  const [numberOfSides, setnumberOfSides] = useState<number>(2);

  const roll: () => number = () => {
    return Math.ceil(Math.random() * numberOfSides);
  };
  const rollDice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let total = 0;
    for (let i = 0; i < numberOfDie; i++) {
      total += roll();
    }
    setResult(total);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={rollDice}>
      <Grid container rowSpacing={1} direction="column">
        <Grid item>
          <FormControl>
            <FormLabel>Number of Die</FormLabel>
            <Select
              autoWidth
              onChange={(event: SelectChangeEvent) => {
                setnumberOfDie(+event.target.value);
              }}
              defaultValue="1"
              value={numberOfDie.toString()}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Number of Sides per Die</FormLabel>
            <Select
              defaultValue={Dice[0].numberOfSides.toString()}
              onChange={(event: SelectChangeEvent) => {
                setnumberOfSides(+event.target.value);
              }}
              autoWidth
              value={numberOfSides.toString()}
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
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            aria-label="add-player"
          >
            Roll{" "}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
