import {Table, Column, Model, HasMany, BelongsToMany} from 'sequelize-typescript';
import { Scope } from './scope.entity';

@Table
class Role extends Model{
  
  @Column({ unique: true })
  name: string;
  scopes: Scope[];
  @BelongsToMany(() => Author, () => BookAuthor)
  authors: Author[];
}
}

  /* @ManyToMany(() => Scope)
  scopes: Scope[];
  @OneToMany(() => User, (user) => user.role)
  @JoinColumn()
  users: User[] */;
}
