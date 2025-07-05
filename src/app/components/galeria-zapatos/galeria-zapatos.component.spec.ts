import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaZapatosComponent } from './galeria-zapatos.component';

describe('GaleriaZapatosComponent', () => {
  let component: GaleriaZapatosComponent;
  let fixture: ComponentFixture<GaleriaZapatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaZapatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaZapatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
