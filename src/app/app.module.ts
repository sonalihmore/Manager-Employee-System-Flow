
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider, AuthGuard } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './shared/angular-material.module';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';;
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        AppMaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent ],
    providers: [
      AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
