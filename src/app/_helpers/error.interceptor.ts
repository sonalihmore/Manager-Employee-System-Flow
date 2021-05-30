import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { MessageBoxService } from '../service/message-box.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService,private messageBox:MessageBoxService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status) && this.authService.userValue) {
                this.authService.logout();
            }
            const error = err.error?.message || err.statusText;
            console.error(err);
            this.messageBox.showError(error);
            return throwError(error.message);
        }))
    }
}
