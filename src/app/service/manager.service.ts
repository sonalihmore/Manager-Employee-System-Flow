import { Injectable } from '@angular/core';
import { Employee } from '../_models/employee';
import { MessageBoxService } from './message-box.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  employees: Employee[] = [];
  constructor(private messageBox:MessageBoxService ) {
    this.employees=JSON.parse(localStorage.getItem("Employees") || "[]");
   }

getAllEmployee() {
  let employees = JSON.parse(localStorage.getItem("Employees") || "[]");
  return employees;
}

addEmployee(employee: Employee) {
  let emps = JSON.parse(localStorage.getItem("Employees") || "[]");
    const itemIndex = emps.length;
    employee.id = emps.length+1;
    emps[itemIndex] = employee;
    console.log(emps)
  localStorage.setItem('Employees', JSON.stringify(emps));
  this.messageBox.showMessage("Employee added successfully");

}

updateEmployee(oldEmp:any, employee: Employee){
  let emps = JSON.parse(localStorage.getItem("Employees") || "[]");
    for(let i = 0; i <emps.length; i++) {
     if(emps[i].id == oldEmp.id) {
       emps[i] = employee;
     }
  }
     localStorage.setItem('Employees', JSON.stringify(emps));
     this.messageBox.showMessage("Employee updated successfully");
  }

deleteEmployee(mobile?:any) {
  let employees = JSON.parse(localStorage.getItem("Employees") || "[]");
  for(let i = 0; i <employees.length; i++) {
   if(employees[i].mobile == mobile) {
    employees.splice(i, 1);
   }
   }
   localStorage.setItem('Employees', JSON.stringify(employees));
   this.messageBox.showMessage("Employee deleted successfully"
  );
}
}
