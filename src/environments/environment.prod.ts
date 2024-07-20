import packageInfo from '../../package.json';

// export const environment = {
  // appVersion: packageInfo.version,
  // production: true,
  // apiUrl: 'http://localhost:4200'
// };
export const environment = {
  production: true,
  appVersion: packageInfo.version,
  apiUrl: 'http://localhost:4200',
  firebase: {
    apiKey: "AIzaSyCpq_O39AGYe5uGFWRb-LXD5Tvx23zUocI",
    authDomain: "reaad-prod-21a1e.firebaseapp.com",
    projectId: "reaad-prod-21a1e",
    storageBucket: "reaad-prod-21a1e.appspot.com",
    messagingSenderId: "375483717504",
    appId: "1:375483717504:web:5080bc45fff8b423349365",
    measurementId: "G-DLGRLTSL0N"
  }
};
