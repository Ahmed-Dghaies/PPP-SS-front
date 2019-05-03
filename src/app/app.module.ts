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
import { CardTypeAddComponent } from '@ComCardType/card-type-add/card-type-add.component';
import { CardTypeEditComponent } from '@ComCardType/card-type-edit/card-type-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ClientListComponent } from '@ComClient/client-list.component';
import { MoreDetailsComponent } from '@ComClient/more-details/more-details.component';
import { AddClientComponent } from '@ComClient/add-client/add-client.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { UpdateClientComponent } from '@ComClient/update-client/update-client.component';
import { CardTypeListComponent } from '@ComCardType/card-type-list.component';
import { AddCiterneComponent } from '@ComCiterne/add-citerne/add-citerne.component';
import { CiterneListComponent } from '@ComCiterne/citerne-list.component';
import { UpdateCiterneComponent } from '@ComCiterne/update-citerne/update-citerne.component';
import { ReleveIndexListComponent } from '@ComReleveIndex/releveIndex-list.component';
import { ReleveIndexAddComponent } from '@ComReleveIndex/releveIndex-add/releveIndex-add.component';
import { ReleveIndexEditComponent } from '@ComReleveIndex/releveIndex-edit/releveIndex-edit.component';
import { IndexListComponent } from '@ComIndex/index-list.component';
import { IndexAddComponent } from '@ComIndex/index-add/index-add.component';
import { IndexEditComponent } from '@ComIndex/index-edit/index-edit.component';
import { DistributeurListComponent } from '@ComDistributeur/distributeur-list.component';
import { DistributeurAddComponent } from '@ComDistributeur/distributeur-add/distributeur-add.component';
import { DistributeurEditComponent } from '@ComDistributeur/distributeur-edit/distributeur-edit.component';
import { PrixCarburantListComponent } from '@ComCarburant/prix-carburant-list.component';
import { PrixCarburantAddComponent } from '@ComCarburant/prix-carburant-add/prix-carburant-add.component';


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
    CiterneListComponent,
    UpdateCiterneComponent,
    ReleveIndexListComponent,
    ReleveIndexAddComponent,
    ReleveIndexEditComponent,
    IndexListComponent,
    IndexAddComponent,
    IndexEditComponent,
    DistributeurListComponent,
    DistributeurAddComponent,
    DistributeurEditComponent,
    PrixCarburantListComponent,
    PrixCarburantAddComponent
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
    AddCiterneComponent,
    UpdateCiterneComponent,
    ReleveIndexAddComponent,
    ReleveIndexEditComponent,
    IndexAddComponent,
    IndexEditComponent,
    DistributeurAddComponent,
    DistributeurEditComponent,
    PrixCarburantAddComponent
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
