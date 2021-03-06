import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ VideogameService } from './videogame.service';
import { ChartsModule } from "ng2-charts";
import{ IVideogame } from './videogame';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';

  constructor(private _videogameService : VideogameService){}

  ngOnInit() {

    this._videogameService.getVideogames().subscribe(res => {
      for (var _i = 0; _i < 20; _i++) {
        this.pieChartLabels[_i] = res[_i].title;
        this.pieChartData[_i] = res[_i].reviewScore;
      }
    });
  }
}
