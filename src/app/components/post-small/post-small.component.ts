import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-small',
  templateUrl: './post-small.component.html',
  styleUrls: ['./post-small.component.scss']
})
export class PostSmallComponent {
  @Input() post!: Post;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigateByUrl(`/post/${this.post.id}`)
  }
}
