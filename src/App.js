import "./App.css";
import { Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import TopMenu from "./Components/TopMenu";
import colorCodes from "./Components/LifeCounter/ColorCodes";
import React, { useEffect, useRef } from "react";
import LifeCounter from "./Components/LifeCounter/LifeCounter";
import categories from "./Components/LifeCounter/Categories";
import { brown } from "@material-ui/core/colors";
import useSessionStorage from "./Components/Functions/UseSessionStorage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DiceRoller from "./Components/DiceRoller/DiceRoller";
import ResetGame from "./Components/Functions/ResetGame";
export const CategoryContext = React.createContext();
export const PlayersContext = React.createContext();

const customTheme = createTheme({
  palette: {
    primary: {
      main: colorCodes.green.hsl,
    },
    secondary: {
      main: brown[500],
    },
  },
});

customTheme.typography.body2 = {
  fontSize: "1.5rem",
  fontWeight: "300",
};

//customTheme.typography.h6 = {
//fontSize: '1rem',
//'@media (min-width:600px)': {
//  fontSize: '1.5rem',
//},
//[customTheme.breakpoints.down('lg')]: {
//fontSize: '1rem',
//},
//}

function App() {
  const isFirstRun = useRef(true);

  const [selectedCategory, setSelectedCategory] = useSessionStorage(
    "category",
    null
  );
  const [players, setPlayers] = useSessionStorage("players", []);
  useEffect(() => {
    if (isFirstRun.current === false) {
      console.log("reset life totals");
      setPlayers((prev) => ResetGame(prev, selectedCategory));
    }
  }, [selectedCategory]);
  useEffect(() => {
    //console.log("set players use effect");
    //console.log(players);
  }, [players]);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    console.log("Effect was run");
    console.log(isFirstRun);
  });

  return (
    <ThemeProvider theme={customTheme}>
      <CategoryContext.Provider value={selectedCategory}>
        <PlayersContext.Provider value={players}>
          <BrowserRouter>
            <TopMenu></TopMenu>
            <Container>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/lifecounter" />
                </Route>
                <Route path="/lifecounter">
                  <LifeCounter
                    categories={categories}
                    setSelectedCategory={setSelectedCategory}
                    setPlayers={setPlayers}
                  ></LifeCounter>
                </Route>
                <Route exact path="/diceroller" component={DiceRoller} />
              </Switch>
            </Container>
          </BrowserRouter>
        </PlayersContext.Provider>
      </CategoryContext.Provider>
    </ThemeProvider>
  );
}

export default App;
