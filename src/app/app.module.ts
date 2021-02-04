import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

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

// Angular HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { APP_INITIALIZER } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';
// Angular in memory
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Perfect Scroll bar
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
// Env
import { environment } from '../environments/environment';
// Hammer JS
import 'hammerjs';
// NGX Permissions
import { NgxPermissionsModule } from 'ngx-permissions';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// State
import { metaReducers, reducers } from './core/reducers';
// Components
// Modules
import { CoreModule } from './core/core.module';
import { ThemeModule } from './views/theme/theme.module';
// Partials
import { PartialsModule } from './views/partials/partials.module';
// Layout Services
import {
  DataTableService,
  FakeApiService,
  KtDialogService,
  LayoutConfigService,
  LayoutRefService,
  MenuAsideService,
  MenuConfigService,
  MenuHorizontalService,
  PageConfigService,
  SplashScreenService,
  SubheaderService
} from './core/_base/layout';

// Auth
import { AuthService } from './core/auth';
// CRUD
import {
  HttpUtilsService,
  LayoutUtilsService,
  TypesUtilsService
} from './core/_base/crud';
// Config
import { LayoutConfig } from './core/_config/layout.config';
// Highlight JS
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
// import xml from 'highlight.js/lib/languages/xml';
// import json from 'highlight.js/lib/languages/json';
// import scss from 'highlight.js/lib/languages/scss';
// import typescript from 'highlight.js/lib/languages/typescript';
// tslint:disable-next-line:class-name
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelSpeed: 0.5,
  swipeEasing: true,
  minScrollbarLength: 40,
  maxScrollbarLength: 300
};

export function initializeLayoutConfig(appConfig: LayoutConfigService) {
  // initialize app by loading default demo layout config
  return () => {
    if (appConfig.getConfig() === null) {
      appConfig.loadConfigs(new LayoutConfig().configs);
    }
  };
}

/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
// export function getHighlightLanguages() {
//   return [
//     {name: 'typescript', func: typescript},
//     {name: 'scss', func: scss},
//     {name: 'xml', func: xml},
//     {name: 'json', func: json}
//   ];
// }


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
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeApiService, {
        passThruUnknownUrl: true,
        dataEncapsulation: false
      })
      : [],
    NgxPermissionsModule.forRoot(),
    // HighlightModule,
    PartialsModule,
    CoreModule,
    OverlayModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    StoreDevtoolsModule.instrument(),
    // AuthModule.forRoot(),
    TranslateModule.forRoot(),
    MatProgressSpinnerModule,
    InlineSVGModule.forRoot(),
    ThemeModule
  ],
  providers: [
    AuthGuard,
    LoggedGuard,
    ConfirmTestGuard,
    AuthenticationService,
    UserService,
    AlertService,
    {provide: FormioAppConfig, useValue: FormioConfig},
    AuthService,
    LayoutConfigService,
    LayoutRefService,
    MenuConfigService,
    PageConfigService,
    KtDialogService,
    DataTableService,
    SplashScreenService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      // layout config initializer
      provide: APP_INITIALIZER,
      useFactory: initializeLayoutConfig,
      deps: [LayoutConfigService],
      multi: true
    },
    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: {
    //     languages: getHighlightLanguages
    //   }
    // },
    // template services
    SubheaderService,
    MenuHorizontalService,
    MenuAsideService,
    HttpUtilsService,
    TypesUtilsService,
    LayoutUtilsService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
