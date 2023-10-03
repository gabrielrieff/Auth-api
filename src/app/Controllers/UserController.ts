import { Response, Request } from 'express';
import { dataSource } from "../../database/data-source";
import User from "../models/User";

class UserController {
  async store(req: Request, res: Response) {
    const repository = dataSource.getRepository(User);
    
    const { name, email, password } = req.body;
    
    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return res.sendStatus(409);
    }

    const user = repository.create({
      name,
      email,
      password,
    });

    await repository.save(user);

    return res.json(user);
  }
}

export { UserController };
