import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoleResponse, TopicsResponse, UserResponse } from 'src/app/types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  allUsers() {
    return this.http
      .get<UserResponse>('/api/users')
      .pipe(map(resp => resp.data));
  }

  updateUser({ id, name, email }) {
    debugger;
    return this.http.put(`/api/user/${id}`, {
      name,
      email,
    });
  }

  updatePassword(userId: number, password1: string, password2: string) {
    return this.http.put(`/api/user/${userId}/password`, {
      password1,
      password2,
    });
  }

  allRoles() {
    return this.http
      .get<RoleResponse>('/api/roles')
      .pipe(map(resp => resp.data));
  }

  allTopics() {
    return this.http
      .get<TopicsResponse>('/api/topics')
      .pipe(map(resp => resp.data));
  }
}
