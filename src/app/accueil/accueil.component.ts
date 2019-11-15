import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ArticleModel } from '../models/articles';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  articles: ArticleModel[];

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.getAllArticle();
  }

  getAllArticle() {
    this.articles = this.globalService.getAllArticle();

  }

  supprimer(i: number) {
    this.globalService.deleteArticle(i);
  }


}
