import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContreBonCaisseListComponent } from '@ContreBonCaisseList/contre-bon-caisse-list.component';
import { ContreBonCaisseEditComponent } from '@ContreBonCaisseList/contre-bon-caisse-edit/contre-bon-caisse-edit.component';
import { RecetteContreBonCaisseComponent } from '@ComContreBonCaisse/recette-contre-bon-caisse.component';
import { RecetteContreBonCaisseAddComponent } from '@ComContreBonCaisseAdd/recette-contre-bon-caisse-add.component';
import { RecetteContreBonCaisseEditComponent } from '@ComContreBonCaisseEdit/recette-contre-bon-caisse-edit.component';
import { RecetteContreBonClientComponent } from '@ComContreBonClient/recette-contre-bon-client.component';
import { RecetteContreBonClientAddComponent } from '@ComContreBonClientAdd/recette-contre-bon-client-add.component';
import { RecetteContreBonClientEditComponent } from '@ComContreBonClientEdit/recette-contre-bon-client-edit.component';
import { MaterialModule } from 'app/material/material.module';
import { MatExpansionModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  declarations: [
    ContreBonCaisseListComponent,
    ContreBonCaisseEditComponent,
    RecetteContreBonCaisseComponent,
    RecetteContreBonCaisseAddComponent,
    RecetteContreBonCaisseEditComponent,
    RecetteContreBonClientComponent,
    RecetteContreBonClientAddComponent,
    RecetteContreBonClientEditComponent
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
    NgProgressModule,
    MatExpansionModule,
  ],
  entryComponents: [
    RecetteContreBonClientAddComponent,
    RecetteContreBonClientEditComponent,
    RecetteContreBonCaisseAddComponent,
    RecetteContreBonCaisseEditComponent,
    ContreBonCaisseEditComponent,
  ],
  exports: [
    ContreBonCaisseListComponent,
    ContreBonCaisseEditComponent,
    RecetteContreBonCaisseComponent,
    RecetteContreBonCaisseAddComponent,
    RecetteContreBonCaisseEditComponent,
    RecetteContreBonClientComponent,
    RecetteContreBonClientAddComponent,
    RecetteContreBonClientEditComponent
  ]
})
export class RecetteModule { }
