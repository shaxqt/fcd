import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {

  @Column({ type: 'varchar', length: 100 })
  username_spotify: string;

  @Column({ type: 'varchar', length: 35 })
  display_name: string;

  @Column({ type: 'varchar', length: 35 })
  test: string;

  @Column({ type: 'varchar', length: 250 })
  password: String;

}
