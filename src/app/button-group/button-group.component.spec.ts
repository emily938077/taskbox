import { ComponentFixture, TestBed } from '@angular/core/testing';
import { myButtonComponent } from '../mybutton/mybutton.component';
import { ButtonGroupComponent } from './button-group.component';
import { render, screen } from '@testing-library/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import {
  composeStories,
  createMountableStoryComponent,
} from '@storybook/testing-angular';
import * as stories from './button-group.stories';
const { phone, status2, status3} = composeStories(stories);

describe('ButtonGroupComponent', () => {
  let component: ButtonGroupComponent;
  let fixture: ComponentFixture<ButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGroupComponent, myButtonComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;  // to access properties and methods
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //測過
  // it('input (string) in email condition', async () => {
  //   const { component, ngModule } = createMountableStoryComponent(
  //     status2({}, {} as any)
  //   ); // you can override props and they will get merged with values from the Story's args
  //   await render(component, { imports: [ngModule] });
  //   const buttonElement = screen.getByText(/pass/i);
  //   expect(buttonElement).toBeNull();
  // });
  //測過
  // it('input (string) in email condition', async () => {
  //   const { component, ngModule } = createMountableStoryComponent(
  //     status2({}, {} as any)
  //   ); // you can override props and they will get merged with values from the Story's args
  //   await render(component, { imports: [ngModule] });
  //   const buttonElement = screen.getByText(/pass/i);
  //   expect(buttonElement).not.toBeNull();
  // });

});
