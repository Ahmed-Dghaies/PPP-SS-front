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
import { MoreCiterneDetailsComponent } from '@ComCiterne/more-citerne-details/more-citerne-details.component';
import { ReleveIndexListComponent } from '@ComRecette/releveIndex-list/releveIndex-list.component';
import { ReleveIndexAddComponent } from '@ComRecette/releveIndex-list/releveIndex-add/releveIndex-add.component';
import { ReleveIndexEditComponent } from '@ComRecette/releveIndex-list/releveIndex-edit/releveIndex-edit.component';
import { IndexListComponent } from '@ComIndex/index-list.component';
import { IndexAddComponent } from '@ComIndex/index-add/index-add.component';
import { IndexEditComponent } from '@ComIndex/index-edit/index-edit.component';
import { DistributeurListComponent } from '@ComDistributeur/distributeur-list.component';
import { DistributeurAddComponent } from '@ComDistributeur/distributeur-add/distributeur-add.component';
import { DistributeurEditComponent } from '@ComDistributeur/distributeur-edit/distributeur-edit.component';
import { PrixCarburantListComponent } from '@ComCarburant/prix-carburant-list.component';
import { PrixCarburantAddComponent } from '@ComCarburant/prix-carburant-add/prix-carburant-add.component';
import { PrixCarburantEditComponent } from '@ComCarburant/prix-carburant-edit/prix-carburant-edit.component';
import { PompisteListComponent } from './Components/parameters/pompiste/pompiste-list/pompiste-list.component';
import { AddPompisteComponent } from './Components/parameters/pompiste/pompiste-list/add-pompiste/add-pompiste.component';
import { UpdatePompisteComponent } from './Components/parameters/pompiste/pompiste-list/update-pompiste/update-pompiste.component';
import { SessionPompisteListComponent } from './Components/check-current-session/session-pompiste-list/session-pompiste-list.component';
import { CheckCurrentSessionComponent } from './Components/check-current-session/check-current-session.component';
import { CalendarComponent } from './Components/home/calendar/calendar.component';
import { ListEventsComponent } from './Components/home/calendar/list-events/list-events.component';
import { UpdateEventComponent } from './Components/home/calendar/list-events/update-event/update-event.component';
import { CarburantComponent } from './Components/parameters/carburant/carburant.component';
import { AddCarburantComponent } from './Components/parameters/carburant/add-carburant/add-carburant.component';
import { UpdateCarburantComponent } from './Components/parameters/carburant/update-carburant/update-carburant.component';
import { MatExpansionModule } from '@angular/material';
import { ConfirmSessionCloserComponent } from './Components/check-current-session/confirm-session-closer/confirm-session-closer.component';
import { ModifySessionComponent } from './Components/check-current-session/modify-session/modify-session.component';
import { OpenSessionComponent } from './Components/check-current-session/open-session/open-session.component';
import { ShowDetailsComponent } from '@ComShowDet/show-details.component';
import { CardBonListComponent } from '@ComCarteBon/card-bon-list.component';
import { CardBonEditComponent } from '@ComCarteBon/card-bon-edit/card-bon-edit.component';
import { CardBonMoreDetailsComponent } from '@ComCarteBon/card-bon-more-details/card-bon-more-details.component';
import { BonValeurListComponent } from '@ComBonValeur/bon-valeur-list.component';
import { BonValeurEditComponent } from '@ComBonValeur/bon-valeur-edit/bon-valeur-edit.component';
import { ChequeListComponent } from './Components/inventaire/Cheque/cheque-list/cheque-list.component';
import { ChequeEditComponent } from './Components/inventaire/Cheque/cheque-list/cheque-edit/cheque-edit.component';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { InventaireComponent } from './Components/inventaire/inventaire.component';
import { RecetteCarteBonComponent } from '@ComShowDet/recette-carte-bon/recette-carte-bon.component';
import { RecetteBonValeurComponent } from '@ComShowDet/recette-bon-valeur/recette-bon-valeur.component';
import { RecetteChequeComponent } from '@ComShowDet/recette-cheque/recette-cheque.component';
import { RecetteChequeAddComponent } from '@ComShowDet/recette-cheque/recette-cheque-add/recette-cheque-add.component';
import { RecetteChequeEditComponent } from '@ComShowDet/recette-cheque/recette-cheque-edit/recette-cheque-edit.component';
import { RecetteCarteBonAddComponent } from '@ComShowDet/recette-carte-bon/recette-carte-bon-add/recette-carte-bon-add.component';
import { RecetteCarteBonEditComponent } from '@ComShowDet/recette-carte-bon/recette-carte-bon-edit/recette-carte-bon-edit.component';
import { RecetteCarteBonMoreDetailsComponent } from '@ComRecetteCarteBMD/recette-carte-bon-more-details.component';
import { RecetteBonValeurAddComponent } from '@ComShowDet/recette-bon-valeur/recette-bon-valeur-add/recette-bon-valeur-add.component';
import { RecetteBonValeurEditComponent } from '@ComShowDet/recette-bon-valeur/recette-bon-valeur-edit/recette-bon-valeur-edit.component';
import { RecetteChequeMoreDetailsComponent } from '@ComRecetteChequeMD/recette-cheque-more-details.component';
import { RecetteCreditsComponent } from '@ComShowDet/recette-credits/recette-credits.component';
import { RecetteCreditsAddComponent } from '@ComShowDet/recette-credits/recette-credits-add/recette-credits-add.component';
import { RecetteCreditsEditComponent } from '@ComShowDet/recette-credits/recette-credits-edit/recette-credits-edit.component';
import { CreditListComponent } from './Components/inventaire/Credit/credit-list/credit-list.component';
import { CreditAddComponent } from './Components/inventaire/Credit/credit-list/credit-add/credit-add.component';
import { CreditEditComponent } from './Components/inventaire/Credit/credit-list/credit-edit/credit-edit.component';
import { RecetteStegEtAutresComponent } from '@ComRecetteSEA/recette-steg-et-autres.component';
import { RecetteStegEtAutresAddComponent } from '@ComRecetteSEA/recette-steg-et-autres-add/recette-steg-et-autres-add.component';
import { RecetteStegEtAutresEditComponent } from '@ComRecetteSEA/recette-steg-et-autres-edit/recette-steg-et-autres-edit.component';
import { StegEtAutresListComponent } from '@ComSEA/steg-et-autres-list.component';
import { StegEtAutresEditComponent } from '@ComSEA/steg-et-autres-edit/steg-et-autres-edit.component';
import { StegEtAutresMoreDetailsComponent } from '@ComSEA/steg-et-autres-more-details/steg-et-autres-more-details.component';
import { RecetteStegEtAutresMoreDetailsComponent } from '@ComSEAMD';
import { BankListComponent } from './Components/parameters/bank/bank-list/bank-list.component';
import { BankAddComponent } from './Components/parameters/bank/bank-list/bank-add/bank-add.component';
import { BankEditComponent } from './Components/parameters/bank/bank-list/bank-edit/bank-edit.component';
import { BankMoreDetailsComponent } from './Components/parameters/bank/bank-list/bank-more-details/bank-more-details.component';

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
    PrixCarburantAddComponent,
    PrixCarburantEditComponent,
    PompisteListComponent,
    AddPompisteComponent,
    UpdatePompisteComponent,
    SessionPompisteListComponent,
    CheckCurrentSessionComponent,
    CalendarComponent,
    ListEventsComponent,
    UpdateEventComponent,
    MoreCiterneDetailsComponent,
    CarburantComponent,
    AddCarburantComponent,
    UpdateCarburantComponent,
    ConfirmSessionCloserComponent,
    ModifySessionComponent,
    OpenSessionComponent,
    ShowDetailsComponent,
    CardBonListComponent,
    CardBonEditComponent,
    CardBonMoreDetailsComponent,
    BonValeurListComponent,
    BonValeurEditComponent,
    ChequeListComponent,
    ChequeEditComponent,
    InventaireComponent,
    RecetteCarteBonComponent,
    RecetteBonValeurComponent,
    RecetteChequeComponent,
    RecetteChequeAddComponent,
    RecetteChequeEditComponent,
    RecetteCarteBonAddComponent,
    RecetteCarteBonEditComponent,
    RecetteCarteBonMoreDetailsComponent,
    RecetteBonValeurAddComponent,
    RecetteBonValeurEditComponent,
    RecetteChequeMoreDetailsComponent,
    RecetteCreditsComponent,
    RecetteCreditsAddComponent,
    RecetteCreditsEditComponent,
    CreditListComponent,
    CreditAddComponent,
    CreditEditComponent,
    RecetteStegEtAutresComponent,
    RecetteStegEtAutresAddComponent,
    RecetteStegEtAutresEditComponent,
    RecetteStegEtAutresMoreDetailsComponent,
    StegEtAutresListComponent,
    StegEtAutresEditComponent,
    StegEtAutresMoreDetailsComponent,
    BankListComponent,
    BankAddComponent,
    BankEditComponent,
    BankMoreDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatExpansionModule,
    NgProgressModule
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
    PrixCarburantAddComponent,
    PrixCarburantEditComponent,
    AddPompisteComponent,
    UpdatePompisteComponent,
    SessionPompisteListComponent,
    UpdateEventComponent,
    MoreCiterneDetailsComponent,
    AddCarburantComponent,
    UpdateCarburantComponent,
    ConfirmSessionCloserComponent,
    ModifySessionComponent,
    OpenSessionComponent,
    ShowDetailsComponent,
    CardBonEditComponent,
    CardBonMoreDetailsComponent,
    BonValeurEditComponent,
    ChequeEditComponent,
    RecetteChequeAddComponent,
    RecetteChequeEditComponent,
    RecetteCarteBonAddComponent,
    RecetteCarteBonEditComponent,
    RecetteCarteBonMoreDetailsComponent,
    RecetteBonValeurAddComponent,
    RecetteBonValeurEditComponent,
    CreditAddComponent,
    CreditEditComponent,
    RecetteCreditsAddComponent,
    RecetteCreditsEditComponent,
    StegEtAutresEditComponent,
    StegEtAutresMoreDetailsComponent,
    RecetteStegEtAutresAddComponent,
    RecetteStegEtAutresEditComponent,
    RecetteStegEtAutresMoreDetailsComponent,
    BankAddComponent,
    BankEditComponent,
    BankMoreDetailsComponent,
  ],
  providers: [AuthService, AuthGuard, IndexListComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }, CarteBonTypeService,
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
