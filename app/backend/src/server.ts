import { App } from './app';
import 'dotenv/config';

const PORT = Number(process.env.APP_PORT);

new App().start(PORT);
