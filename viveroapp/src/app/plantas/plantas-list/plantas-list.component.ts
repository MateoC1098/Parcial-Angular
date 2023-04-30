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
  totalPlantasInt = 0;
  totalPlantasExt = 0;

  constructor(private plantasService: PlantasService) { }


  ngOnInit() {
    this.plantasService.getPlantas().subscribe(
      (data) => {
        this.plantas = data;
        this.totalPlantasInt = this.plantas.reduce((total, planta) => {
          return planta.tipo === 'Interior' ? total +1 : total;
        }, 0);

        this.totalPlantasExt = this.plantas.reduce((total, planta) => {
          return planta.tipo === 'Exterior' ? total +1 : total;
        }, 0);
      }

    )
  }

}
