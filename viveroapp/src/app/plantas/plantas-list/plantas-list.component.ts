import { Component, OnInit } from '@angular/core';
import { Plantas } from '../plantas';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {

  plantas: Plantas[] = []

  constructor(private plantasService: PlantasService) { }


  ngOnInit() {
    this.plantasService.getPlantas().subscribe(
      (data) => {
        this.plantas = data
      }
    )
  }

}
