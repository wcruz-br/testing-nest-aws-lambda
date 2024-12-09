import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module.js';
import serverlessExpress from 'aws-serverless-express';
import express from 'express';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

const expressApp = express();
const nestApp = await NestFactory.create(
  AppModule,
  new ExpressAdapter(expressApp),
);
await nestApp.init();

const server = serverlessExpress.createServer(expressApp);

export const handler = (event: APIGatewayProxyEvent, context: Context) => {
  serverlessExpress.proxy(server, event, context);
};

