import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  type: process.env.DB_TYPE as any, // 'mysql'
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  logging: process.env.DB_LOGGING === 'true',
  entities: ['src/entities/*.ts'], // or use explicit list
});