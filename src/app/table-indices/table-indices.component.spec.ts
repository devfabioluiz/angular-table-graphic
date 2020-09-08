import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIndicesComponent } from './table-indices.component';

describe('TableIndicesComponent', () => {
  let component: TableIndicesComponent;
  let fixture: ComponentFixture<TableIndicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIndicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
