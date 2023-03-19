import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIdocZM3l4cXc7eeQHeNwM3gegeKA1hwE",
  authDomain: "landingpages-eed03.firebaseapp.com",
  projectId: "landingpages-eed03",
  storageBucket: "landingpages-eed03.appspot.com",
  messagingSenderId: "287820954524",
  appId: "1:287820954524:web:615f9fcc113a906a296659",
  measurementId: "G-J0JCXYPEV8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
