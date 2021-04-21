import { firebase } from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBGAkbDbJ4zaD56Snp37PyqmhyErqaygus",
  authDomain: "live-chatroom-7e4c4.firebaseapp.com",
  projectId: "live-chatroom-7e4c4",
  storageBucket: "live-chatroom-7e4c4.appspot.com",
  messagingSenderId: "693119265496",
  appId: "1:693119265496:web:ea41b75a3219357b2845ad",
};

// init Firebase
firebase.initializeApp(firebaseConfig);
// init Firestore
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimeStamp;

export { projectFirestore, timestamp };
