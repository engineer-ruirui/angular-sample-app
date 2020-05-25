import { sampleStore } from './sample.store';

export async function update(id, data) {
  await Promise.resolve();
  sampleStore.update(id, data);
}

export async function remove(id) {
  await Promise.resolve();
  sampleStore.remove(id);
}
