import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchJobsComponent } from './pages/search-jobs/search-jobs.component';
import { SearchCompanyComponent } from './pages/search-company/search-company.component';
import { SearchSalarysComponent } from './pages/search-salarys/search-salarys.component';

const routes: Routes = [
  {
    path: 'buscar-empleo',
    component: SearchJobsComponent
  },
  {
    path: 'buscar-empresas',
    component: SearchCompanyComponent
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
