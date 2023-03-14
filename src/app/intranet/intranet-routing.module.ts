import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyPalnetsWizardComponent} from "./my-palnets-wizard/my-palnets-wizard.component";


const routes: Routes = [

  {path: '', component: MyPalnetsWizardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
