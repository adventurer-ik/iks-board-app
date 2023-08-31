import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

// export const typeORMConfig: TypeOrmModuleOptions = {
//   //Database type
//   type: 'postgres',
//   host: '127.0.0.1',
//   port: 5432,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'iksBoards',
//   entities: [__dirname + '/../**/*.entity.{js,ts}'],
//   synchronize: true,
// };

const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  //Database type
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: dbConfig.synchronize,
};
