import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStickListComponent } from './post-stick-list.component';

describe('PostStickListComponent', () => {
  let component: PostStickListComponent;
  let fixture: ComponentFixture<PostStickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostStickListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
