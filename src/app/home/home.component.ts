import { Component, OnInit } from '@angular/core';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { MessageBoxService } from '../service/message-box.service';
import { ManagerService } from '../service/manager.service';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../_models/employee';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['firstName','lastName','dateOfBirth','mobile','address','city',
  'Action']
  dataSource:Employee[];
  dialogRef: any;
  isLoading:boolean=false;
  constructor(private managerService:ManagerService,
    public dialog: MatDialog,private messageBox:MessageBoxService) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.isLoading=true;
    this.dataSource=this.managerService.getAllEmployee();
    this.isLoading=false;

  }
  openDialog(openMode:any,selected:any){
    this.dialogRef = this.dialog.open(AddEditEmployeeComponent,
      {height: '500px',
       width: '600px',
       data: {
               dialogMode:openMode,
                selectedEmployess:selected
            },
      }
      );
      this.dialogRef.afterClosed().subscribe((response:any) => {
       if (!response) return;
       if(openMode==="Add"){
        this.dataSource.unshift(response);
        this.dataSource=[...this.dataSource]
      }else if(openMode==="Edit"){
        (response)
         this.loadData()
          // let editObjindex=this.dataSource.findIndex(res=> res.id==response.id)
          // if(editObjindex != -1){
          //   this.dataSource[editObjindex]=response;
          //   this.dataSource=[...this.dataSource];
          // }
       }
      });
  }

deleteEmployee(selected:any){
  this.dialogRef = this.dialog.open(DeleteEmployeeComponent,
    {height: '200px',
     width: '500px',
     data:selected
    }
 );
 this.dialogRef.afterClosed().subscribe((response:any) => {

  if (!response) return;
  let index = this.dataSource.findIndex(f => {
    return f["mobile"] == response;
  });
  if (index > -1) {
    this.dataSource.splice(index, 1);
  }
  this.dataSource = [...this.dataSource];
  });
}

}
