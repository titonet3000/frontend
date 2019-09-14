import { MundoRoutingModule } from './mundo.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MundoComponent } from './mundo.component';



@NgModule({
  declarations: [MundoComponent],
  imports: [
    CommonModule,
    MundoRoutingModule,
    FormsModule,
   ReactiveFormsModule
  ]
})
export class MundoModule { }
