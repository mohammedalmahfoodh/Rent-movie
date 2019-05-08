import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatListModule,MatInputModule,MatDialogModule,
    MatIconModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule
  ],
  exports: [
    MatListModule,MatInputModule,MatDialogModule,
    MatIconModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule
  ]
})
export class RentMovieAngularMaterialModule { }
