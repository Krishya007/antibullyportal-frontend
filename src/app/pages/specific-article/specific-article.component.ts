import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-article',
  templateUrl: './specific-article.component.html',
  styleUrls: ['./specific-article.component.scss'],
})
export class SpecificArticleComponent implements OnInit {
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.params.subscribe(
      (data) => (this.id = data)
    );
  }
}
