import React from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h2>Student Cards</h2>

      <StudentCard name="Arun" department="CSE" marks="85" />
      <StudentCard name="Priya" department="ECE" marks="90" />
      <StudentCard name="Rahul" department="IT" marks="88" />

    </div>
  );
}

export default App;