import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigemBoletimComponent } from './origem-boletim.component';

describe('OrigemBoletimComponent', () => {
  let component: OrigemBoletimComponent;
  let fixture: ComponentFixture<OrigemBoletimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigemBoletimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigemBoletimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
