import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-appel',
  templateUrl: './historique-appel.component.html',
  styleUrls: ['./historique-appel.component.css']
})
export class HistoriqueAppelComponent implements OnInit {
  tableau = [
    {"id" : 1,"nom" : "Lionel"},
    {"id" : 2,"nom" : "Marie"},
    {"id" : 3,"nom" : "Sarobidy"},
    {"id" : 4,"nom" : "Ratovo"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
