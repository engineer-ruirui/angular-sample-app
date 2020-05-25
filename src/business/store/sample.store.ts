import { Sample } from './sample.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface SampleState extends EntityState<Sample> { }

const initialState = {};

@Injectable({ providedIn: 'root'})
@StoreConfig({ name: 'sample', idKey: 'id' })
export class SampleStore extends EntityStore<SampleState> {
  constructor() {
    super(initialState);
  }
}