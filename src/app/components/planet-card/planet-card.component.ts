import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit {
  @Input() planetName;
  @Input() population;
  @Input() terrain;
  @Input() climate;
  constructor() { }

  ngOnInit() {
  }

}
