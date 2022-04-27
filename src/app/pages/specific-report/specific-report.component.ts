import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-report',
  templateUrl: './specific-report.component.html',
  styleUrls: ['./specific-report.component.scss'],
})
export class SpecificReportComponent implements OnInit {
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.params.subscribe(
      (data) => (this.id = data)
    );
  }
}
