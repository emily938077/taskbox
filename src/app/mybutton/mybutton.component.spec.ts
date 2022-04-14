import { ComponentFixture, TestBed } from '@angular/core/testing';

import { myButtonComponent } from './mybutton.component';

describe('ButtonComponent', () => {
  let component: myButtonComponent;
  let fixture: ComponentFixture<myButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ myButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(myButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
