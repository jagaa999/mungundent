import React from "react";
import * as admin from "firebase-admin";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const serviceAccount = {
  type: "service_account",
  project_id: "moto-86243",
  private_key_id: "1b7153379afca78dfe5522197c1d51c19f4f1462",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDCs2Nyx9Z+qwhT\n/wvEatJ7/zvQ2FmAjx4jHp7zJxXw8lbxz0noiOzTOtLZBqJyjHx3GvMj3peGKOHC\n7uFrVL7r2XVgVVVqbXRfSIduTN4Y55Vyk/nHaS+ioEDYCBGtgduDaOccfJTB7UcV\n/6hZ4hf6xR6Pu1PVnslPbe/8sq84CQhFNelIaVp5wyZicQ6UuAhlV5izT6keQ5MW\nOuDpTaa4wQXx0pu3P1V1AGbHFqxFyQH8hgMmNPurx2MbirFySdZl6NVEW1lelHKU\nyN1E32vyUvz7me5FGYuv3smCgerF6wi8rOBm7/NeWPM49yvTPYWmSsglmTAocLXC\n+ktUbFqnAgMBAAECggEAPgT+jLVzce3xPTBlAzAz1CO9Xg1MlVMBepZqc3Hj31iS\nsXwiQtw69B4sw80FOg/eJeKDyM1C3w1uvLVzQMlB98bRSNpl1vz+sMtduJjrtmsu\ng8z3J7ot3lPF1Ard9rMCxZ1I4R4eFJgMqMlDSz5l/Q+FaKt3TPjDj3WpmIkin2pS\nsBvWFPHy8X11lQzFKkFoor4poaZGr3XJfaL5alvIzqmbRfoT9OMNZjkGo9GQVH61\nyzipWvQKG+fXfqUSmOHyD9KzF+LfvHJcSCtL4kPSXW35PVnVA8ZqV60CgoU4pPbo\nSTnGRY7bpdbIqFeG1d8OGYY4hZSffp4gDv6AWin0oQKBgQDsBNdPf8fY0agf/+mF\nPVTnB1KQvMtdOpPDp5mTDXT5QObQ4IdsAcqP+tzXlNgfTTClLsFq1Q2aQ6ULSzky\n9qI13OZaVQWtH+PG2S2E6RqEGcYFVQR+fpMN3XgGejrZQieHNvMcT/ZBomE3Ci+r\nVC3Bpm15M3vrujfxMVdBLiYvvQKBgQDTLxKLQT+NSevyY9/AyBN79q7LPUyea/7F\nh+LMsJF3Cj3bNdIN7MxmAdW0OEZyNnX/lQjFAfeweoEqwQHeQbfgR8+T9/GQMhty\ndWtSsspLKPElnsvBuI162meeM0ySiuG01CJAfh3ttzqcW+eK7Vr2RSueXNYhH2zT\n6IZaPhW4MwKBgBGpKxNf1Gx9A7+hPrAhrsC644rBFdacE4KIgA1o7F/aY2st4fRL\nDgVIGE5pbOKqvAEgRojf+GyaszbtIhKWMf0l0nbf9dTGlhzDE4zmhH1uEEtF2Vg9\n0HMxJ1IUw2KOeLa9feOYeCzhIbUkpfyECAh9k6OGHre874K01nqiIWlhAoGAVvmJ\nCp8ZvGfYa+CkM3JzS9ehz4R0fL5/k/zN9H03u64VIaX918xRtiVFTU7r/Hffix5n\nGTQhPaaGcgRBb7bjMtSAcjFoZHmugipHxCxsUh4Piu3mfucyJYmzqRz5iVT3dhDz\n9lm6m7+dvO3A45+zmb+NIlCbw9J8cJ3QT3RIX68CgYB+PxPK1AGhHy5f6N+L91w+\nCEA70oO8/kDJ/3cYfBK2wP8LMS0dBzQ/ij32Hk+BuJxTrZlNI/DOLvlg7fOCvQ7g\n+En0QqEMsNeVKHPqbOXisYKmRjuEQ5NZg/g8v4P1LCllQERa6OdQRmLs7xhX+xYk\n+vh1YOJupTuWdTse9wM9zg==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-e5o0k@moto-86243.iam.gserviceaccount.com",
  client_id: "110082887772075638101",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-e5o0k%40moto-86243.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // serviceAccountId:
  //   "firebase-adminsdk-e5o0k@moto-86243.iam.gserviceaccount.com",
  databaseURL: "https://moto-86243.firebaseio.com",
});

let userId = "k0N5PBF1tdM19uSevWsxD0KxkMx1";
let additionalClaims = {
  premiumAccount: true,
};

let myToken = "";

admin
  .auth()
  .createCustomToken(userId, additionalClaims)
  .then(function (customToken) {
    // Send token back to client
    console.log("customToken", customToken);
    myToken = customToken;
  })
  .catch(function (error) {
    console.log("Error creating custom token:", error);
  });

// admin.initializeApp(config);

// $env: GOOGLE_APPLICATION_CREDENTIALS =
//   "C:\\wamp64\www\motoreact\moto\src\components\Moto\tool\moto-86243-firebase-adminsdk-e5o0k-1b7153379a.json";

// const config = {
//   apiKey: "AIzaSyDoc57P_ggKwJCiJgGHWeZi-oIXshpcDs4",
//   authDomain: "moto-86243.firebaseapp.com",
//   databaseURL: "https://moto-86243.firebaseio.com",
//   projectId: "moto-86243",
//   storageBucket: "moto-86243.appspot.com",
//   messagingSenderId: "938578949385",
// };

// firebase.initializeApp(config);
// const auth = firebase.auth();

firebase
  .auth()
  .signInWithCustomToken(myToken)
  .catch(function (error) {
    console.log("?????? ??????????", error);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

const ImportUser = () => {
  // console.log("IMPORT USER ??????????????.");

  admin
    .auth()
    .importUsers([
      {
        uid: "some-uid",
        displayName: "John Doe",
        email: "johndoe@gmail.com",
        photoURL: "http://www.example.com/12345678/photo.png",
        emailVerified: true,
        phoneNumber: "+11234567890",
        // Set this user as admin.
        customClaims: { admin: true },
        // User with Google provider.
        providerData: [
          {
            uid: "109778241713620039647",
            email: "johndoe@gmail.com",
            displayName: "John Doe",
            photoURL: "http://www.example.com/12345678/photo.png",
            providerId: "google.com",
          },
        ],
      },
    ])
    .then(function (results) {
      results.errors.forEach(function (indexedError) {
        console.log("Error importing user " + indexedError.index);
      });
    })
    .catch(function (error) {
      console.log("?????????? ???????????? ??????????!!:  --  ", error);
    });

  return <div>?????????? ?????? ??????.</div>;
};

export default ImportUser;
