import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FAPI_KEY,
  authDomain: process.env.REACT_APP_FAUTH_DOMAIN,
  projectId: process.env.REACT_APP_FPROJECT_ID,
  storageBucket: process.env.REACT_APP_FSTORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FMESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FAPP_ID,
  databaseURL: process.env.REACT_APP_FDB_URL,
};

const app = initializeApp(firebaseConfig);
export default app;
