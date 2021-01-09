/* import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'intro-storybook-v60'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('intro-storybook-v60');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('intro-storybook-v60 app is running!');
  });
});
 */
/* import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('App', () => {
  test('should render the App component', async () => {
    const { getByText } = await render(AppComponent);
    expect(getByText('Welcome'));
  });
  test('BOOP', () => {
    expect(2 + 2).toBe(4);
  });
}); */

// updates data section

import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list.component';
import { PureTaskListComponent } from './components/pure-task-list.component';
import { TaskComponent } from './components/task.component';
import { TaskService } from '../task.service';
import { Task } from './models/task.model';
import { createMock } from '@testing-library/angular/jest-utils';

describe('App', () => {
  test('should render the App component', async () => {

    const mockedTaskService = createMock(TaskService);

    const { fixture } = await render(AppComponent, {
      declarations: [TaskListComponent, PureTaskListComponent, TaskComponent],
      componentProviders: [
        {
          provide: mockedTaskService,
          useValue: mockedTaskService,
        },
      ],
    });

    expect(fixture.componentInstance.title).toBe('intro-storybook-v60');
  });
});
