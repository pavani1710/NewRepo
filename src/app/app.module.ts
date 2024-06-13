// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { BusSearchComponent } from './bus-search/bus-search.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     BusSearchComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     provideClientHydration()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { AuthService } from './auth.service';
import { BusService } from './bus.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bus-search', component: BusSearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, BusService,  provideHttpClient(
    withFetch(), // Enable fetch API
    withInterceptorsFromDi() // Enable interceptors from DI
  )],
  bootstrap: [AppComponent]
})
export class AppModule { }
