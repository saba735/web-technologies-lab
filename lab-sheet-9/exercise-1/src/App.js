import React from "react";

function StudentProfile() {

  const name = "Sabareesh";
  const department = "CSE";
  const year = "3rd Year";
  const section = "A";

  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
      <p>Section: {section}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <StudentProfile />
    </div>
  );
}

export default App;