// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyAl-f-D1KTAOp7c-6js1NyPz8RAC5KVLeo",
  authDomain: "szombat2.firebaseapp.com",
  projectId: "szombat2",
  storageBucket: "szombat2.appspot.com",
  messagingSenderId: "852902762080",
  appId: "1:852902762080:web:b7335405754103d4121505"
};

export const environment = {
  production: false,
  firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
