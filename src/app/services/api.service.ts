import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Report } from '../models/reports';
import { Volunteer } from '../models/Volunteer';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(
      'https://anti-bully-portal-backend.onrender.com/api/articles'
    );
  }

  getOneArticle(id: string): Observable<Article> {
    return this.http.get<Article>(
      `https://anti-bully-portal-backend.onrender.com/api/a/${id}`
    );
  }

  addArticles(article: Article) {
    return this.http.post(
      'https://anti-bully-portal-backend.onrender.com/api/add-article',
      article
    );
  }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(
      'https://anti-bully-portal-backend.onrender.com/api/reports'
    );
  }

  getOneReport(id: string): Observable<Report> {
    return this.http.get<Report>(
      `https://anti-bully-portal-backend.onrender.com/api/r/${id}`
    );
  }

  addReport(report: Report) {
    return this.http.post(
      'https://anti-bully-portal-backend.onrender.com/api/report',
      report
    );
  }

  addVolunteer(volunteer: Volunteer) {
    return this.http.post(
      'https://anti-bully-portal-backend.onrender.com/api/add-volunteer',
      volunteer
    );
  }
}
