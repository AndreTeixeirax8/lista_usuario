import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatListModule, MatDividerModule],
  exports: [MatButtonModule, MatListModule, MatDividerModule],
})
export class AngulaMaterialModule {}
