import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyAccountsComponent } from './my-accounts.component';

describe('MyAccountsComponent', () => {
  let component: MyAccountsComponent;
  let fixture: ComponentFixture<MyAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MyAccountsComponent,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAccountsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});