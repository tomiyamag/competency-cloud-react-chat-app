import React, { useState, useEffect } from "react";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Channel from "./components/organisms/Channel/Channel";
import Copyright from "./components/atoms/Copyright/Copyright";

import { useStyles } from "./App.styles";

firebase.initializeApp({
  apiKey: "AIzaSyA9FanlqQCjlP55a1dy2hSY-IWAikJC4W8",
  authDomain: "competency-cloud-react-c-84d1e.firebaseapp.com",
  projectId: "competency-cloud-react-c-84d1e",
  storageBucket: "competency-cloud-react-c-84d1e.appspot.com",
  messagingSenderId: "144919540260",
  appId: "1:144919540260:web:98b6496ce72e30ecfb9eb1",
});

const auth = firebase.auth();
const db = firebase.firestore();

const App: React.FC = () => {
  const classes = useStyles();

  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const render = () => {
    if (initializing) {
      return (
        <Box my={4}>
          <CircularProgress className={classes.loader} color="secondary" />
        </Box>
      );
    }

    return user ? (
      <>
        <Box my={4}>
          <Channel user={user} db={db} />
          <Box mt={4}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={signOut}
              className={classes.button}
            >
              Sign out
            </Button>
          </Box>
        </Box>
      </>
    ) : (
      <Box my={4}>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={signInWithGoogle}
          className={classes.button}
        >
          Sign in with Google
        </Button>
      </Box>
    );
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1">
          Competency Cloud React Chat App
        </Typography>
        {render()}
      </Box>

      <Copyright />
    </Container>
  );
};

export default App;
