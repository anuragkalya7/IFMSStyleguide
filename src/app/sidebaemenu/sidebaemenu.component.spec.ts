import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaemenuComponent } from './sidebaemenu.component';

describe('SidebaemenuComponent', () => {
  let component: SidebaemenuComponent;
  let fixture: ComponentFixture<SidebaemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebaemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
