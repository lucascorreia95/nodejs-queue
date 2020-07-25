import Mail from '../lib/Mail';
import { HandleData } from '../types';

export default {
  key: 'RegistrationMail',
  async handle({ data }: HandleData) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Queue test <queue@queuetest.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá ${user.name}, bem-vindo ao sistema de filas!`,
    });
  },
};
