import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStickItemComponent } from './post-stick-item.component';

describe('PostStickItemComponent', () => {
  let component: PostStickItemComponent;
  let fixture: ComponentFixture<PostStickItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostStickItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStickItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
