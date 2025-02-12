import { Component, Input } from '@angular/core';
import { Article } from '../blog-control-center/blog-control-center.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article-element',
  imports: [DatePipe],
  templateUrl: './article-element.component.html',
  styleUrl: './article-element.component.css'
})
export class ArticleElementComponent {
  @Input() article!: Article;
}
