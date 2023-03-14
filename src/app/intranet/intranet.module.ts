import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IntranetRoutingModule} from './intranet-routing.module';
import {MyPlanetsSearchComponent} from './my-planets-search/my-planets-search.component';
import {SearchComponent} from './search/search.component';
import {MyPalnetsWizardComponent} from './my-palnets-wizard/my-palnets-wizard.component';
import {ArchwizardModule} from 'angular-archwizard';
import {ActivityLogComponent} from './activity-log/activity-log.component';
import {MyPlanetDetailsComponent} from './my-planet-details/my-planet-details.component';
import { UploadPlanetImageryComponent } from './upload-planet-imagery/upload-planet-imagery.component';
import { PlanetEntryPreviewComponent } from './planet-entry-preview/planet-entry-preview.component'


@NgModule({
  declarations: [
    MyPlanetsSearchComponent,
    SearchComponent,
    MyPalnetsWizardComponent,
    ActivityLogComponent,
    MyPlanetDetailsComponent,
    UploadPlanetImageryComponent,
    PlanetEntryPreviewComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    ArchwizardModule
  ]
})
export class IntranetModule {
}
