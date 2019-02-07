import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTrackCardComponent } from './saved-track-card.component';

describe('SavedTrackCardComponent', () => {
  let component: SavedTrackCardComponent;
  let fixture: ComponentFixture<SavedTrackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedTrackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedTrackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
