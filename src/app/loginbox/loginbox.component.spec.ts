import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginboxComponent } from './loginbox.component';
import { render, screen } from '@testing-library/angular';

import {
  composeStories,
  createMountableStoryComponent,
} from '@storybook/testing-angular';
import * as stories from './loginbox.stories';
const { Default, Email} = composeStories(stories);

describe('LoginboxComponent', () => {
  let component: LoginboxComponent;
  let fixture: ComponentFixture<LoginboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //測過
  // it('input (string) in email condition', async () => {
  //   const { component, ngModule } = createMountableStoryComponent(
  //     Default({}, {} as any)
  //   ); // you can override props and they will get merged with values from the Story's args
  //   await render(component, { imports: [ngModule] });
  //   const buttonElement = screen.getByText(/pass/i);
  //   expect(buttonElement).toBeNull();
  // });

  it('input (string) in email condition', async () => {
    component.type = 'email';
    const value = '0900000000';
    component.onKey(value);
    expect(component.message).not.toBe('pass!');})

  it('input (phoneNB) in phone condition', async () => {
    component.type = 'phone';
    const value = '0900000000';
    component.onKey(value);
    expect(component.message).toBe('pass!');})

});
