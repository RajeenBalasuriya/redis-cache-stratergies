import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "sakila",
    entities: ["src/entities/*.js"],
    logging: true,
    synchronize: false,
});