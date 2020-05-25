import { createEntityQuery } from '@datorama/akita';
import { sampleStore } from './sample.store';

export const sampleQuery = createEntityQuery(sampleStore);
