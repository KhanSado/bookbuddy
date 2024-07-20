import packageInfo from '../../package.json';

export const environment = {
  production: false,
  appVersion: packageInfo.version,
  apiUrl: 'http://localhost:4200',
  firebase: {
    apiKey: "AIzaSyBllcI_ZzaUd5NddmykCY82-TjzzlLLcAc",
    authDomain: "reaad-app.firebaseapp.com",
    databaseURL: "https://reaad-app-default-rtdb.firebaseio.com",
    projectId: "reaad-app",
    storageBucket: "reaad-app.appspot.com",
    messagingSenderId: "245016133",
    appId: "1:245016133:web:592f38c193dd393db5e52c",
    measurementId: "G-32GG9GQP9M"
  }
};
