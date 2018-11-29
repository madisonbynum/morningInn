import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockRoomComponent } from './block-room.component';

describe('BlockRoomComponent', () => {
  let component: BlockRoomComponent;
  let fixture: ComponentFixture<BlockRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
