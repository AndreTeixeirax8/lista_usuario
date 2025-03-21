import { NgModule } from '@angular/core';
import { AngulaMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent],
  imports: [AngulaMaterialModule],
  exports: [UserDetailsComponent],
})
export class ComponentsModule {}
