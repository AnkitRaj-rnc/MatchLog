import { join } from 'path'
import { ConnectionOptions } from 'typeorm'
import {user} from './user/user.entity'


const PROD_ENV = 'production'

const config = {
  host: 'localhost',
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
}

// FOR GOOGLE CLOUD SQL
if (
  process.env.INSTANCE_CONNECTION_NAME &&
  process.env.NODE_ENV === PROD_ENV
) {
  config.host = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
}

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: '',
  database: 'test',
  entities: [
    user
  ],
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  dropSchema: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: ['warn', 'error'],
  logger: process.env.NODE_ENV === PROD_ENV ? 'file' : 'debug',
  migrations: [
    join(__dirname, "dist/migrations/*{.ts,.js}")
  ],
  cli: {
    migrationsDir: 'src/migrations'
  }
}

export = connectionOptions