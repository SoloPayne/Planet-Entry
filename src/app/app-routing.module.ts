import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityLogComponent } from './intranet/activity-log/activity-log.component';
import { MyPlanetDetailsComponent } from './intranet/my-planet-details/my-planet-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false,
      showNavBar: true,
      showFooter: true
    },
  },
  { path: 'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule) },
  {
    path: 'log',
    component: ActivityLogComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false,
      showNavBar: true,
      showFooter: true
    },
  },
  {
    path: 'details',
    component: MyPlanetDetailsComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false,
      showNavBar: true,
      showFooter: true
    },
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
