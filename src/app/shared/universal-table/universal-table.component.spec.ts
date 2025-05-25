import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UniversalTableComponent } from './universal-table.component';

describe('UniversalTableComponent', () => {
  let component: UniversalTableComponent;
  let fixture: ComponentFixture<UniversalTableComponent>;

  const mockData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Active',
      lossRatio: '25',
      winnability: 'strong'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Pending',
      lossRatio: '45',
      winnability: 'medium'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UniversalTableComponent,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UniversalTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.data).toEqual([]);
    expect(component.displayColumns).toEqual([]);
    expect(component.columnHeaders).toEqual({});
    expect(component.tableWidth).toBe('900');
  });

  it('should render table with provided data', () => {
    component.data = mockData;
    component.displayColumns = ['name', 'email', 'status'];
    component.columnHeaders = {
      name: 'Full Name',
      email: 'Email Address',
      status: 'Status'
    };

    fixture.detectChanges();

    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();

    const headerCells = fixture.debugElement.queryAll(By.css('th'));
    expect(headerCells.length).toBe(3);
    expect(headerCells[0].nativeElement.textContent.trim()).toBe('Full Name');
    expect(headerCells[1].nativeElement.textContent.trim()).toBe('Email Address');
    expect(headerCells[2].nativeElement.textContent.trim()).toBe('Status');
  });

  it('should use uppercase column name when no header is provided', () => {
    component.data = mockData;
    component.displayColumns = ['name'];
    component.columnHeaders = {};

    fixture.detectChanges();

    const headerCell = fixture.debugElement.query(By.css('th'));
    expect(headerCell.nativeElement.textContent.trim()).toBe('NAME');
  });

  it('should set table width correctly', () => {
    component.tableWidth = '1200';
    fixture.detectChanges();

    const table = fixture.debugElement.query(By.css('table'));
    expect(table.nativeElement.style.width).toBe('1200px');
  });

  it('should return null template when no custom template exists', () => {
    const template = component.getTemplate('nonexistent');
    expect(template).toBeNull();
  });

  describe('getLossRatioClass', () => {
    it('should return "low" for values below 35', () => {
      expect(component.getLossRatioClass('20')).toBe('low');
      expect(component.getLossRatioClass('34')).toBe('low');
    });

    it('should return "medium" for values between 35 and 49', () => {
      expect(component.getLossRatioClass('35')).toBe('medium');
      expect(component.getLossRatioClass('45')).toBe('medium');
      expect(component.getLossRatioClass('49')).toBe('medium');
    });

    it('should return "high" for values 50 and above', () => {
      expect(component.getLossRatioClass('50')).toBe('high');
      expect(component.getLossRatioClass('75')).toBe('high');
      expect(component.getLossRatioClass('100')).toBe('high');
    });
  });

  describe('getDotArray', () => {
    it('should return array of 5 for "very strong"', () => {
      expect(component.getDotArray('very strong')).toEqual(Array(5));
      expect(component.getDotArray('Very Strong')).toEqual(Array(5));
    });

    it('should return array of 4 for "strong"', () => {
      expect(component.getDotArray('strong')).toEqual(Array(4));
      expect(component.getDotArray('Strong')).toEqual(Array(4));
    });

    it('should return array of 3 for "medium"', () => {
      expect(component.getDotArray('medium')).toEqual(Array(3));
      expect(component.getDotArray('Medium')).toEqual(Array(3));
    });

    it('should return array of 3 for "meduim" (typo fallback)', () => {
      expect(component.getDotArray('meduim')).toEqual(Array(3));
    });

    it('should return array of 2 for "weak"', () => {
      expect(component.getDotArray('weak')).toEqual(Array(2));
      expect(component.getDotArray('Weak')).toEqual(Array(2));
    });

    it('should return array of 1 for unknown values', () => {
      expect(component.getDotArray('unknown')).toEqual(Array(1));
      expect(component.getDotArray('')).toEqual(Array(1));
    });
  });

  it('should render correct number of rows', () => {
    component.data = mockData;
    component.displayColumns = ['name', 'email'];
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tr[mat-row]'));
    expect(rows.length).toBe(2);
  });
});