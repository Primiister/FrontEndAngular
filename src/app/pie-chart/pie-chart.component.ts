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
  public pieChartData = [];
  public pieChartLabels = [];
  public pieChartReviewScore = [];
  public pieChartType = 'pie';

  constructor(private _videogameService : VideogameService){}

  ngOnInit() {
    this._videogameService.getVideogames().subscribe(data => this.pieChartData = data);
    this.pieChartLabels.map(data => data.titles);
    this.pieChartReviewScore.map(data => data.reviewScore);

  }
}
