import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment';
import { Post } from 'src/app/interfaces/post';
import { TypicodeService } from 'src/app/services/typicode.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  comments: Comment[] = [];
  loading: Boolean = false;
  id: string | null = '';

  constructor(private service: TypicodeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      let id = res.get('id');
      if (id != this.id) {
        this.id = res.get('id');
        this.loadData();
      }
    });
  }

  loadData() {
    this.loading = true;
    let s1 = this.service.post(this.id).then(res => {
      this.post = res;
    })
    let s2 = this.service.postComments(this.id).then(res => {
      this.comments = res;
    });

    Promise.all([s1, s2]).then(() => {
      this.loading = false;
    })
  }

}
