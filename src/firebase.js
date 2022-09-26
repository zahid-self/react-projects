import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.RECACT_APP_FAPI_KEY,
  authDomain: process.env.RECACT_APP_FAUTH_DOMAIN,
  projectId: process.env.RECACT_APP_FPROJECT_ID,
  storageBucket: process.env.RECACT_APP_FSTORAGE_BUCKET,
  messagingSenderId: process.env.RECACT_APP_FMESSAGING_SENDER_ID,
  appId: process.env.RECACT_APP_FAPP_ID,
};

const app = initializeApp(firebaseConfig);
export default app;
