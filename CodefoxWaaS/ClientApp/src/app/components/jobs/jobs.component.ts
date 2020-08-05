import { Component, OnInit } from '@angular/core';
import { Job } from '../../classes/job';
import { JobService } from '../../services/job.service';
import { INITIAL_CONFIG } from '@angular/platform-server';


@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.css']
})

/** jobs component*/



export class JobsComponent implements OnInit {


  selectedJob: Job;

  jobs: Job[];



    /** jobs ctor */
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
        throw new Error("Method not implemented.");
  }


}
