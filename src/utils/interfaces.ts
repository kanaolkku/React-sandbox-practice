interface IPerson {
  firstName: string;
  lastName: string;
  age: Number;
  _id: string;
}

interface IFormPerson {
  firstName: string;
  lastName: string;
  age: Number;
  _id?: string;
}

export type { IPerson, IFormPerson };
