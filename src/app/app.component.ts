import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public name: string;
  public vehicle: string;
  public food: string;
  public productionMode = environment.production;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.http.get('https://random-data-api.com/api/name/random_name').subscribe((data: any) => this.name = data.name);
    this.http.get('https://random-data-api.com/api/vehicle/random_vehicle').subscribe((data: any) => this.vehicle = data.make_and_model);
    this.http.get('https://random-data-api.com/api/food/random_food').subscribe((data: any) => this.food = data.dish);
  }
}
