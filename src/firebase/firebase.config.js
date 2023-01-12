// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu42wzUfLzvI-ar3w3zfIb9cuOJRqSsfg",
  authDomain: "laptop-bd-bazar-client.firebaseapp.com",
  projectId: "laptop-bd-bazar-client",
  storageBucket: "laptop-bd-bazar-client.appspot.com",
  messagingSenderId: "908984530199",
  appId: "1:908984530199:web:9c9330b7266bed1beff352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;