import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemLink } from './interfaces/generics.Interface';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


  routes: ItemLink[] = [
    {
      text: 'Buscar Empleo',
      url: '/buscar-empleo',
    }
  ];

  title = 'infoJobApp';


  changeThemeColor(){
    console.log('click to change theme color');
    const body = document.getElementsByTagName('body')[0];
    const moon = document.querySelector('.fa-moon');
    // const lettersSpan = document.querySelectorAll('span');
    const lettersH = document.querySelectorAll('span');
    const lettersSpan = document.querySelectorAll('span');


    if (body.classList.contains('bg-dark')){
      body.classList.remove('bg-dark');
      moon!.classList.remove('text-light');
      body.classList.remove('text-light');

    } else {
      body.classList.add('bg-dark');
      body.classList.add('text-light');

      moon!.classList.add('text-light');
    }
    return true
  }
}
