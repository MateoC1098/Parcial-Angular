import { Component, OnInit } from '@angular/core';
import { Plantas } from '../plantas';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {

  plantas: Array<Plantas> = []
  constructor() { }

  ngOnInit() {
  }

}
