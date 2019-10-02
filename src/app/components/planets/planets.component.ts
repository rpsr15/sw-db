import { Component, OnInit } from '@angular/core';
import {SWapiService} from '../../Services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  // ng-pagination properties
  private  page = 1; // load first page by default
  private pageSize;
  private  totalPlanets;

  private planets = [];


  constructor(private  apiService: SWapiService) {
    // load properties of pagination
    this.setPagination();

  }


  setPagination() {

    // get total pages and page size
    this.apiService.getPlanets().then((result: any) => {
      console.log(result);
      // get total count
      if (result.count) {
        this.totalPlanets = result.count;
      }
      // num of pages set to 1 if no more pages else calculate
      this.pageSize = result.results.length;

    });
  }


  // load each page for pagination
  loadPage(pageNo) {
    console.log(pageNo);
    this.apiService.getPlanetsByPage(pageNo).then((result: any) => {
      if (result.results) {
        this.planets = [];
        this.planets = result.results;
      }
    });
  }

  ngOnInit() {
    // load current page
    this.loadPage(this.page);
  }

}
