import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserPagesRoutingModule } from './user-pages-routing.module'
import { CoreModule } from '../core/core.module';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [ProfileComponent, DashboardComponent],
  imports: [CommonModule, CoreModule, UserPagesRoutingModule]
})
export class UserPagesModule {}
