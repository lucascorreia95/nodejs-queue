import Queue, { QueueOptions } from 'bull';

import redisConfig from '../../config/redis';
import * as Jobs from '../jobs';
import { HandleData } from '../types';

const queues = Object.values(Jobs).map((job) => ({
  bull: new Queue(job.key, redisConfig as QueueOptions),
  name: job.key,
  handle: job.handle,
}));

export default {
  queues,
  add(name: string, { data }: HandleData) {
    const queue = this.queues.find((item) => item.name === name);

    return queue?.bull.add(data);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, error) => {
        console.log('Job failed', job.data, job.name);
        console.log('Error: ', error);
      });
    });
  },
};
