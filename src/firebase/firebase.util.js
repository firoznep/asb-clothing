import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA-tOvNURO9P9NVygENjnjRX3jRpH2rI3s',
  authDomain: 'asb-clothing.firebaseapp.com',
  databaseURL: 'https://asb-clothing.firebaseio.com',
  projectId: 'asb-clothing',
  storageBucket: 'asb-clothing.appspot.com',
  messagingSenderId: '973947640947',
  appId: '1:973947640947:web:e1e17ed4860ded6235de06',
  measurementId: 'G-EC366PJQ9N',
};

export const createUserProfileDocument = async (userAuth, additionalProps) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalProps,
      });
    } catch (err) {
      console.log('Error Creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
