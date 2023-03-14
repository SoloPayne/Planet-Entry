import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPlanetsSearchComponent } from './my-planets-search/my-planets-search.component';
import {MyPlanetDetailsComponent} from "./my-planet-details/my-planet-details.component";


const routes: Routes = [{path: '', component: MyPlanetsSearchComponent  },
  // {path: 'details', component: MyPlanetDetailsComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
