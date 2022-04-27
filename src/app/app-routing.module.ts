import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourZeroFourComponent } from './pages/four-zero-four/four-zero-four.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: '**',
    component: FourZeroFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
