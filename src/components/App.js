import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  }



  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className="App dark">
      <header>
        <h2>Shopster</h2>
        <button onClick={() => toggleDarkMode()}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );


}

export default App;