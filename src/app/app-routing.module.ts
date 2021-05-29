import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component'

const routes: Routes = [
    {
      path: "",
      redirectTo:"login",
      pathMatch: 'full'
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
     { path: 'home',
     canActivate:[AuthGuard],
     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
