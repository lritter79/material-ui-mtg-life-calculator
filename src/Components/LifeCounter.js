import { CategoryContext } from '../App';
import { useContext, useState, useEffect } from 'react';

function LifeCounter({player}){
  const selectedCategory = useContext(CategoryContext)
  const [startingLife, setStartingLife] = useState(selectedCategory.startingLife)
  useEffect(() => {
    setStartingLife(selectedCategory.startingLife)
  }, [selectedCategory])
    return (
        <div>
          {player}
          {startingLife}
        </div>
      );
}

export default LifeCounter