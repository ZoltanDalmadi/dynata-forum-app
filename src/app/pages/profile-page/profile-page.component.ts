import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getAllUsers, selectUser } from '@app/store/actions/profile.actions';
import { allUsers, currentUser } from '@app/store/selectors';
import { User } from '@app/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfilePageComponent implements OnInit {
  constructor(private readonly store: Store) {}

  allUsers$: Observable<User[]>;
  currentUser$: Observable<User>;

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnInit(): void {
    this.store.dispatch(getAllUsers());
    this.allUsers$ = this.store.select(allUsers);
    this.currentUser$ = this.store.select(currentUser);

    this.currentUser$.subscribe(user => {
      if (user) {
        this.form.patchValue({
          name: user.name,
          email: user.email,
        });
      }
    });
  }

  selectUser(e) {
    const select = e.target;
    const selectedOption = select.options[select.selectedIndex];

    this.store.dispatch(selectUser({ userId: Number(selectedOption.value) }));
  }
}
