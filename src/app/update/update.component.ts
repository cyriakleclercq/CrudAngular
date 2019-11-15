import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../global.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleModel } from '../models/articles';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  articles: ArticleModel;
  articleForm: FormGroup;
  id: number;

  constructor(private globalService: GlobalService, private location: Location, private activatedRoute: ActivatedRoute, fb: FormBuilder) {
    this.articleForm = fb.group({
      titre: new FormControl(''),
      contenu: new FormControl(''),
      date: Date,
      image: new FormControl('')
    })
  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.articles = this.globalService.getArticle(this.id)
    console.log(this.articles);
    return this.id;
  }

  modifier() {
    this.globalService.updateArticle(this.articleForm.value, this.id)
  }
}
