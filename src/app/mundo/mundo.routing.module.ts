import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MundoComponent } from './mundo.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
    {path:'', component:MundoComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
  exports: [
    CommonModule
  ]
})
export class MundoRoutingModule { }
