import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
      <ProfileCard
        name="Anjali Adhana"
        role="Frontend Developer"
        location="Sohna, India"
        email="anjaliadhana@gmail.com.com"
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
