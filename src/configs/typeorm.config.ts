import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  //Database type
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  logging: true,
  username: 'postgres',
  password: 'postgres',
  database: 'iksBoards',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
