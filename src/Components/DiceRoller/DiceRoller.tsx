import FeatureFlags from "../../Data/FeatureFlags";
import DieForm from "./DieForm";
import CenteredContainer from "../Utility/CenteredContainer";
import { useState } from "react";
import Result from "./Result";
function DiceRoller() {
  const [result, setResult] = useState<number | undefined>(undefined);

  return (
    <>
      {FeatureFlags.DICEROLLER ? (
        <CenteredContainer>
          <DieForm setResult={setResult}></DieForm>
          {result && <Result result={result}></Result>}
        </CenteredContainer>
      ) : (
        <div>not ready</div>
      )}
    </>
  );
}

export default DiceRoller;
