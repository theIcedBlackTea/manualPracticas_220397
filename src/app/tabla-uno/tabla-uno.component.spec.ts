import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUnoComponent } from './tabla-uno.component';

describe('TablaUnoComponent', () => {
  let component: TablaUnoComponent;
  let fixture: ComponentFixture<TablaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
