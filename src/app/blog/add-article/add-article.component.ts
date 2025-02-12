import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../blog-control-center/blog-control-center.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {

  @Output() onAddArticle = new EventEmitter<Pick<Article, 'title' | 'content'>>();
  @Output() onAddBrouillon = new EventEmitter<Pick<Article, 'title' | 'content'>>();

  article: Pick<Article, 'title' | 'content'> = {
    title: "",
    content:""
  }

  addArticle() {
    this.onAddArticle.emit(this.article);
    this.article = {
      title: "",
      content: ""
    };
  }

  addBrouillon() {
    this.onAddBrouillon.emit(this.article);
    this.article = {
      title: "",
      content: ""
    };
  }
}
