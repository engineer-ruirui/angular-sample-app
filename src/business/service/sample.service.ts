import { SampleStore } from '../store/sample.store';
import { HttpClient } from '@angular/common/http';
import { Sample } from '../store/sample.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class SampleService {

  constructor(
    private sampleStore: SampleStore,
    private http: HttpClient
  ) {}

  sampleGet() {
    this.http.get<Array<Sample>>('http://localhost:3000/sites')
    .subscribe((sample) => {
      this.sampleStore.set(sample);
    });
  }
}
