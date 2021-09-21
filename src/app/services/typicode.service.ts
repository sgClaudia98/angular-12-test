import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {
  url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  posts(): Promise<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`).toPromise();
  }
  post(idPost: string | null): Promise<Post> {
    return this.http.get<Post>(`${this.url}/posts/${idPost}`).toPromise();
  }

  postComments(idPost: string | null): Promise<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments?postId=${idPost}`).toPromise();
  }
}
