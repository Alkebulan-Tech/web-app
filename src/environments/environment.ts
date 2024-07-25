// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// `.env.ts` is generated by the `npm run env` command
import env from './.env';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  version: env.mifos_x.version,
  hash: env.mifos_x.hash,
  // For connecting to server running elsewhere update the tenant identifier
  fineractPlatformTenantId: window['env']['fineractPlatformTenantId'] || 'default',
  fineractPlatformTenantIds: window['env']['fineractPlatformTenantIds'] || 'default',
  // For connecting to others servers running elsewhere update the base API URL
  baseApiUrls: window['env']['fineractApiUrls'] ||
    'https://piglet-engaging-mako.ngrok-free.app',
  // For connecting to server running elsewhere set the base API URL
  baseApiUrl: window['env']['baseApiUrl'] || 'https://piglet-engaging-mako.ngrok-free.app',
  allowServerSwitch: env.allow_switching_backend_instance,
  apiProvider: window['env']['apiProvider'] || '/fineract-provider/api',
  apiVersion: window['env']['apiVersion'] || '/v1',
  serverUrl: '',
  oauth: {
    enabled: false,  // For connecting to Mifos X using OAuth2 Authentication change the value to true
    serverUrl: ''
  },
  warningDialog: {
    title: 'Warning',
    content: 'This system is for authorized use only. Unauthorized access will result in possible legal action. By accessing this system, you acknowledge that you are authorized to do so and that all data stored and processed here is confidential.',
    buttonText: 'Close'
  },
  defaultLanguage: window['env']['defaultLanguage'] || 'en-US',
  supportedLanguages: window['env']['supportedLanguages'] || 'cs-CS,de-DE,en-US,es-MX,fr-FR,it-IT,ko-KO,lt-LT,lv-LV,ne-NE,pt-PT,sw-SW',
  preloadClients: window['env']['preloadClients'] || true,

  defaultCharDelimiter: window['env']['defaultCharDelimiter'] || ',',

  displayBackEndInfo: window['env']['displayBackEndInfo'] || 'true',
  // Time in seconds, default 60 seconds
  waitTimeForNotifications: window['env']['waitTimeForNotifications'] || 60,
  // Time in seconds, default 30 seconds
  waitTimeForCOBCatchUp: window['env']['waitTimeForCOBCatchUp'] || 30
};

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBrUTDPRT3FNJPNrz0V_xWQuL1kTjKZUyE",

  authDomain: "kemetx-f8e5b.firebaseapp.com",

  projectId: "kemetx-f8e5b",

  storageBucket: "kemetx-f8e5b.appspot.com",

  messagingSenderId: "667699489962",

  appId: "1:667699489962:web:ff2af954ee2ad0a49f74d3",

  measurementId: "G-PX5K30MD6K"

};
// Server URL
environment.serverUrl = `${environment.baseApiUrl}${environment.apiProvider}${environment.apiVersion}`;
environment.oauth.serverUrl = `${environment.baseApiUrl}${environment.apiProvider}`;

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);