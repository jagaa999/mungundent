import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// import 'firebase/storage';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDoc57P_ggKwJCiJgGHWeZi-oIXshpcDs4",
  authDomain: "moto-86243.firebaseapp.com",
  databaseURL: "https://moto-86243.firebaseio.com",
  projectId: "moto-86243",
  storageBucket: "moto-86243.appspot.com",
  messagingSenderId: "938578949385",
};

firebase.initializeApp(config);
const auth = firebase.auth();

// firebase.auth().languageCode = "mn";
firebase.auth().useDeviceLanguage(); //Тухайн төхөөрөмжийн хэлийг шууд сонгоё.

const firebaseAuth = firebase.auth();

const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const emailAuthProvider = new firebase.auth.EmailAuthProvider();

const database = firebase.database();
// const memberContext = useContext(MemberContext);

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: "popup",
  // signInSuccessUrl: "/",
  signInOptions: [
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: "image", // 'audio'
        size: "invisible", // 'invisible' or 'compact'
        badge: "bottomright", //' bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: "MN", // Set default country to the United Kingdom (+44).
      // For prefilling the national number, set defaultNationNumber.
      // This will only be observed if only phone Auth provider is used since
      // for multiple providers, the NASCAR screen will always render first
      // with a 'sign in with phone number' button.
      defaultNationalNumber: "1234567890",
      // You can also pass the full phone number string instead of the
      // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
      // the first country ID that matches the country code will be used to
      // populate the country selector. So for countries that share the same
      // country code, the selected country may not be the expected one.
      // In that case, pass the 'defaultCountry' instead to ensure the exact
      // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
      // will always have higher priority than 'loginHint' which will be ignored
      // in their favor. In this case, the default country will be 'GB' even
      // though 'loginHint' specified the country code as '+1'.
      loginHint: "+976-99998888",
      // You can provide a 'whitelistedCountries' or 'blacklistedCountries' for
      // countries to select. It takes an array of either ISO (alpha-2) or
      // E164 (prefix with '+') formatted country codes. If 'defaultCountry' is
      // not whitelisted or is blacklisted, the default country will be set to the
      // first country available (alphabetical order). Notice that
      // 'whitelistedCountries' and 'blacklistedCountries' cannot be specified
      // at the same time.
      whitelistedCountries: ["MN", "+976"],
    },
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // scopes: ["public_profile", "email", "user_likes", "user_friends"],
      scopes: ["public_profile", "email", "user_likes"],
      // customParameters: {
      //   // Forces password re-entry.
      //   auth_type: 'reauthenticate'
      // }
    },

    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // scopes: [
      //   'https://www.googleapis.com/auth/contacts.readonly'
      // ],
      // customParameters: {
      //   prompt: 'select_account'
      // }
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
  ],

  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // var user = authResult.user;
      // var credential = authResult.credential;
      // var isNewUser = authResult.additionalUserInfo.isNewUser;
      // var providerId = authResult.additionalUserInfo.providerId;
      // var operationType = authResult.operationType;
      // Do something with the returned AuthResult.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log("UI Config Доторх user---------", authResult);
      // console.log("UI Config Доторх userredirectUrl---------", redirectUrl);
      //!!user && memberContext.setFirebaseProfile(user);

      return true;
    },
    signInFailure: function (error) {
      // Some unrecoverable error occurred during sign-in.
      // Return a promise when error handling is completed and FirebaseUI
      // will reset, clearing any UI. This commonly occurs for error code
      // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
      // occurs. Check below for more details on this.
      // return handleUIError(error);
      return error;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      // document.getElementById("loader").style.display = "none";
    },
  },
};

// console.log("Cool=>", database);

export {
  database,
  auth,
  firebaseAuth,
  phoneAuthProvider,
  facebookAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
  emailAuthProvider,
  StyledFirebaseAuth,
  uiConfig,
};
