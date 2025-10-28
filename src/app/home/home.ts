import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private functions: WeatherService){}

  getWeather(){
    this.weatherData = null;
    this.errorMessage = '';

    this.functions.getWeather(this.city).subscribe({
      next: (data: any) => {
        this.weatherData = data;
      },
      error: () => {
        this.errorMessage = 'City Not found or API Error';
      }
    });
  }

}
