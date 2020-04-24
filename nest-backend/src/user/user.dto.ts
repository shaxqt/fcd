import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';
import { User } from '../model/user.entity';

export class UserDTO implements Readonly<UserDTO> {
  @ApiProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiProperty({ required: true })
  @IsString()
  displayName: string;

  public static from(dto: Partial<UserDTO>) {
    const it = new UserDTO();
    it.id = dto.id;
    it.displayName = dto.displayName;
    return it;
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      displayName: entity.display_name,
    });
  }

  public toEntity() {
    const user = new User();
    user.id = this.id;
    user.display_name = this.displayName;
    return user;
  }
}
