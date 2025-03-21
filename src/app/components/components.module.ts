import { NgModule } from '@angular/core';
import { AngulaMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [AngulaMaterialModule],
  exports: [UserDetailsComponent],
})
export class ComponentsModule {}
