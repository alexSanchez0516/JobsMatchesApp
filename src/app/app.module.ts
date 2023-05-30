import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchJobsComponent } from './pages/search-jobs/search-jobs.component';
import { SearchCompanyComponent } from './pages/search-company/search-company.component';
import { SearchSalarysComponent } from './pages/search-salarys/search-salarys.component';

import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localEs,'es');
@NgModule({
  declarations: [
    AppComponent,
    SearchJobsComponent,
    SearchCompanyComponent,
    SearchSalarysComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
