import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {

}

export { UsersRepository } //Ajuda no auto import do vscode