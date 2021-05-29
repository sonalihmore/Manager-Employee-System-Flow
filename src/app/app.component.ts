import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { User } from './_models/user';

@Component({ selector: 'app',
templateUrl: 'app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
    user: User;

    constructor(private authService: AuthService) {
        this.authService.user.subscribe(x => this.user = x);
    }

    onLogout() {
        this.authService.logout();
    }
}
