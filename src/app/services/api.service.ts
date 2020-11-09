import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserResponse } from 'src/app/types';
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
}
