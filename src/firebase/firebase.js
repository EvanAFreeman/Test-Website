import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    //appId: process.env.FIREBASE_APP_ID
    //measurementId: "G-RQE6MHMHYZ"
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };


  /*
  //this one shows all of the existing data at the start and when ones added
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  */

/* //reposts the data every time there is a change
  database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });
*/


/* //logs all of the data currently in the database
  database.ref('expenses').once('value').then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });
*/



  /*
  database.ref('expenses').push({
    description: 'stuff',
    note: 'First',
    amount: '$100',
    createdAt: '10:00'
  });



  */
  //database.ref('notes/-MHQP1dS673mjmqbhaHM').remove();

  /*
  database.ref('notes').push({
    title: 'Course topics',
    body: 'React Native, Angular, Python'
  });
  */

  /*
  const firebaseNotes = {
    notes: {
      sadfs: {
        title: 'First note!',
        body: 'This is my note'
      },
      sadfsjadgjsad: {
        title: 'Another note',
        body: 'This is my note'
      }
    }
  }

  const notes = [{
    id: '12',
    title: 'First note!',
    body: 'This is my note'
  }, {
    id: '777',
    title: 'Another note',
    body: 'This is my note'
  }]
  database.ref('notes').set(notes);
  */



  /*
  database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
  }, (e) => {
    console.log('Error with data fetching', e)
  })
  */



  /*
  //auto reruns whenever data is changed
  const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
  }, (e) => {
    console.log('Error with data fetching', e);
  });

  setTimeout(() => {
    database.ref('age').set(29);
  }, 3500);

  setTimeout(() => {
    database.ref().off(onValueChange);
  }, 7000);

  //wont happen due to being turned off
  setTimeout(() => {
    database.ref('age').set(30);
  }, 10500);




  /*
  database.ref().once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  }).catch((e) => {
    console.log('Error fetching data', e)
  })
*/

/*
  database.ref('isSingle').remove().then(() => {
    console.log('Data was removed')
  }).catch((e) => {
    console.log('Data was not removed')
  });

*/
/*
  database.ref().set({
      name: 'Evan Freeman',
      age: 24,
      stressLevel: 6,
      job: {
        title: 'Software developer',
        company: 'Google'
      },
      location: {
        city: 'Sausalito',
        country: 'US'
      }
  }).then(() => {
      console.log('Data is saved');
  }).catch((e) => {
    console.log('This failed: ', e)
  });

  database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
  });
*/

  /*
  database.ref().update({
    job: 'Manager',
    //this allows you to specify inside what to change and has to be in quotes
    'location/city': 'Boston'
  });

  //database.ref().set('This is my data')

  //database.ref('age').set(25);
  //database.ref('location/city').set('SF');

  database.ref('attributes').set({
    height: '5 foot 10',
    weight: '140 pounds'
    }).then(() => {
        console.log('It worked!');
    }).catch(() => {
        console.log('Didnt work')
    });
    */