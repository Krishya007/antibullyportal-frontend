import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/reports';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  reportArr: Report[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    const _this = this;
    this.api.getReports().subscribe((data) => {
      _this.reportArr = data;
    });
  }
}
