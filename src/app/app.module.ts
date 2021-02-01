import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

import { AuthGuard } from './_guards/auth.guard';
import { LoggedGuard } from './_guards/logged.guard';
import { ConfirmTestGuard } from './_guards/confirm-test.guard';
import { AuthenticationService, UserService, AlertService } from './_services';

import { QuestionService } from './_services/question.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { fakeBackendProvider , ErrorInterceptor, JwtInterceptor } from './_helpers/index';

import { AlertComponent } from './_directives/index';
import { UserDetailComponent } from './dashboard/user-detail/user-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestDisplayComponent } from './dashboard/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './dashboard/test/detail/detail.component';
import { DoQuizComponent } from './dashboard/test/do-quiz/do-quiz.component';
import { ClassComponent } from './dashboard/class/class.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { TestingComponent } from './testing/testing.component';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { TestFormioComponent } from './test-formio/test-formio.component';
import { FormioAppConfig, FormioModule } from '@formio/angular';
import { FormioConfig } from './formio-config';
// import { MaterialModule } from './material-module';



@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    AlertComponent,
    UserDetailComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    TestDisplayComponent,
    DetailComponent,
    DoQuizComponent,
    ClassComponent,
    DashboardComponent,
    QuizDetailComponent,
    WelcomeComponent,
    TestingComponent,
    DefaultComponent,
    TestFormioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    AuthGuard,
    LoggedGuard,
    ConfirmTestGuard,
    AuthenticationService,
    UserService,
    AlertService,
    {provide: FormioAppConfig, useValue: FormioConfig},
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
