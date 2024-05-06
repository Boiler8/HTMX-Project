
 const {onCall} = require("firebase-functions/v2/https");
 const {onDocumentWritten} = require("firebase-functions/v2/firestore");


const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyAStzEVEDu7iLxnPFgEd--jepI1ppSAwoM",
  authDomain: "htmxvinylstyle.firebaseapp.com",
  projectId: "htmxvinylstyle",
  storageBucket: "htmxvinylstyle.appspot.com",
  messagingSenderId: "1074781853591",
  appId: "1:1074781853591:web:02bc940c8d8ebef909d6d2",
  measurementId: "G-E3KX6KY7BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
