import React, { useEffect, useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import PersonsTable from "./components/PersonsTable";
import { getData } from "./services/apiService";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    updatePersons();
  }, []);

  const updatePersons = async () => {
    const personsData = await getData();
    setPersons(personsData);
  };

  return (
    <div className="App">
      <h1>Person table</h1>
      <AddForm updatePersons={updatePersons} />
      <PersonsTable persons={persons} updatePersons={updatePersons} />
    </div>
  );
}

export default App;
