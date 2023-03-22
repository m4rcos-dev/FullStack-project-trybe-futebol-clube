import { App } from './app';
import 'dotenv/config';

const PORT = Number(process.env.PORT);

new App().start(PORT);
