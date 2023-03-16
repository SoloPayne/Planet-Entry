import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-planets-search',
  templateUrl: './my-planets-search.component.html',
  styleUrls: ['./my-planets-search.component.css']
})
export class MyPlanetsSearchComponent implements OnInit {

name: string = 'Sade';

  constructor() { }

  ngOnInit(): void {
  }



}
