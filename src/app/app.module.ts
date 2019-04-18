import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Authentification/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './Components/Authentification/register/register.component';
import { ParametersComponent } from './Components/parameters/parameters.component';
import { HomeComponent } from './Components/home/home.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/Guards/auth.guard';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CarteBonTypeService } from './shared/services/carte-bon-type.service';
import { CardTypeAddComponent } from './Components/Parameters/Card-Type/card-type-add/card-type-add.component';
import { CardTypeGetComponent } from './Components/Parameters/Card-Type/card-type-get/card-type-get.component';
import { CardTypeEditComponent } from './Components/Parameters/Card-Type/card-type-edit/card-type-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Components/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ParametersComponent,
    HomeComponent,
    CardTypeAddComponent,
    CardTypeGetComponent,
    CardTypeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [CardTypeAddComponent, CardTypeEditComponent],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }, CarteBonTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
