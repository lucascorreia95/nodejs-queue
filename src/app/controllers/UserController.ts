import { Request, Response } from 'express';
import Queue from '../lib/Queue';

type ReqBody = {
  name: string;
  email: string;
  password: string;
};

export default {
  async store(req: Request<{}, {}, ReqBody>, res: Response) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    await Queue.add('RegistrationMail', { user });

    return res.json(user);
  },
};
