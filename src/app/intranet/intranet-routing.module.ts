import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyPalnetsWizardComponent} from "./my-palnets-wizard/my-palnets-wizard.component";
import { PlanetDescriptionComponent } from './planet-description/planet-description.component';


const routes: Routes = [

  {path: '', component: MyPalnetsWizardComponent },
  
  {path: 'description', component: PlanetDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
