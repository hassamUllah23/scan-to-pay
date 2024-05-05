import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { hasEmptyValues } from '../utils/functions.utils';

config();

interface DatabaseConfig {
  url: string;
}

// interface AuthConfig {
//     jwtSecret: string;
// }

interface ServerConfig {
  port: string;
}

export interface RootConfig {
  database: DatabaseConfig;
  // auth: AuthConfig;
  server: ServerConfig;
}

@Injectable()
export class ConfigService {
  constructor() {}
  getRootConfig(): RootConfig {
    let PORT = process.env.PORT;
    let DB_URL = process.env.DB_URL;

    const config: RootConfig = {
      database: {
        url: DB_URL,
      },
      server: {
        port: PORT,
      },
    };

    if (hasEmptyValues(config)) {
      console.error('\n\nPLEASE ENSURE ALL ENVIRONMENT VARIABLES ARE SET\n\n');
      // process.exit(1)
    }
    // console.log({ config })

    return config;
  }
}
