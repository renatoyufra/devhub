import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChbRsZdaY6tupB6py-x__njrp4CG3IQn8",
  authDomain: "devhub-a8088.firebaseapp.com",
  databaseURL: "https://devhub-a8088.firebaseio.com",
  projectId: "devhub-a8088",
  storageBucket: "devhub-a8088.appspot.com",
  messagingSenderId: "836902021997",
  appId: "1:836902021997:web:98e1dcb7b180ac8393c864",
  measurementId: "G-07GD5GQNYN",
};

// si no se ha inicializado ninguna app => inicializamos
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGithub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider();

  return firebase.auth().signInWithPopup(gitHubProvider);
};
