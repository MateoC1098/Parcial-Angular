/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantasListComponent } from './plantas-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Plantas } from '../plantas';
import { PlantasService } from '../plantas.service';

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantasListComponent ],
      providers: [ PlantasService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const planta = new Plantas(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table with 3 rows plus header', () => {
    const tableRows = debug.queryAll(By.css('tr'));
    expect(tableRows.length).toBe(4);
  })
});
