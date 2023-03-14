import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { MyPlanetsSearchComponent } from './my-planets-search/my-planets-search.component';
import { SearchComponent } from './search/search.component';
import { MyPalnetsWizardComponent } from './my-palnets-wizard/my-palnets-wizard.component';
import { ArchwizardModule } from 'angular-archwizard';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { MyPlanetDetailsComponent } from './my-planet-details/my-planet-details.component'


@NgModule({
  declarations: [
    MyPlanetsSearchComponent,
    SearchComponent,
    MyPalnetsWizardComponent,
    ActivityLogComponent,
    MyPlanetDetailsComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    ArchwizardModule
  ]
})
export class IntranetModule { }
