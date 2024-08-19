import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosFormComponent } from './parametros-form.component';

describe('ParametrosFormComponent', () => {
  let component: ParametrosFormComponent;
  let fixture: ComponentFixture<ParametrosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametrosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
