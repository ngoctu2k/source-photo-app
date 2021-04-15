import firebase from "firebase";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { darkTheme, GlobalStyles, lightTheme } from "./theme/theme";
import { initUser } from "./user/userSlice";
// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/photo"));
const NotFoundPage = React.lazy(() => import("./components/NotFound"));
const SignIn = React.lazy(() => import("./features/Auth/pages/SignIn"));
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);
function App() {
  const state = useSelector((state) => state.theme);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  // Listen to the Firebase Auth state and set the local state.
  const dispatch = useDispatch();
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          console.log("chưa login ");
          const action = initUser({});
          dispatch(action);
          return;
        }
        console.log("login user ", user.displayName);
        const token = await user.getIdToken();
        const userInfor = {
          name: user.displayName,
          imageUrl: user.photoURL,
          phoneNumber: user.phoneNumber,
          providerId: user.providerId,
          uid: user.uid,
          email: user.email,
          token: token,
        };
        const action = initUser(userInfor);
        dispatch(action);
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  const { darkMode } = state;
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="App">
        <Suspense fallback={<div>Loading ...</div>}>
          <Router>
            <Header />
            <Switch>
              <Redirect exact from="/" to="/photos" />
              <Route path="/photos" component={Photo} />
              <Route path="/sign-in" component={SignIn} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </Suspense>
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
