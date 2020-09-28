import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getPosts(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+userId)
  }

  deletePosts(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id)
  }
}

