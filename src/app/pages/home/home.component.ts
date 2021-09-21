import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { TypicodeService } from 'src/app/services/typicode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: Boolean = false;
  posts: Post[] = [];
  constructor(private service: TypicodeService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.loading = true;
    this.service.posts().then(res => {
      console.log("Success");
      this.posts = res;
    }).catch(err => {
      console.log("error")
    }).finally(() => {
      this.loading = false;
    });
  }
}
