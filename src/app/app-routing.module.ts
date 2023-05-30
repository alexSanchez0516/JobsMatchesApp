import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchJobsComponent } from './pages/search-jobs/search-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: SearchJobsComponent
  },
  {
    path: '**',
    redirectTo: 'buscar-empleo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
