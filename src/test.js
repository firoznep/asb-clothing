import firebase from 'firebase/app';

import 'firebase/firebase';

const db = firebase.firestore();

const addItem = () => {
  try {
    return db.collection('FruitsList').add({
      name: 'Apple',
      weight: '4kg',
    });
  } catch (err) {
    console.log(err);
  }
};

export default addItem;
