import React, { useState } from "react";
import { editPerson } from "../services/apiService";
import { IPerson } from "../utils/interfaces";
import { deletePerson } from "../services/apiService";
import "./Person.css";

interface MyProps {
  person: IPerson;
  updatePersons: Function;
}

const Person = ({ person, updatePersons }: MyProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [personInfo, setPersonInfo] = useState({
    ...person,
    age: person.age.toString(),
  });

  const handleFname = (firstName: string): void => {
    setPersonInfo({ ...personInfo, firstName: firstName });
  };

  const handleLname = (lastName: string): void => {
    setPersonInfo({ ...personInfo, lastName: lastName });
  };

  const handleAge = (age: string): void => {
    setPersonInfo({ ...personInfo, age: age });
  };

  const handleEditToggle = (): void => {
    setIsEditing(!isEditing);
  };

  const handleEditSubmit = async (id: string) => {
    const person = {
      ...personInfo,
      age: parseInt(personInfo.age),
    };

    await editPerson(id, person);
    setIsEditing(!isEditing);
    updatePersons();
  };

  const handleDelete = async (id: string) => {
    await deletePerson(id);
    updatePersons();
  };

  if (isEditing) {
    return (
      <>
        <tr key={person._id}>
          <td>
            <input
              className="person-input"
              autoFocus
              value={personInfo.firstName}
              onChange={(e) => handleFname(e.target.value)}
            />
          </td>
          <td>
            <input
              className="person-input"
              value={personInfo.lastName}
              onChange={(e) => handleLname(e.target.value)}
            />
          </td>
          <td>
            <input
              className="person-input"
              value={personInfo.age}
              onChange={(e) => handleAge(e.target.value)}
            />
          </td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => handleEditSubmit(person._id)}
            >
              save
            </button>
          </td>
          <td>
            <button
              className="btn btn-error"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              Cancel
            </button>
          </td>
        </tr>
      </>
    );
  } else {
    return (
      <>
        <tr key={person._id}>
          <td>{person.firstName}</td>
          <td>{person.lastName}</td>
          <td>{person.age}</td>
          <td>
            <button
              className="btn btn-secondary"
              onClick={() => handleEditToggle()}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="btn btn-error"
              onClick={() => {
                handleDelete(person._id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
};

export default Person;
