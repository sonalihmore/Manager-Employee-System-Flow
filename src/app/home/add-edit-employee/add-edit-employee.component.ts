import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ManagerService } from 'src/app/service/manager.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit {
  myForm: FormGroup;
  setTitle:any;
  selectedEmployee:any='';
  constructor(public dialogRef: MatDialogRef<AddEditEmployeeComponent>,
    public formBuilder: FormBuilder,private managerService:ManagerService,
    @Inject(MAT_DIALOG_DATA) data: any
    ) {
      this.setTitle=data.dialogMode;
      this.selectedEmployee=data.selectedEmployess;
      if(this.selectedEmployee==null){
        this.selectedEmployee={};
      }

    }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({

      firstName: [this.selectedEmployee.firstName,Validators.required],
      lastName: [this.selectedEmployee.lastName,Validators.required],
      mobile: [this.selectedEmployee.mobile,[Validators.required,Validators.pattern('[0-9]{10}')]],
      city: [this.selectedEmployee.city,Validators.required],
      dateOfBirth: [this.selectedEmployee.dateOfBirth,Validators.required],
      address: [this.selectedEmployee.address,Validators.required],
      id:['']
    });
  }

  doSave(){
    if (this.myForm.invalid) {
      return;
      }
    if(this.setTitle=='Add'){
      this.addEmployee()
    }else{
      this.updateEmployee();
    }
  }
  addEmployee(){

    this.managerService.addEmployees(this.myForm.value);
    this.dialogRef.close(this.myForm.value);

  }
  updateEmployee(){
    this.managerService.updateEmployee(this.myForm.value,this.selectedEmployee.id)
    this.dialogRef.close(this.myForm.value);

  }

}
