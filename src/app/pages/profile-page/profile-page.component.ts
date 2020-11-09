import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  getAllRoles,
  getAllUsers,
  selectUser,
} from '@app/store/actions/profile.actions';
import { allUsers, currentUser, allRoles } from '@app/store/selectors';
import { RoleObject, User } from '@app/types';
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
  allRoles$: Observable<RoleObject[]>;
  currentUser$: Observable<User>;

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnInit(): void {
    this.store.dispatch(getAllUsers());
    this.store.dispatch(getAllRoles());
    this.allUsers$ = this.store.select(allUsers);
    this.allRoles$ = this.store.select(allRoles);
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

  getRole(currentUser: User, allRoles: RoleObject[]) {
    return allRoles.length > 0 && currentUser && allRoles[currentUser.role];
  }

  hasRight(index: number, role: RoleObject): boolean {
    const binaryRepresentation = role.rights.toString(2).padEnd(4, '0');
    return binaryRepresentation[index] === '1';
  }

  getBadgeClass(index: number, role: RoleObject) {
    const hasRight = this.hasRight(index, role);
    return hasRight ? 'badge-success' : 'badge-danger';
  }
}
