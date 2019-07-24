import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
   token = null;
  constructor(public http: HttpClient) { }
  getUser() {
       return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  onDelete(id) {
        return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }
  onUpdate(user, id) {
    return this.http.patch('https://jsonplaceholder.typicode.com/users/' + id  , user);
}
}
