import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  //Database type
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'iks-boards',
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  synchronize: true,
};
