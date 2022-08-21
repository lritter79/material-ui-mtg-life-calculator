import FeatureFlags from "../../Data/FeatureFlags";
import DieForm from "./DieForm";

function DiceRoller() {
  return (<>
{  (FeatureFlags.DICEROLLER) ? 
     <DieForm></DieForm>
  :<div>not ready</div>}


  </>
    ) ;
}

export default DiceRoller;
