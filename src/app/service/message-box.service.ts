import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {

  constructor(public snakBar: MatSnackBar) { }

  showMessage(message:string){
    this.snakBar.open(message,"OK",{ duration: 5000,});
  }
  showError(errorMessage:string){
    this.snakBar.open(errorMessage,"OK",{ duration: 5000,});
  }

}
