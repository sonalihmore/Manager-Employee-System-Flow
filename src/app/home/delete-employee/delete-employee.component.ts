import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManagerService } from 'src/app/service/manager.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {
  selectedEmployee:any='';
  constructor(public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private managerService:ManagerService) {
      this.selectedEmployee=data;
     }

  ngOnInit(): void {
  }


  confirmDelete(): void {
   this.managerService.deleteEmployee(this.selectedEmployee.mobile);
   this.dialogRef.close(this.selectedEmployee.mobile);

  }
}
