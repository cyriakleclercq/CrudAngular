import { Injectable } from '@angular/core';
import { ArticleModel } from './models/articles'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  receiveArticle: ArticleModel[] = [];

  constructor() { }

  saveArticle(f) {
    let article: ArticleModel = new ArticleModel(new Date(), f.titre, f.contenu, f.image);
    this.receiveArticle.push(article);

    console.log(this.receiveArticle);

  }

  updateArticle(f, id) {
    let article: ArticleModel = new ArticleModel(new Date(), f.titre, f.contenu, f.image);


    this.receiveArticle.splice(id, 1, article);


  }

  getAllArticle() {
    return this.receiveArticle;
  }

  getArticle(id) {
    return this.receiveArticle[id];
  }

  deleteArticle(i) {
    this.receiveArticle.splice(i, 1);
  }
}
