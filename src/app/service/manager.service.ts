import { Injectable } from '@angular/core';
import { Employee } from '../_models/employee';
import { MessageBoxService } from './message-box.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  employees: Employee[] = [
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
  constructor(private messageBox:MessageBoxService ) {
    localStorage.setItem('Employees', JSON.stringify(this.employees));
   }

getAllEmployee() {
  let employees = JSON.parse(localStorage.getItem('Employees'));
  return employees;
}
addEmployees(employee: Employee) {
  let employees = JSON.parse(localStorage.getItem('Employees'));
  const itemIndex = employees.length;
    employee.id =  employees.length+1;
    employees[itemIndex] = employee;
  localStorage.setItem('Employees', JSON.stringify(employees));
    this.messageBox.showMessage("Employee added successfully");
}
updateEmployee(oldEmp:any, employee: Employee){
  let emps = JSON.parse(localStorage.getItem('Employees'));
    for(let i = 0; i <emps.length; i++) {
     if(emps[i].id == oldEmp.id) {
       emps[i] = employee;
     }
  }
     localStorage.setItem('Employees', JSON.stringify(emps));
     this.messageBox.showMessage(
          "Employee updated successfully");
  }

deleteEmployee(mobile?:any) {
  let employees = JSON.parse(localStorage.getItem('Employees'));
  for(let i = 0; i <employees.length; i++) {
   if(employees[i].mobile == mobile) {
    employees.splice(i, 1);
   }
   }
   localStorage.setItem('Employees', JSON.stringify(employees));
   this.messageBox.showMessage(
    "Employee deleted successfully"
  );
}
}
