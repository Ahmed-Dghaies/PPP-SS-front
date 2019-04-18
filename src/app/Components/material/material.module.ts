import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatButtonModule,
    Material.MatCheckboxModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDialogModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatSnackBarModule
  ],
  exports:[
    Material.MatButtonModule,
    Material.MatCheckboxModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDialogModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatSnackBarModule
  ]
})
export class MaterialModule { }
