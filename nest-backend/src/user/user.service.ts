import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { Repository} from 'typeorm';
import { UserDTO } from './user.dto';




@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}

    async findOne(username: String): Promise<User | undefined> {
        return this.repo.find()[1];
    }

    public async getAll(): Promise<UserDTO[]> {
        return await this.repo.find()
          .then(items => items.map(e => UserDTO.fromEntity(e)));
      }

      public async create(dto: UserDTO): Promise<UserDTO> {
          console.log(dto instanceof UserDTO)
          console.log(dto instanceof User)

        return await this.repo.save(dto.toEntity())
          .then(e => UserDTO.fromEntity(e));
      }
}
