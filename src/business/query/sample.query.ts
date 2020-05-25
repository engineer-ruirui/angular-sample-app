import { QueryEntity } from '@datorama/akita';
import { SampleState, SampleStore } from '../store/sample.store';
import { Injectable } from '@angular/core';
import { Sample } from '../store/sample.model';

@Injectable({ providedIn: 'root'})
export class SampleQuery extends QueryEntity<SampleState> {
  constructor(protected store: SampleStore) {
    super(store);
  }
}
