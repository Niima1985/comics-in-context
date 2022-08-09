import React from 'react';
import './App.css';
import UserInterface from "./components/UserInterface";
import StylesContext from "./components/StylesContext";

function App() {
  const stylin = {
    background: "#1ECD97",
    display: "block",
    width: 110,
    height: 50,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    borderRadius: 13,
  
  };
  return (
    <main>
    <StylesContext.Provider value={stylin}>
        <h1
          style={{
            textAlign: "center",
            color: "#FEE001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50
          }}>
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
      </StylesContext.Provider>
    </main>
  );
}

export default App;             
