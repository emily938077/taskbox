import { ComponentFixture, TestBed } from '@angular/core/testing';

import { myButtonComponent } from './mybutton.component';
import { render, screen } from '@testing-library/angular';
import {
  composeStories,
  createMountableStoryComponent,
} from '@storybook/testing-angular';
import * as stories from './mybutton.stories';

const { Default, Primary, Secondary, Large, Medium, Small, Disable} = composeStories(stories);

describe('ButtonComponent', () => {
  let component: myButtonComponent;
  let fixture: ComponentFixture<myButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ myButtonComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(myButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reuses args from composed story', async () => {
    const { component, ngModule } = createMountableStoryComponent(
      Primary({}, {} as any)
    );
    await render(component, { imports: [ngModule] });
    expect(screen.getByText(Primary.args?.label!)).not.toBeNull();
  });

  it('button text  ', async () => {
    const text = 'butttton';
    component.label = text;
    expect(component.label).toBe(text);

  });

});

