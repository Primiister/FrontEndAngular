import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DataTableComponent } from './data-table/data-table.component';
import { AppRoutingModule } from './app.routing';
import { PieChartComponent } from './pie-chart'
import { TableComponent } from './table'
import { AddGameComponent } from './add-game'
import { DeleteGameComponent } from './delete-game'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart';
import{ VideogameService } from './bar-chart/videogame.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DataTableComponent,
    TableComponent,
    PieChartComponent,
    AddGameComponent,
    DeleteGameComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [VideogameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
