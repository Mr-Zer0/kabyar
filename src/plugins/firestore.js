import { firebase, db } from '../firebase.js'

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
