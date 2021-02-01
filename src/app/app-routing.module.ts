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
  { path: 'about', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
