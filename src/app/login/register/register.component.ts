import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MessageBoxService } from 'src/app/service/message-box.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
    constructor(
        private formBuilder: FormBuilder,private route: ActivatedRoute,
        private router: Router,private authService: AuthService,
        private messageBox:MessageBoxService) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            company:['',Validators.required],
            dateOfBirth:['',Validators.required],
            address:['',Validators.required]
        });
    }
      //TODO Register User
    onSubmit() {
        if (this.form.invalid) {
            return;
        }
        this.authService.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigate(['../login'], { relativeTo: this.route });
                    this.messageBox.showMessage("Registration done successfully")
                },
                error: error => {
                }
      });
    }

}
