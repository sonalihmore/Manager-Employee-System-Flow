import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MessageBoxService } from 'src/app/service/message-box.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private messageBox:MessageBoxService
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  //TODO login button event call
  onSubmit() {
      if (this.form.invalid) {
          return;
      }
      let formValue=this.form.getRawValue()
      this.authService.login(formValue.username, formValue.password)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.router.navigateByUrl('/home');
                  this.messageBox.showMessage("Login successfully!")
              },
              error: error => {
                // this.messageBox.showMessage(error);
                this.messageBox.showError('Email or password is incorrect');
              }
          });
  }

}
