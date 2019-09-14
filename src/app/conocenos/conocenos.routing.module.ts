import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConocenosComponent } from './conocenos.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
    {
        path: '',
        component:ConocenosComponent
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ConocenosRoutingModule { }