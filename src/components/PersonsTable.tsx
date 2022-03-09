import React, { useEffect, useState } from "react";
import Person from "./Person";
import { IPerson } from "../utils/interfaces";
import "./PersonsTable.css";

interface MyProps {
  persons: IPerson[];
  updatePersons: Function;
}

const PersonsTable = ({ persons, updatePersons }: MyProps) => {
  const [sortedPersons, setSortedPersons] = useState(persons);
  const [sortedBy, setSortedBy] = useState("");

  useEffect(() => {
    const sortedArray = sortByField(persons, sortedBy);
    setSortedPersons(sortedArray);
  }, [persons, sortedBy]);

  const sortByField = (personArr: IPerson[], field?: string): IPerson[] => {
    let sortedArray: IPerson[] = [];
    if (field === "firstName") {
      sortedArray = [...personArr].sort((a, b) => {
        return a.firstName.localeCompare(b.firstName);
      });
    } else if (field === "lastName") {
      sortedArray = [...personArr].sort((a, b) => {
        return a.lastName.localeCompare(b.lastName);
      });
    } else if (field === "age") {
      sortedArray = [...personArr].sort((a, b) => {
        return Number(a.age) - Number(b.age);
      });
    } else {
      sortedArray = personArr;
    }

    return sortedArray;
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th
              className="table-header"
              onClick={() => setSortedBy("firstName")}
            >
              First Name
            </th>
            <th
              className="table-header"
              onClick={() => setSortedBy("lastName")}
            >
              Last Name
            </th>
            <th className="table-header" onClick={() => setSortedBy("age")}>
              Age
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {persons &&
            sortedPersons.map((person) => {
              return (
                <Person
                  person={person}
                  key={person._id}
                  updatePersons={updatePersons}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default PersonsTable;
