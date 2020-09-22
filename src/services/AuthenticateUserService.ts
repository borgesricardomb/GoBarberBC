import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign, verify } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination.');
    }

    // Primeiro parâmetro - payload: informações do usuário para usar depois (não é recomendado usar senha)
    // Segundo parâmetro - string: chave secreta do site/aplicação
    // Terceiro parâmetro - configurações do token (expiresIn: tempo que o token vai durar)
    const token = sign({}, '1as1hisi1sbqus1i232n31', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
