import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MaterialModule } from './material.module'
import { FirebaseModule } from './firebase.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FirebaseModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {}
