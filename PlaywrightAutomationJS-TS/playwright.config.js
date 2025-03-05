// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  // default wait time for each test 
 
  timeout : 50 *1000,
// default  assertion validation time-out
  expect: {
    timeout : 50 *1000,
  },
  reporter: 'html',
  use: {
    browserName: 'firefox'
  }


});
module.exports = config;

