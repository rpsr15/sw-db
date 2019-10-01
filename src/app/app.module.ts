import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlanetCardComponent } from './components/planet-card/planet-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
// Routing 
const appRoutes: Routes = [
  { path: 'planets', component: PlanetsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlanetsComponent,
    PlanetCardComponent
  ],
  imports: [
    MatCardModule,
    FlexLayoutModule ,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
