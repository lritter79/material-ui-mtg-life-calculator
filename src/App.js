import "./App.css";
import { Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import TopMenu from "./Components/TopMenu";
import colorCodes from "./Components/ColorCodes";
import React, { useEffect } from "react";
import LifeCounterContainer from "./Components/LifeCounterContainer";
import AddPlayerForm from "./Components/AddPlayerForm";
import categories from "./Components/Categories";
import { brown } from "@material-ui/core/colors";
import useSessionStorage from "./Components/Functions/UseSessionStorage";
import Layout from "./Components/Layout";
import CustomDrawer from "./Components/CustomDrawer";
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
  const [selectedCategory, setSelectedCategory] = useSessionStorage(
    "category",
    null
  );
  const [players, setPlayers] = useSessionStorage("players", []);

  useEffect(() => {
    setPlayers((prev) =>
      prev.map((player) => ({
        name: player.name,
        id: player.id,
        lifeTotal: selectedCategory.startingLife,
        commanderDamage: selectedCategory.maxCommanderDamage,
        color: player.color,
      }))
    );
  }, [selectedCategory]);

  return (
    <ThemeProvider theme={customTheme}>
      <CategoryContext.Provider value={selectedCategory}>
        <PlayersContext.Provider value={players}>
          <Layout>
            <Container>
              <AddPlayerForm setPlayers={setPlayers} players={players} />
              <LifeCounterContainer players={players} setPlayers={setPlayers} />
            </Container>
          </Layout>
        </PlayersContext.Provider>
      </CategoryContext.Provider>
    </ThemeProvider>
  );
}

export default App;
