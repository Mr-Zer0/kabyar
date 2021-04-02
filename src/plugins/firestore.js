import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FB_DATABASE_URL,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FB_APP_ID,
  measurementId: process.env.VUE_APP_FB_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default {
  install: (app, option) => {
    // firebase object global varable
    app.config.globalProperties.$firebase = firebase

    // forestore object global variable
    app.config.globalProperties.$db = db

    // db collection global variables
    app.config.globalProperties.$poems = db.collection('poems')
    app.config.globalProperties.$eras = db.collection('eras')
    app.config.globalProperties.$types = db.collection('types')
    app.config.globalProperties.$poets = db.collection('poets')
  }
}
