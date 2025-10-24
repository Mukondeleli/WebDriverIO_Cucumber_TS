import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'LT:Options': {
        platformName: 'Windows 11',
        build: 'WDIO Cucumber TS Demo',
        name: 'SauceDemo Cart Test',
        selenium_version: '4.0.0',
        network: false,
        video: true,
        console: true,
        tunnel: false,
        w3c: true,
      },
    },
  ],
  logLevel: 'info',
  framework: 'cucumber',
  cucumberOpts: {
    require: ['./features/step-definitions/**/*.ts'],
    timeout: 60000,
  },
  services: [
    [
      'lambdatest',
      {
        lambdatestOpts: { tunnel: false },
      },
    ],
  ],
  reporters: ['spec'],
  baseUrl: process.env.BASE_URL,
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  hostname: 'hub.lambdatest.com',
  port: 80,
  path: '/wd/hub',
};
