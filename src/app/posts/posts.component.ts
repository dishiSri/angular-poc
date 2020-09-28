import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  user$: Object;
  posts;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.user$ = params.id );
    }

  ngOnInit(){
    console.log(this.user$)
    this.data.getPosts(this.user$).subscribe(
      response =>{
      this.posts = response
    }
       );
  }

  deletePosts(post){
    console.log(post.id)
    this.data.deletePosts(post.id).subscribe(
      response =>{
        this.posts = this.posts.filter(item => item.id !== post.id);
         console.log("success")  
      }
    );
    
  }

}
