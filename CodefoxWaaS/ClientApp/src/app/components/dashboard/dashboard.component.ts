import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
/** dashboard-component component*/
export class DashboardComponent implements OnInit {
  /** dashboard-component ctor */
  constructor() {

  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  getJobs(): void {
    //this.jobService.getJobs()
    //  .subscribe(jobs => this.jobs = jobs.slice(1, 5));

    console.log('Reached getJobs..');
  }


}
