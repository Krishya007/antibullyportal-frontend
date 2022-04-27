import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Report } from '../models/reports';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(
      'https://antibullybackend.onrender.com/api/articles'
    );
  }

  getOneArticle(id: string): Observable<Article> {
    return this.http.get<Article>(
      `https://antibullybackend.onrender.com/api/a/${id}`
    );
  }

  addArticles(article: any) {
    return this.http.post(
      'https://antibullybackend.onrender.com/api/add-article',
      JSON.stringify(article)
    );
  }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(
      'https://antibullybackend.onrender.com/api/reports'
    );
  }

  getOneReport(id: string): Observable<Report> {
    return this.http.get<Report>(
      `https://antibullybackend.onrender.com/api/r/${id}`
    );
  }

  addReport(report: any) {
    return this.http.post(
      'https://antibullybackend.onrender.com/report',
      JSON.stringify(report)
    );
  }
}
