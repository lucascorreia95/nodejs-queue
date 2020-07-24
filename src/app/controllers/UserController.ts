import { Request, Response } from 'express';

import Mail from '../lib/Mail';

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

    await Mail.sendMail({
      from: 'Queue test <queue@queuetest.com.br>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá ${name}, bem-vindo ao sistema de filas!`,
    });

    return res.json(user);
  },
};
