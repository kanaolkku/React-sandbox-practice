import React, { useState } from "react";
import { postData } from "../services/apiService";
import { IFormPerson } from "../utils/interfaces";
import "./AddForm.css";

interface MyProps {
  updatePersons: Function;
}

const AddForm = ({ updatePersons }: MyProps): JSX.Element => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleFname = (firstName: string) => {
    setPerson({ ...person, firstName: firstName });
  };

  const handleLname = (lastName: string) => {
    setPerson({ ...person, lastName: lastName });
  };

  const handleAge = (age: string) => {
    setPerson({ ...person, age: age });
  };

  const handleSubmit = async (postdata: IFormPerson) => {
    await postData(postdata);
    updatePersons();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const personFormatted = { ...person, age: parseInt(person.age) };
        handleSubmit(personFormatted);
      }}
    >
      <span>First name:</span>
      <input
        className="form-input"
        value={person.firstName}
        onChange={(e) => handleFname(e.target.value)}
        placeholder="Joonas"
      />
      <span>Last name:</span>
      <input
        className="form-input"
        value={person.lastName}
        onChange={(e) => handleLname(e.target.value)}
        placeholder="Niskanen"
      />
      <span>Age:</span>
      <input
        className="form-input"
        value={person.age}
        onChange={(e) => handleAge(e.target.value)}
        placeholder="23"
      />
      <button className="btn btn-primary" type="submit">
        Add person
      </button>
    </form>
  );
};

export default AddForm;
