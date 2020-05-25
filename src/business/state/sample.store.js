import { createEntityStore } from '@datorama/akita';

const initialState = {};

export const sampleStore = createEntityStore(initialState, {
  name: 'sample'
});

