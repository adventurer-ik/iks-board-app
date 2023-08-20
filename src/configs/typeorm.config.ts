import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  //Database type
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'iksBoards',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
