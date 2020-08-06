import { Injectable } from '@angular/core';
import { JOBS } from '../mock-data/mock-jobs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Job } from '../classes/job';



@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private messageService: MessageService) { }


  getJobs(): Observable<Job[]> {
    this.messageService.add('JobService: fetched jobs');
    return of(JOBS);
  }


}





