import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WorkQueueComponent } from './work-queue.component';

describe('WorkQueueComponent', () => {
  let component: WorkQueueComponent;
  let fixture: ComponentFixture<WorkQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WorkQueueComponent,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkQueueComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});