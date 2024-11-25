/* eslint-env node */
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

console.log('url:', config.database_url, 'Port:', config.port);

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database connected successfully');

    // Start the Express server
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log('Database connection error:', err);
  }
}

main();
