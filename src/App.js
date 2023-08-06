import './App.css';
import foodsData from "./foods.json";
import React, {useState} from 'react';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import SearchBar from './Components/SearchBar';

function App() {


  const [foods, setFoods] = useState(foodsData || []);

  const handleAddFood = (newFood) => {
    setFoods((prevFoods) => [...prevFoods, newFood])
  };



  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFood = foods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



  const handleDeleteFood = (foodToDelete) => {
    setFoods((prevFoods) => prevFoods.filter((food) => food !== foodToDelete));
  }


  return (

    <div className="App">
      <div className="Form">
      <AddFoodForm  onAddFood={handleAddFood}/>
      </div>
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange}/>
      <h3>Food List</h3>
      <div className="Card">
        {filteredFood.map((food) => (
          <div key={food.id}>
          <FoodBox food={food} onDeleteFood={handleDeleteFood}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
