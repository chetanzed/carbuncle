import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PublicPagesRoutingModule } from './public-pages-routing.module'
import { CoreModule } from '../core/core.module';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [IndexComponent, LoginComponent],
  imports: [CommonModule, CoreModule, PublicPagesRoutingModule]
})
export class PublicPagesModule {}
