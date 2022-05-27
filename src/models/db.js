import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCZKNL-Z2J-z8WhKPUsGq-7WdVfP-2wQsc",
	authDomain: "cloud-sole.firebaseapp.com",
	projectId: "cloud-sole",
	storageBucket: "cloud-sole.appspot.com",
	messagingSenderId: "556792550365",
	appId: "1:556792550365:web:e52b368837b23a026a9c34",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
