import { Request, Response } from 'express';
import Queue from '../lib/Queue';

import { User } from '../types';

export default {
  async store(req: Request<{}, {}, User>, res: Response) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    await Queue.add('RegistrationMail', { data: { user } });

    return res.json(user);
  },
};
