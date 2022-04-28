import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Report } from 'src/app/models/reports';
import { Volunteer } from 'src/app/models/Volunteer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private api: ApiService) {}

  articles: Article[] = [];
  reports: Report[] = [];
  volunteers: Volunteer[] = [];

  getArticles() {
    let _this = this;
    this.api.getArticles().subscribe((res) => {
      _this.articles = res;
      console.log(res);
    });
  }

  getReports() {
    let _this = this;
    this.api.getReports().subscribe((res) => {
      _this.reports = res;
      console.log(res);
    });
  }

  getVolunteers() {
    let _this = this;
    this.api.getVolunteers().subscribe((res) => {
      _this.volunteers = res;
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.getArticles();
    this.getReports();
    this.getVolunteers();
  }

  deleteArticle(id: any) {
    this.api.removeArticles(id.toString()).subscribe(() => {
      this.getArticles();
      this.getReports();
      this.getVolunteers();
    });
  }

  deleteReport(id: any) {
    this.api.removeArticles(id.toString()).subscribe(() => {
      this.getArticles();
      this.getReports();
      this.getVolunteers();
    });
  }

  deleteVolunteer(id: any) {
    this.api.removeVolunteer(id.toString()).subscribe(() => {
      this.getArticles();
      this.getReports();
      this.getVolunteers();
    });
  }
}
