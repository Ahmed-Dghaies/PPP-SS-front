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
import { CardTypeAddComponent } from './Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component';
import { CardTypeEditComponent } from './Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Components/material/material.module';
import { ClientListComponent } from './Components/parameters/client/client-list/client-list.component';
import { MoreDetailsComponent } from './Components/parameters/client/client-list/more-details/more-details.component';
import { AddClientComponent } from './Components/parameters/client/client-list/add-client/add-client.component';
import { ConfirmDeleteComponent } from './Components/Shared/confirm-delete/confirm-delete.component';
import { UpdateClientComponent } from './Components/parameters/client/client-list/update-client/update-client.component';
import { CardTypeListComponent } from './Components/parameters/Carte Bon/card-type-list/card-type-list.component';
import { AddCiterneComponent } from './Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component';
import { CiterneListComponent } from './Components/parameters/citerne/citerne-list/citerne-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ParametersComponent,
    HomeComponent,
    CardTypeAddComponent,
    CardTypeEditComponent,
    ClientListComponent,
    MoreDetailsComponent,
    AddClientComponent,
    ConfirmDeleteComponent,
    UpdateClientComponent,
    CardTypeListComponent,
    AddCiterneComponent,
    CiterneListComponent
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
  entryComponents: [
    CardTypeAddComponent,
    CardTypeEditComponent,
    MoreDetailsComponent,
    AddClientComponent,
    ConfirmDeleteComponent,
    UpdateClientComponent,
    AddCiterneComponent
  ],
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
