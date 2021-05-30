export class Employee {
  id: any;
  firstName: string;
  lastName: string;
  city: string;
  mobile:any;
  address:string;
  dateOfBirth:any;

}

export const employeeList: Employee[] = [
  {
      id: 1,
      firstName: 'Sonali',
      lastName: 'Paul',
      city: 'Pune',
      mobile:'8737377332',
      address:'Siddhar Nagar Society Pune-41107',
      dateOfBirth:'1994-08-08'
  },
  {
    id: 2,
    firstName: 'Akim',
    lastName: 'Khan',
    city: 'Delhi',
    mobile:'9737377332',
    address:'Shri Govind Singh Advocate NEW DELHI 110 001.',
    dateOfBirth:'1994-08-08'

  },
  {
    id: 3,
    firstName: 'Snehal',
    lastName: 'Das',
    city: 'Mumbai',
    mobile:'9537377332',
    address:'East Mumbai-83838',
    dateOfBirth:'1994-08-08'

  },
  {
      id: 4,
      firstName: 'Sanjay ',
       lastName: 'Kumar',
       city: 'Pune',
       mobile:'8887377332',
       address:'Sihgad Road Pune-24341',
      dateOfBirth:'1994-08-08'

  },


];
