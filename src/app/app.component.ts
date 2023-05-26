import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'infoJobApp';
  private base_url  = 'https://api.infojobs.net/api';
  private headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Authorization': 'Basic MDA0NDc5MDM5YTAzNDZjY2I3MDE0NWRmNWYyYTMwMmI6RFBLSWMzbENrV1NNb012QU9PT1pQSEhzRVpodFFTU0hBVG40V1ErdEpRTm15VUYyYzE=',
      'User-Role': 'ROLE_CANDIDATE',
      'Scope': 'CANDIDATE_PROFILE_WITH_EMAIL'
    });

  constructor(private http: HttpClient) {

    // const headers = new HttpHeaders({
    //   'Content-Type':'application/json; charset=utf-8',
    //   'Authorization': 'Basic MDA0NDc5MDM5YTAzNDZjY2I3MDE0NWRmNWYyYTMwMmI6RFBLSWMzbENrV1NNb012QU9PT1pQSEhzRVpodFFTU0hBVG40V1ErdEpRTm15VUYyYzE=',
    //   'User-Role': 'ROLE_CANDIDATE',
    //   'Scope': 'CANDIDATE_PROFILE_WITH_EMAIL'
    // });

    // let url = 'https://api.infojobs.net/api/6/candidate';
    // this.http.get(url, { headers: headers}).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   }
    // });
  }
  ngOnInit(): void {
    this.http.get(`${this.base_url}/9/offer?q=Desarrollador/a`, {headers: this.headers})
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
