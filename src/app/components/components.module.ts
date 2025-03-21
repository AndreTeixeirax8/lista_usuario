import { NgModule } from '@angular/core';
import { AngulaMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent],
  imports: [AngulaMaterialModule, FormsModule, CommonModule],
  exports: [UserDetailsComponent, FilterComponent],
})
export class ComponentsModule {}
