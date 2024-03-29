// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { Box, Container, Typography } from "@material-ui/core";

// // Configure Firebase.
// const config = {
//   apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
//   authDomain: 'myproject-1234.firebaseapp.com',
//   // ...
// };
// firebase.initializeApp(config);

// Configure FirebaseUI.

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };

function SignIn() {
  return (
    <>
      <Container maxWidth="false">
        <Box component="div" mt={10}>
          <h3 style={{fontSize:32,textAlign:"center"}}>Sign in</h3>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Box>
      </Container>
    </>
  );
}

export default SignIn;
