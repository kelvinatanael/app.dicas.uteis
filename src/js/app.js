// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/default.scss';

// Import App Component
import App from '../components/app.vue';

// Import Firebase
import firebase from "firebase/app";

//Import Vue Quill Editor
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.snow.css';

//Import Plugins Default
import '@/axios/axios';
import store from '@/store/store';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Start plugin Vue Quill Editor
Vue.use(VueQuillEditor);

// CONFIG FIREBASE
const configOptions = {
  apiKey: "AIzaSyDBF2z4KnyYLjV44MpFXkb_giB6-u4UkSc",
  authDomain: "app-dicas-uteis.firebaseapp.com",
  projectId: "app-dicas-uteis",
  storageBucket: "app-dicas-uteis.appspot.com",
  messagingSenderId: "604738009038",
  appId: "1:604738009038:web:d88a6f645c48a4e6d11d9f",
  measurementId: "G-2YHEF2XPNJ"
};
// INITIALIZE FIREBASE
firebase.initializeApp(configOptions);

// INITIALIZE ANALYTICS
firebase.analytics();

firebase.auth().onAuthStateChanged((user) => {
  console.log("User auth status has changed!", user);
  store.dispatch("fetchUser", user);
  if (user){
    store.dispatch('consultUser', user.uid);
    store.dispatch('consultAdminUser', user);
  }
});

// FILTERS VUE
Vue.filter('dinheiro', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
  // Register App Component
  components: {
    app: App
  },
});