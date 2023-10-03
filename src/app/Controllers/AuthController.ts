import { Response, Request } from 'express';
import { dataSource } from "../../database/data-source";
import User from "../models/User";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

class AuthController {
  async authenticate(req: Request, res: Response){
    const repository = dataSource.getRepository(User);
    
    const { name, email, password } = req.body;
    
    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidadePassword = await bcrypt.compare(password, user.password);

    if(!isValidadePassword) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({id: user.id}, 'secret', { expiresIn: '30d'});

    delete user.password;
    return res.json({
      user,
      token,
    })
  }
}

export { AuthController };