import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestingComponent } from './testing/testing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedGuard } from './_guards/logged.guard';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { ConfirmTestGuard } from './_guards/confirm-test.guard';
import { TestFormioComponent } from './test-formio/test-formio.component';
import { BaseComponent } from './views/theme/base/base.component';
// import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
      path: '', component: DashboardComponent, 
      // canActivate: [AuthGuard],
      children: [
          { 
            path: 'quiz-detail',
            component: QuizDetailComponent 
          },
          { 
            path: 'testing/:id',
            component: TestingComponent,
            // canActivate: [ConfirmTestGuard] 
          },
          { 
            path: '', redirectTo: 'quiz-detail', pathMatch: 'full', 
            // canActivate: [AuthGuard] 
          },
          // { path: 'result/:id', component: ResultComponent }
      ]
  },
  { 
    path: 'login', component: LoginComponent, 
    // canActivate: [LoggedGuard] 
  },
  { path: 'register', component: RegisterComponent },
  // { path: '**', redirectTo: '' },
  { path: 'about', component: LandingPageComponent },
  { path: 'test-formio', component: TestFormioComponent },
];

const childRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'mail',
    loadChildren: () => import('./views/pages/apps/mail/mail.module').then(m => m.MailModule),
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('./views/pages/apps/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
  },
  {
    path: 'ngbootstrap',
    loadChildren: () => import('./views/pages/ngbootstrap/ngbootstrap.module').then(m => m.NgbootstrapModule),
  },
  {
    path: 'material',
    loadChildren: () => import('./views/pages/material/material.module').then(m => m.MaterialModule),
  },
  {
    path: 'user-management',
    loadChildren: () => import('./views/pages/user-management/user-management.module').then(m => m.UserManagementModule),
  },
  {
    path: 'wizard',
    loadChildren: () => import('./views/pages/wizard/wizard.module').then(m => m.WizardModule),
  },
  {
    path: 'builder',
    loadChildren: () => import('./views/theme/content/builder/builder.module').then(m => m.BuilderModule),
  },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
];

const routes2: Routes = [
  {path: 'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)},
  {path: 'error', loadChildren: () => import('./views/pages/error/error.module').then(m => m.ErrorModule)},
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    // children: childRoutes,
  },
  {path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes2)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
