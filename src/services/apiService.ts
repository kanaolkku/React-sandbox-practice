import { IPerson, IFormPerson } from "../utils/interfaces";

const deletePerson = async (id: string) => {
  const deletedPerson = await fetch(`http://localhost:3002/api/persons/${id}`, {
    method: "DELETE",
  });
  return deletedPerson;
};

const editPerson = async (id: string, body: IPerson) => {
  const editedPerson = await fetch(`http://localhost:3002/api/persons/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return editedPerson;
};

const postData = async (persondata: IFormPerson) => {
  const postedPerson = await fetch("http://localhost:3002/api/persons/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persondata),
  });

  return postedPerson;
};

const getData = async () => {
  const personsData = await fetch("http://localhost:3002/api/persons/")
    .then((personsdata) => personsdata.json())
    .catch((err) => console.log(err.message));

  return personsData;
};

export { editPerson, deletePerson, getData, postData };
