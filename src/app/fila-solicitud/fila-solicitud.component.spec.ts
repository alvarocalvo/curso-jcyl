import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaSolicitudComponent } from './fila-solicitud.component';

describe('FilaSolicitudComponent', () => {
  let component: FilaSolicitudComponent;
  let fixture: ComponentFixture<FilaSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
