import { Component } from '@angular/core';
import { ArticleElementComponent } from '../article-element/article-element.component';
import { AddArticleComponent } from '../add-article/add-article.component';
import { NgFor } from '@angular/common';

export interface Article {
  id: number,
  title: string,
  content: string,
  author: string,
  date: Date,
  type: string
}

@Component({
  selector: 'app-blog-control-center',
  imports: [ArticleElementComponent, AddArticleComponent, NgFor],
  templateUrl: './blog-control-center.component.html',
  styleUrl: './blog-control-center.component.css'
})
export class BlogControlCenterComponent {
  articles: Array<Article> =[ 
    {
      id:  1,
      title: "Mon premier article",
      content: "Ceci est le contenu de mon premier article",
      author: "Maxime",
      date: new Date(2020,2,28),
      type: "article" 
    },
    {
      id:  2,
      title: "De la merde",
      content: "Ceci est le contenu de mon brouillon",
      author: "Maxime",
      date:new Date(2020,2,28),
      type: "brouillon" 
    }
]

onAddArticle(formData: Pick<Article, 'title' | 'content'>) {
  let article: Article = {
    id : this.articles.length + 1,
    title : formData.title,
    content: formData.content,
    author : "Maxime",
    date : new Date(),
    type : "article",
  }
  this.articles.push(article)
}

onAddBrouillon(formData:  Pick<Article, 'title' | 'content'>) {
  let article: Article = {
    id : this.articles.length + 1,
    title : formData.title,
    content: formData.content,
    author : "Maxime",
    date : new Date(),
    type : "brouillon",
  }
  this.articles.push(article)
}
}
