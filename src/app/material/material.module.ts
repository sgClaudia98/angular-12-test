import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'


@NgModule({
  declarations: [],
  imports: [
    MatCommonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
  ],
  exports: [
    MatCommonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
