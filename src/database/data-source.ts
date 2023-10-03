import "reflect-metadata"; 
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "auth-api",
  entities: [
    "src/app/models/*.ts"
  ],
  migrations: [
    "src/database/migration/*.ts"
  ],
})