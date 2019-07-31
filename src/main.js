import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAW0zeBwbvKIrsyibF7bXklS0ZpfNQiWvk",
    authDomain: "todoapp-vue-d447a.firebaseapp.com",
    databaseURL: "https://todoapp-vue-d447a.firebaseio.com",
    projectId: "todoapp-vue-d447a",
    storageBucket: "",
    messagingSenderId: "678470677312",
    appId: "1:678470677312:web:eb5c869d4069f637"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  if (!firebase.apps.length) {
    firebase.initializeApp({});
}

Vue.config.productionTip = false

export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')