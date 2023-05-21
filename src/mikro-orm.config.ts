import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const logger = new Logger('MikroORM');
const config: Options = {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: 'test',
  clientUrl: process.env.MONGO_URL || '',
  type: 'mongo',
  debug: true,
  highlighter: new SqlHighlighter(),
  logger: logger.log.bind(logger),
};

export default config;
