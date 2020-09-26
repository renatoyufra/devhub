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

// inicializar la BD firestore
var db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGithub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider();

  return firebase.auth().signInWithPopup(gitHubProvider);
};

export const addDevit = ({ avatar, content, userId, userName }) => {
  return db.collection("devits").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  });
};

export const fetchLatestDevits = () => {
  return db
    .collection("devits")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { createdAt } = data;
        const date = new Date(createdAt.seconds * 1000);
        const normalizedCreatedAt = new Intl.DateTimeFormat("es-ES").format(
          date
        );

        return {
          ...data,
          id,
          createdAt: normalizedCreatedAt,
        };
      });
    });
};
